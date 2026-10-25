const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const site = require('../data/site.json');
const posts = require('../data/blogPosts.json');

const output = path.resolve(__dirname, '..', 'out');
const results = [];
const absolute = route => new URL(route, `${site.origin}/`).href;
const decode = value => value.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const read = route => fs.readFileSync(path.join(output, route === '/' ? 'index.html' : `${route.slice(1)}.html`), 'utf8');

function attrs(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
}

function inspect(route) {
  const html = read(route);
  const head = html.match(/<head>([\s\S]*?)<\/head>/)[1];
  const metas = [...head.matchAll(/<meta\b[^>]*>/g)].map(match => attrs(match[0]));
  const links = [...head.matchAll(/<link\b[^>]*>/g)].map(match => attrs(match[0]));
  const titles = [...head.matchAll(/<title>(.*?)<\/title>/g)];
  assert.equal(titles.length, 1, `Título duplicado/ausente: ${route}`);
  const canonical = links.filter(link => link.rel === 'canonical');
  assert.equal(canonical.length, 1, `Canonical duplicado/ausente: ${route}`);
  assert.equal(canonical[0].href, absolute(route));
  const meta = key => {
    const matches = metas.filter(item => item.name === key || item.property === key);
    assert.equal(matches.length, 1, `Meta ${key} duplicada/ausente: ${route}`);
    assert(matches[0].content, `Meta ${key} vazia: ${route}`);
    return matches[0].content;
  };
  meta('description');
  return { html, head, meta, title: decode(titles[0][1]) };
}

for (const route of ['/', '/din_page', '/termos', '/privacidade']) {
  const page = inspect(route);
  if (route === '/termos' || route === '/privacidade') {
    assert.equal(page.meta('og:url'), absolute(route));
    assert.equal(page.meta('robots'), 'noindex, follow');
  }
  results.push({ route, canonical: 'ok', metadata: 'ok' });
}

const blog = inspect('/blog');
assert.equal(blog.title, site.blogTitle);
assert.equal(blog.meta('description'), site.blogDescription);
const listingData = JSON.parse(blog.html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s)[1]);
assert.deepEqual(listingData.props.pageProps.posts, [...posts].sort((a, b) => b.date.localeCompare(a.date)));

for (const [route, post] of [['/blog', null], ...posts.map(post => [`/blog/${post.slug}`, post])]) {
  const page = post ? inspect(route) : blog;
  const expectedTitle = post ? post.seoTitle || `${post.title} | Blog TECHWAY` : site.blogTitle;
  const expectedDescription = post ? post.metaDescription || post.subtitle : site.blogDescription;
  assert.equal(page.title, expectedTitle);
  assert.equal(page.meta('description'), expectedDescription);
  assert.equal(page.meta('og:title'), expectedTitle);
  assert.equal(page.meta('og:description'), expectedDescription);
  assert.equal(page.meta('og:url'), absolute(route));
  assert.equal(page.meta('og:locale'), site.locale);
  assert.equal(page.meta('twitter:card'), 'summary_large_image');
  assert.equal(page.meta('twitter:title'), expectedTitle);
  assert.equal(page.meta('twitter:description'), expectedDescription);
  const image = absolute(post ? post.featuredImage : site.image);
  assert.equal(page.meta('og:image'), image);
  assert.equal(page.meta('twitter:image'), image);
  page.meta('og:image:alt');
  page.meta('twitter:image:alt');
  assert(fs.existsSync(path.join(__dirname, '..', 'public', new URL(image).pathname)));

  if (post) {
    assert.equal(page.meta('og:type'), 'article');
    assert.equal(page.meta('article:published_time'), post.date);
    const scripts = [...page.head.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)];
    assert.equal(scripts.length, 1, `JSON-LD duplicado/ausente: ${route}`);
    assert(!scripts[0][1].includes('<'), 'JSON-LD sem escape HTML');
    const data = JSON.parse(scripts[0][1]);
    assert.equal(data['@context'], 'https://schema.org');
    assert.equal(data['@type'], 'BlogPosting');
    assert.equal(data.headline, post.title);
    assert.equal(data.description, expectedDescription);
    assert.equal(data.url, absolute(route));
    assert.equal(data.mainEntityOfPage['@id'], absolute(route));
    assert.equal(data.datePublished, post.date);
    assert(!('dateModified' in data), 'Não inventar data de revisão');
    assert.deepEqual(data.image, [image]);
    assert.equal(data.inLanguage, 'pt-BR');
    assert.equal(data.author.name, post.author.split(' - ')[0]);
    assert.equal(data.author['@type'], post.author === 'Equipe TECHWAY' ? 'Organization' : 'Person');
    const actual = JSON.parse(page.html.match(/<script id="__NEXT_DATA__"[^>]*>(.*?)<\/script>/s)[1]);
    assert.deepEqual(actual.props.pageProps.post, post, `Conteúdo alterado: ${route}`);
    assert.equal([...page.html.matchAll(/<h1\b/g)].length, 1);
    for (const asset of [post.featuredImage, ...post.content.sections.map(section => section.image).filter(Boolean)]) {
      assert(fs.existsSync(path.join(__dirname, '..', 'public', asset)), `Imagem ausente: ${asset}`);
    }
    const cta = new URL(post.cta.link, `${site.origin}/`);
    if (cta.origin === site.origin) assert(fs.existsSync(path.join(output, cta.pathname === '/' ? 'index.html' : `${cta.pathname.slice(1)}.html`)));
  } else {
    assert.equal(page.meta('og:type'), 'website');
  }
  results.push({ route, metadata: 'ok', structuredData: post ? 'ok' : 'not-applicable', content: 'preserved' });
}

const sitemap = fs.readFileSync(path.join(output, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
const expected = ['/', '/blog', '/din_page', ...posts.map(post => `/blog/${post.slug}`)].map(absolute);
assert.deepEqual(urls, expected);
assert.equal(new Set(urls).size, urls.length);
assert(!sitemap.includes('<lastmod>'), 'Sem data de revisão confiável, omitir lastmod');
const robots = fs.readFileSync(path.join(output, 'robots.txt'), 'utf8');
assert(robots.includes('User-agent: *\nAllow: /'));
assert(!robots.includes('Disallow:'));
assert(robots.includes(`Sitemap: ${site.origin}/sitemap.xml`));
assert(fs.existsSync(path.join(output, '404.html')));

const report = { result: 'passed', pages: results, sitemap: urls, robots: 'passed', unknownRouteFallback: '404.html exists; browser not tested' };
if (process.argv[2]) fs.writeFileSync(path.resolve(process.argv[2]), JSON.stringify(report, null, 2) + '\n');
console.log(`SEO aprovado: ${results.length} páginas, ${posts.length} BlogPosting, ${urls.length} URLs no sitemap; conteúdo e CTAs preservados.`);
