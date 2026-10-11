const fs = require('node:fs');
const path = require('node:path');
const { spawn } = require('node:child_process');
const assert = require('node:assert/strict');
const root = process.cwd();
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', [
  '--headless', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=4180',
  `--user-data-dir=${path.join(root, '.local-backups/2026-10-11-S01-cdp')}`,
  'about:blank'
], { windowsHide: true, stdio: 'ignore' });
let socket;
(async () => {
  let pages;
  for (let attempt = 0; attempt < 40; attempt++) {
    try { pages = await (await fetch('http://127.0.0.1:4180/json/list')).json(); break; }
    catch { await delay(250); }
  }
  assert.ok(pages, 'Chrome debugging endpoint did not start');
  const page = pages.find((item) => item.type === 'page');
  socket = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = reject; });
  let id = 0;
  const pending = new Map();
  const browserErrors = [];
  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.method === 'Runtime.exceptionThrown') browserErrors.push(message.params.exceptionDetails.text);
    if (message.id) {
      const callback = pending.get(message.id);
      if (callback) { pending.delete(message.id); message.error ? callback.reject(message.error) : callback.resolve(message.result); }
    }
  };
  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const requestId = ++id;
    pending.set(requestId, { resolve, reject });
    socket.send(JSON.stringify({ id: requestId, method, params }));
  });
  await send('Page.enable');
  await send('Runtime.enable');
  const results = [];
  for (const width of [390, 1280]) {
    await send('Emulation.setDeviceMetricsOverride', { width, height: 844, deviceScaleFactor: 1, mobile: width === 390 });
    await send('Page.navigate', { url: 'http://127.0.0.1:4179/blog/atendimento-ia-alem-respostas-automaticas' });
    await delay(2000);
    await send('Runtime.evaluate', { expression: `document.querySelector('article img[loading="lazy"]').scrollIntoView({block:'center'})` });
    await delay(1000);
    const imageReady = await send('Runtime.evaluate', { expression: `Array.from(document.querySelectorAll('article img')).every(img=>img.complete && img.naturalWidth>0)`, returnByValue: true });
    assert.equal(imageReady.result.value, true, 'Both photographs must load');
    const humanShot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
    fs.writeFileSync(`docs/site/evidence/2026-10-11-S01-human-${width}.png`, Buffer.from(humanShot.data, 'base64'));
    await send('Runtime.evaluate', { expression: 'scrollTo(0,0)' });
    const result = await send('Runtime.evaluate', { expression: `JSON.stringify({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,title:document.querySelector('h1').textContent,quotes:document.querySelectorAll('article blockquote').length,items:document.querySelectorAll('article section li').length,cta:document.querySelector('article a[href="/din_page?variant=default"]').getAttribute('href'),images:Array.from(document.querySelectorAll('article img')).map(img=>({src:img.getAttribute('src'),width:img.getAttribute('width'),height:img.getAttribute('height'),loading:img.loading,alt:img.alt})),comparisonColumns:getComputedStyle(document.querySelector('figure[aria-label] > div')).gridTemplateColumns,sections:Array.from(document.querySelectorAll('article h2')).map(h=>h.textContent)})`, returnByValue: true });
    const measured = JSON.parse(result.result.value);
    assert.equal(measured.width, width);
    assert.ok(measured.scrollWidth <= width, `Horizontal overflow at ${width}px: ${measured.scrollWidth}`);
    assert.equal(measured.quotes, 3);
    assert.equal(measured.items, 4);
    assert.equal(measured.cta, '/din_page?variant=default');
    assert.equal(measured.images.length, 2);
    assert.ok(measured.images.every((image) => image.alt.length > 0));
    assert.equal(measured.images[0].width, '1600');
    assert.equal(measured.images[1].loading, 'lazy');
    assert.equal(measured.comparisonColumns.split(' ').length, width === 390 ? 1 : 2);
    const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    const name = width === 390 ? 'mobile' : 'desktop';
    fs.writeFileSync(`docs/site/evidence/2026-10-11-S01-${name}.png`, Buffer.from(shot.data, 'base64'));
    results.push(measured);
  }
  assert.deepEqual(browserErrors, []);
  fs.writeFileSync('docs/site/evidence/2026-10-11-S01-browser.json', JSON.stringify({ results, browserErrors, note: 'Isolated build of the current local source; not a public deployment.' }, null, 2));
  console.log(JSON.stringify({ widths: results.map((result) => result.width), horizontalOverflow: false, browserErrors }));
})().catch((error) => { console.error(error); process.exitCode = 1; }).finally(() => { socket?.close(); chrome.kill(); });
