const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { whatsappPhoneNumber: WHATSAPP_PHONE_NUMBER } = require('../data/contact.json');
const blogPosts = require('../data/blogPosts.json');

const output = path.resolve(__dirname, '..', 'out');
const pages = [
  { route: '/', source: 'home', minimumLinks: 6 },
  { route: '/blog', source: 'blog', minimumLinks: 2 },
  { route: '/din_page', source: 'landing-default', minimumLinks: 8 },
  { route: '/termos', source: 'termos', minimumLinks: 3 },
  { route: '/privacidade', source: 'privacidade', minimumLinks: 3 },
  ...blogPosts.map(({ slug }) => ({
    route: `/blog/${slug}`,
    source: `blog/${slug}`,
    minimumLinks: 2,
  })),
];

const decodeHtml = value => value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)]
    .map(([, key, value]) => [key, decodeHtml(value)]));
}

let linkCount = 0;

for (const page of pages) {
  const file = path.join(output, page.route === '/' ? 'index.html' : `${page.route.slice(1)}.html`);
  assert(fs.existsSync(file), `Rota não exportada: ${page.route}`);
  const html = fs.readFileSync(file, 'utf8');
  const links = [...html.matchAll(/<a\b[^>]*>/g)]
    .map(match => attributes(match[0]))
    .filter(link => link.href?.startsWith('https://wa.me/'));

  assert(links.length >= page.minimumLinks, `Poucos CTAs atribuídos em ${page.route}: ${links.length}`);

  for (const link of links) {
    const url = new URL(link.href);
    assert.equal(url.pathname, `/${WHATSAPP_PHONE_NUMBER}`, `Número divergente em ${page.route}`);
    assert.equal(link.target, '_blank', `Target ausente em ${page.route}`);
    assert.match(link.rel || '', /\bnoopener\b/, `noopener ausente em ${page.route}`);
    assert.match(link.rel || '', /\bnoreferrer\b/, `noreferrer ausente em ${page.route}`);
    assert.equal(link['data-contact-page'], page.source, `Página de origem divergente em ${page.route}`);
    assert.match(link['data-contact-cta'] || '', /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `CTA inválido em ${page.route}`);

    const message = url.searchParams.get('text') || '';
    const marker = message.match(/\n\nOrigem: ([a-z0-9/-]+) \| CTA: ([a-z0-9-]+)$/);
    assert(marker, `Marcador ausente ou duplicado em ${page.route}`);
    assert.equal(marker[1], link['data-contact-page'], `Origem da mensagem divergente em ${page.route}`);
    assert.equal(marker[2], link['data-contact-cta'], `CTA da mensagem divergente em ${page.route}`);
    linkCount += 1;
  }
}

// A jornada editorial deve levar à oferta atual e preservar a origem até a home.
for (const post of blogPosts) {
  const expectedOrigin = `blog/${post.slug}`;
  const destination = new URL(post.cta.link, 'https://techway.one');
  assert.equal(destination.origin, 'https://techway.one', `Destino externo em ${post.slug}`);
  assert.equal(destination.pathname, '/', `CTA fora da home em ${post.slug}`);
  assert.equal(destination.searchParams.get('origem'), expectedOrigin, `Origem perdida em ${post.slug}`);
  assert.equal(destination.searchParams.size, 1, `Parâmetros extras no CTA de ${post.slug}`);
  assert.equal(
    destination.hash,
    post.slug === 'atendimento-ia-alem-respostas-automaticas' ? '#exemplo' : '#solucoes',
    `Âncora divergente em ${post.slug}`,
  );

  const exported = fs.readFileSync(path.join(output, `blog/${post.slug}.html`), 'utf8');
  const links = [...exported.matchAll(/<a\\b[^>]*>/g)].map(match => attributes(match[0]));
  assert(
    links.some(link => link.href && new URL(link.href, 'https://techway.one').href === destination.href),
    `CTA editorial não encontrado no HTML de ${post.slug}`,
  );
}

console.log(`Jornada editorial aprovada: ${blogPosts.length} artigos direcionam à oferta com origem preservada.`);

console.log(`Contatos aprovados: ${linkCount} CTAs atribuídos em ${pages.length} páginas; nenhum clique tratado como lead.`);
