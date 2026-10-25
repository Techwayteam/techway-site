const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const site = require('../data/site.json');
const posts = require('../data/blogPosts.json');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'out');
const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(new Date());
const slugs = new Set();

// O JSON é a lista pública de rotas. Falhar evita publicar rascunhos/futuros
// por um caminho enquanto outro consumidor os esconde silenciosamente.
for (const post of posts) {
  assert.match(post.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug inválido');
  assert(!slugs.has(post.slug), `Slug repetido: ${post.slug}`);
  slugs.add(post.slug);
  assert(post.status === undefined || post.status === 'published', `Post não publicado no JSON público: ${post.slug}`);
  assert.match(post.date, /^\d{4}-\d{2}-\d{2}$/, `Data inválida: ${post.slug}`);
  assert.equal(new Date(`${post.date}T12:00:00Z`).toISOString().slice(0, 10), post.date);
  assert(post.date <= today, `Post futuro no JSON público: ${post.slug}`);
}

const routes = ['/', '/blog', '/din_page', ...posts.map(post => `/blog/${post.slug}`)];
const urls = routes.map(route => {
  const file = path.join(output, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
  assert(fs.existsSync(file), `Rota não exportada: ${route}`);
  const html = fs.readFileSync(file, 'utf8');
  const url = new URL(route, `${site.origin}/`).href;
  assert(html.includes(`rel="canonical" href="${url}"`), `Canonical ausente/divergente: ${route}`);
  assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), `Noindex no sitemap: ${route}`);
  return url;
});

const escapeXml = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n') + '\n</urlset>\n';

fs.writeFileSync(path.join(output, 'sitemap.xml'), xml);
fs.writeFileSync(path.join(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
console.log(`SEO: sitemap com ${urls.length} URLs e robots.txt gerados em out/.`);

// O workflow já executa npm run build: os mesmos aceites passam a proteger o deploy.
require('./verify-seo.cjs');
