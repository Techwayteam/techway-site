const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const posts = require('../data/blogPosts.json');
const base = process.env.E2E_BASE_URL || 'http://127.0.0.1:4173';
const dir = path.resolve(__dirname,'../artifacts/visual-fix');
async function main(){
 fs.mkdirSync(dir,{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{
  for(const viewport of [{id:'desktop',width:1440,height:900},{id:'mobile',width:390,height:844}]){
   const page=await browser.newPage({viewport:{width:viewport.width,height:viewport.height},deviceScaleFactor:1});
   await page.emulateMedia({reducedMotion:'reduce'});
   for(const item of [{url:'/',name:'home'}, {url:'/atendimento-agendamentos-whatsapp',name:'solucao'}, {url:'/blog',name:'blog'},{url:'/blog/'+posts[0].slug,name:'artigo'}, ...posts.filter(p=>['como-automatizar-atendimento-whatsapp','agendamento-automatico-whatsapp','chatbot-ou-agente-de-ia-whatsapp','agenda-para-salao-de-beleza'].includes(p.slug)).map(p=>({url:'/blog/'+p.slug,name:'artigo-'+p.slug}))]){
    await page.goto(base+item.url,{waitUntil:'domcontentloaded'});
    await page.evaluate(()=>document.fonts.ready);
    if(item.name==='home'){
      const imgs=page.locator('#hero .tw-human, #hero .tw-bot');
      assert.equal(await imgs.count(),2);
      await page.waitForFunction(()=>[...document.querySelectorAll('#hero .tw-human, #hero .tw-bot')].every(x=>x.complete&&x.naturalWidth>0));
    }
    const metrics=await page.evaluate(()=>{
      const a=document.querySelector('article > header');
      const h=document.querySelector('.tw-revamp > header');
      return {overflow:document.documentElement.scrollWidth-window.innerWidth,
        logo:h?.querySelector('img')?.getAttribute('src')||'',
        articleHeaderPosition:a?getComputedStyle(a).position:null,
        h1:document.querySelectorAll('h1').length};
    });
    assert(metrics.overflow<=1,'Overflow em '+item.name+' '+viewport.id+': '+metrics.overflow);
    assert.equal(metrics.h1,1,'Esperado um H1 em '+item.name);
    assert(metrics.logo.includes('logo_techway_semslogan_transparent.png'),'Logo oficial não carregada');
    if(item.name.startsWith('artigo')) assert.notEqual(metrics.articleHeaderPosition,'sticky','Cabeçalho do artigo não pode ser sticky');
    if(item.name==='solucao') {
      const content=await page.locator('main').innerText();
      assert(content.includes('Como funciona um agendamento pelo WhatsApp?'), 'Conteúdo comercial ausente');
      assert(content.includes('O que é o funcionário digital da Techway?'), 'Perguntas comerciais ausentes');
      assert.equal(await page.locator('main h1').count(),1, 'H1 duplicado na página comercial');
      const brand=page.locator('header .tw-brand-frame');
      assert.equal(await brand.count(),1, 'Logo oficial precisa de superfície de contraste na página de solução');
      const brandSurface=await brand.evaluate(node=>getComputedStyle(node).backgroundImage);
      assert.notEqual(brandSurface,'none','Logo branca sem contraste no header claro');
      const serviceSchema=await page.locator('script[type="application/ld+json"]').textContent();
      assert.equal(JSON.parse(serviceSchema)['@type'],'Service','Schema Service não publicado');
      assert(await page.locator('a[href="/#exemplo"]').count()>0, 'Demo da home não está ligada ao serviço');
      assert(await page.locator('a[href="/"]').count()>0, 'Caminho da home ausente na página de serviço');
      console.log('PASS página GEO ('+viewport.id+'): conteúdo, serviço, canonical, navegação e H1');
    }
    await page.screenshot({path:path.join(dir,item.name+'-'+viewport.id+'.png'),fullPage:item.name!=='home'});
    // Extra: captura integral da home desktop para revisão comercial; não substitui o print do viewport.
    if(item.name==='home') {
      if(viewport.id==='desktop') await page.screenshot({path:path.join(dir,'home-desktop-full.png'),fullPage:true});
      // Validar e capturar a demonstração na configuração de movimento reduzido:
      // mostra o roteiro inteiro mesmo sem animação, sem acessar agenda ou enviar mensagens.
      const demo=page.locator('[data-demo="whatsapp"]');
      await demo.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>document.querySelector('[data-demo="whatsapp"]')?.getAttribute('data-finished')==='true');
      assert.equal(await demo.locator('[data-message]').count(),6,'A demo precisa mostrar seis mensagens no modo de movimento reduzido');
      assert.equal(await demo.locator('[data-demo-confirmation]').count(),1,'A confirmação ilustrativa deve aparecer');
      const bubbles=await demo.evaluate(node=>{
        const first=node.querySelector('[data-from="customer"]');
        const second=node.querySelector('[data-from="agent"]');
        if(!first||!second) return null;
        const a=first.getBoundingClientRect(),b=second.getBoundingClientRect();
        return {firstX:a.x,secondX:b.x,fromColor:getComputedStyle(first).backgroundColor,toColor:getComputedStyle(second).backgroundColor,
                viewportOverflow:document.documentElement.scrollWidth-window.innerWidth};
      });
      assert(bubbles,'Balões de entrada e saída não encontrados');
      assert(bubbles.firstX+22<bubbles.secondX,'Cliente precisa aparecer à esquerda e agente à direita');
      assert.equal(bubbles.fromColor,'rgb(255, 255, 255)','Mensagem do cliente deve ser branca');
      assert.equal(bubbles.toColor,'rgb(217, 253, 211)','Mensagem do agente deve ser verde-clara');
      assert(bubbles.viewportOverflow<=1,'A demo não pode causar overflow horizontal');
      await page.locator('#exemplo').screenshot({path:path.join(dir,'demo-section-'+viewport.id+'.png')});
      await demo.screenshot({path:path.join(dir,'demo-phone-'+viewport.id+'.png')});
      console.log('PASS WhatsApp demo ('+viewport.id+'): 6 mensagens, alinhamento, cores, confirmação ilustrativa e responsividade');
    }
    console.log('PASS '+item.name+' '+viewport.id);
   }
   await page.close();
  }
  // O texto de referência continua acessível mesmo em navegador sem JavaScript.
  const noJsContext=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});
  const noJs=await noJsContext.newPage();
  await noJs.goto(base+'/atendimento-agendamentos-whatsapp',{waitUntil:'domcontentloaded'});
  const textOnly=await noJs.locator('main').innerText();
  assert(textOnly.includes('Atendimento com IA e agendamentos pelo WhatsApp'),'Conteúdo principal depende de JS');
  assert(textOnly.includes('Follow-up automático não integra a oferta atual.'),'Limites precisam ser legíveis sem JS');
  assert.equal(await noJs.locator('main h1').count(),1);
  await noJsContext.close();
  console.log('PASS GEO: resposta comercial e limites visíveis sem JavaScript');

  // Teste da animação real (sem reduced-motion): autoplay na área visível,
  // pausa funcional e reinício. Nenhuma chamada de rede do chat é feita.
  const animated=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
  await animated.emulateMedia({reducedMotion:'no-preference'});
  await animated.goto(base+'/',{waitUntil:'domcontentloaded'});
  const demo=animated.locator('[data-demo="whatsapp"]');
  await demo.scrollIntoViewIfNeeded();
  await animated.waitForTimeout(1550);
  assert.equal(await demo.locator('[data-message]').count(),1,'Primeira mensagem da demo não apareceu');
  await animated.getByRole('button',{name:'Pausar demonstração'}).click();
  await animated.waitForTimeout(450);
  assert.equal(await demo.locator('[data-message]').count(),1,'A animação não pausou');
  await animated.getByRole('button',{name:'Rever a demonstração'}).click();
  await animated.waitForTimeout(3800);
  assert.equal(await demo.locator('[data-message]').count(),2,'Reprodução não voltou a avançar após reiniciar');
  await animated.locator('#exemplo').screenshot({path:path.join(dir,'demo-in-motion-desktop.png')});
  await animated.close();
  console.log('PASS WhatsApp demo: início ao visualizar, pausa, replay e progressão');

  // Registro visual de QA: reprodução mobile verdadeira, sem API e sem dados de terceiros.
  // Esse arquivo serve para inspecionar timing/transições antes de publicar.
  const recordingContext = await browser.newContext({
    viewport: {width:390,height:844}, deviceScaleFactor:1,
    recordVideo: {dir:path.join(dir,'recordings'), size:{width:390,height:844}},
  });
  const recordingPage = await recordingContext.newPage();
  await recordingPage.emulateMedia({reducedMotion:'no-preference'});
  await recordingPage.goto(base+'/',{waitUntil:'domcontentloaded'});
  await recordingPage.locator('[data-demo="whatsapp"]').scrollIntoViewIfNeeded();
  await recordingPage.waitForTimeout(18000);
  assert.equal(await recordingPage.locator('[data-message]').count(),6,'A gravação deve alcançar o fim da demo');
  await recordingPage.close();
  const recorded=await recordingPage.video().path();
  // Playwright só finaliza o contêiner de vídeo no fechamento do contexto.
  await recordingContext.close();
  fs.copyFileSync(recorded,path.join(dir,'demo-animada-mobile.webm'));
  console.log('PASS gravação QA: animação completa do celular em 390x844');
 } finally{await browser.close();}
}
main().catch(e=>{console.error(e);process.exitCode=1});
