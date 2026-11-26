'use strict';

// Smoke pós-deploy do site público: valida HTTP real a partir do GitHub Actions.
// Não faz escrita, não envia contatos, não verifica posição/indexação em buscadores.
const assert = require('node:assert/strict');
const site = require('../data/site.json');
const posts = require('../data/blogPosts.json');

const origin = site.origin.replace(/\/$/, '');
const retries = Number(process.env.SMOKE_RETRIES || 12);
const delayMs = Number(process.env.SMOKE_DELAY_MS || 10000);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function read(path, userAgent = 'TechwaySiteSmoke/1.0') {
  const url = new URL(path, origin + '/').href;
  const response = await fetch(url, {
    headers: { 'user-agent': userAgent, 'cache-control': 'no-cache' },
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
  });
  const data = await response.text();
  assert.equal(response.status, 200, `${url}: HTTP ${response.status} (final: ${response.url})`);
  assert(data.length > 30, `${url}: resposta vazia`);
  return { url, data, response };
}

async function verifyPublicSite() {
  const [home, service, sitemap, robots, blog, logo] = await Promise.all([
    read('/'),
    read('/atendimento-agendamentos-whatsapp'),
    read('/sitemap.xml'),
    read('/robots.txt'),
    read('/blog'),
    read('/logo_techway_semslogan_transparent.png'),
  ]);

  assert(home.data.includes('atende e agenda pelo WhatsApp.'), 'Home antiga ou oferta indisponível');
  assert(home.data.includes('href="/atendimento-agendamentos-whatsapp"'), 'Home sem link da solução');
  assert(home.data.includes('Atendimento e agendamentos pelo WhatsApp | Techway'), 'Título antigo em produção');
  assert(home.data.includes('"@type":"Organization"'), 'Organization JSON-LD ausente no HTML');
  assert(home.data.includes('"@type":"WebSite"'), 'WebSite JSON-LD ausente no HTML');
  assert(!home.data.includes('Agendamentos estão em desenvolvimento'), 'Oferta antiga ainda publicada');

  assert(service.data.includes('Como funciona um agendamento pelo WhatsApp?'), 'Conteúdo comercial ausente');
  assert(service.data.includes('O que é o funcionário digital da Techway?'), 'Perguntas frequentes não exportadas');
  assert(service.data.includes('Follow-up automático não integra a oferta atual'), 'Limite da oferta ausente');
  assert(service.data.includes('"@type":"Service"'), 'Service JSON-LD ausente no HTML');
  assert(service.data.includes('rel="canonical" href="https://techway.one/atendimento-agendamentos-whatsapp"'),
    'Canonical da solução divergente');
  assert(!/name="robots"[^>]*noindex/i.test(service.data), 'Nova página com noindex');

  const expectedPaths = ['/', '/atendimento-agendamentos-whatsapp', '/blog', '/din_page', ...posts.map(p => '/blog/' + p.slug)];
  const locs = [...sitemap.data.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  const expectedLocs = expectedPaths.map(p => new URL(p, origin + '/').href);
  assert.deepEqual(locs, expectedLocs, 'Sitemap difere das URLs comerciais/editoriais previstas');

  assert(robots.data.includes('User-agent: *\nAllow: /'), 'Robots não libera crawler genérico');
  assert(robots.data.includes('Sitemap: ' + origin + '/sitemap.xml'), 'Robots sem sitemap correto');
  assert(blog.data.includes('Blog'), 'Listagem de blog fora do ar');
  assert(logo.response.headers.get('content-type')?.startsWith('image/'),
    'Logo oficial não servida como imagem');

  // Teste limitado à resposta HTTP ao User-Agent. Não testa IPs reais de crawlers.
  const articles = await Promise.all(posts.map(p => read('/blog/' + p.slug)));
  for (const [i, article] of articles.entries()) {
    assert(article.data.includes('rel="canonical" href="' + origin + '/blog/' + posts[i].slug + '"'), 'Canonical de artigo divergente');
    assert(article.data.includes('"@type":"BlogPosting"'), 'BlogPosting ausente: ' + posts[i].slug);
  }
  const bot = await read('/atendimento-agendamentos-whatsapp', 'OAI-SearchBot/1.0 (+https://openai.com/searchbot)');
  assert(bot.data.includes('Como funciona um agendamento pelo WhatsApp?'),
    'User-Agent OAI-SearchBot não recebe a página comercial');

  console.log(JSON.stringify({
    status: 'passed', origin,
    checked: [home.url, service.url, sitemap.url, robots.url, blog.url, logo.url, ...articles.map(a => a.url)],
    sitemapUrls: locs.length,
    publicOffer: 'atendimento + agendamentos',
    structuredData: ['Organization', 'WebSite', 'Service'],
    oaiUserAgentHttp: 200,
    notes: 'HTTP externo validado; não comprova Search Console, indexação, IP do crawler ou citação em respostas de IA.',
  }, null, 2));
}

async function main() {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await verifyPublicSite();
      return;
    } catch (error) {
      console.error(`Smoke HTTP ${attempt}/${retries} falhou: ${error.message}`);
      if (attempt === retries) throw error;
      await sleep(delayMs);
    }
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
