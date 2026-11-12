const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const posts = require('../data/blogPosts.json');

const BASE_URL = process.env.E2E_BASE_URL || 'http://127.0.0.1:4173';

async function verifyWhatsAppLinks(page, expectedOrigin) {
  await page.waitForFunction(
    expected => {
      const links = Array.from(document.querySelectorAll('a[data-contact-page][data-contact-cta]'));
      return links.length >= 5 && links.every(link => link.getAttribute('data-contact-page') === expected);
    },
    expectedOrigin,
    { timeout: 25000 },
  );

  const links = await page.locator('a[data-contact-page][data-contact-cta]').evaluateAll(elements =>
    elements.map(element => ({
      href: element.href,
      page: element.getAttribute('data-contact-page'),
      cta: element.getAttribute('data-contact-cta'),
      target: element.target,
    })),
  );

  assert(links.length >= 5, 'Esperados pelo menos 5 CTAs atribuídos na home');
  const codes = new Set(links.map(link => link.cta));
  for (const cta of ['hero', 'exemplo', 'early-access', 'final', 'rodape']) {
    assert(codes.has(cta), 'CTA não encontrado: ' + cta);
  }

  for (const link of links) {
    const url = new URL(link.href);
    assert.equal(url.hostname, 'wa.me', 'Link deve levar ao WhatsApp');
    assert.equal(link.target, '_blank', 'Link deve abrir em nova aba');
    assert.equal(link.page, expectedOrigin);
    const text = url.searchParams.get('text') || '';
    assert(text.includes('Origem: ' + expectedOrigin + ' | CTA: ' + link.cta),
      'Atribuição não preservada na mensagem do CTA: ' + link.cta);
  }
  return links.length;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  let totalVerified = 0;
  try {
    const context = await browser.newContext();
    // Impede acesso externo e envio de mensagens. Testa somente a abertura do link.
    await context.route('https://wa.me/**', route =>
      route.fulfill({ status: 200, contentType: 'text/html', body: 'WhatsApp simulado para QA' }),
    );
    const page = await context.newPage();
    page.setDefaultTimeout(45000);

    for (const post of posts) {
      const origin = 'blog/' + post.slug;
      const expectedDestination = new URL(post.cta.link, BASE_URL);
      await page.goto(BASE_URL + '/blog/' + post.slug, { waitUntil: 'domcontentloaded' });
      await page.getByRole('link', { name: post.cta.text, exact: true }).click();
      await page.waitForURL(url =>
        url.pathname === '/' &&
        url.searchParams.get('origem') === origin &&
        url.hash === expectedDestination.hash,
      );
      totalVerified += await verifyWhatsAppLinks(page, origin);

      // Navegar pelo menu não pode apagar a origem.
      await page.locator('header a[href*="#faq"]').click();
      await page.waitForURL(url =>
        url.pathname === '/' && url.hash === '#faq' && url.searchParams.get('origem') === origin,
      );
      await verifyWhatsAppLinks(page, origin);

      // Simula o clique real do visitante, sem chamar o WhatsApp de verdade.
      const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('a[data-contact-cta="hero"]').click(),
      ]);
      await popup.waitForURL(url => url.hostname === 'wa.me');
      await popup.close();
      console.log('OK: ' + post.slug + ' -> home -> menu -> WhatsApp (' + origin + ')');
    }

    for (const path of ['/', '/?origem=blog%2Fslug-inexistente', '/?origem=origem-arbitraria']) {
      await page.goto(BASE_URL + path, { waitUntil: 'domcontentloaded' });
      await verifyWhatsAppLinks(page, 'home');
      console.log('OK: origem inválida/direta retorna home: ' + path);
    }

    await context.close();
    console.log('T021 browser QA aprovado: 4 artigos + menu + 4 popups simulados + 3 casos de home. ' +
      totalVerified + ' links principais verificados.');
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  console.error('T021 browser QA reprovado:', error);
  process.exitCode = 1;
});
