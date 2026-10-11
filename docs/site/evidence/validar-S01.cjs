const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const Module = require('node:module');
const ts = require('typescript');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const draft = JSON.parse(fs.readFileSync('docs/site/editorial/rascunhos/S01-integracao.json', 'utf8'));
const current = JSON.parse(fs.readFileSync('data/blogPosts.json', 'utf8'));
const existing = current.filter((post) => post.slug !== draft.slug);
const baseline = JSON.parse(fs.readFileSync('.local-backups/2026-10-11-S01-artifacts/blogPosts-before-S01.json', 'utf8'));
assert.deepEqual(existing.map(({ related, ...post }) => post), baseline.map(({ related, ...post }) => post), 'Pre-existing article copy, metadata and CTA must remain unchanged');
assert.ok(existing.find((post) => post.slug === 'cuidar-do-cliente-ou-do-negocio').related.some((related) => related.slug === draft.slug));
const validationRoot = path.resolve('.local-backups/2026-10-11-S01-validation');
const templateFile = path.resolve('components/blog/ArticleContent.tsx');
const compiled = ts.transpileModule(fs.readFileSync(templateFile, 'utf8'), {
  compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;
const loaded = new Module(templateFile, module);
loaded.filename = templateFile;
loaded.paths = Module._nodeModulePaths(path.dirname(templateFile));
const priorTsxLoader = require.extensions['.tsx'];
require.extensions['.tsx'] = (targetModule, filename) => {
  if (!filename.startsWith(path.resolve('components/blog') + path.sep)) throw new Error('Unexpected TSX dependency');
  const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  targetModule._compile(code, filename);
};
loaded._compile(compiled, templateFile);
if (priorTsxLoader) require.extensions['.tsx'] = priorTsxLoader;
else delete require.extensions['.tsx'];
const ArticleContent = loaded.exports.default;
const allBlocks = [...draft.content.introductionBlocks, ...draft.content.sections.flatMap((section) => section.blocks), ...draft.content.conclusionBlocks];
const html = renderToStaticMarkup(React.createElement(ArticleContent, { blocks: allBlocks }));
assert.match(html, /<strong>O atendimento aconteceu\. O problema não foi resolvido\.<\/strong>/);
assert.equal((html.match(/<blockquote /g) || []).length, 3);
assert.equal((html.match(/<li>/g) || []).length, 4);
assert.equal(draft.content.sections.length, 6);
assert.ok(['integrated_locally', 'published'].includes(draft.status));
assert.equal(draft.date, '2026-10-11');
assert.equal(draft.featuredImage, '/atendimento-ia-capa.webp');
assert.equal(draft.author, 'Leonardo Reis - Founder Techway');
assert.equal(existing.length, 3);
assert.equal(current.length, 4);
assert.ok(current.some((post) => post.slug === draft.slug));
assert.ok(draft.related.every((related) => existing.some((post) => post.slug === related.slug)));
assert.ok(draft.sources.every((source) => new URL(source.url).hostname === 'portal.febraban.org.br'));
const escaped = renderToStaticMarkup(React.createElement(ArticleContent, { blocks: [{ type: 'paragraph', text: '<script>alert(1)</script> **cuidado**' }] }));
assert.ok(!escaped.includes('<script>'));
assert.match(escaped, /&lt;script&gt;/);
assert.match(escaped, /<strong>cuidado<\/strong>/);
if (process.argv.includes('--fixture')) {
  fs.copyFileSync('data/blogPosts.json', path.join(validationRoot, 'data/blogPosts.json'));
}
if (process.argv.includes('--export')) {
  const exportDir = path.join(validationRoot, 'out');
  const article = fs.readFileSync(path.join(exportDir, `blog/${draft.slug}.html`), 'utf8');
  assert.ok(article.includes(draft.seoTitle));
  assert.ok(article.includes(draft.metaDescription));
  assert.ok(article.includes(`https://techway.one/blog/${draft.slug}`));
  assert.ok(article.includes(draft.author));
  assert.ok(article.includes('11/10/2026'));
  assert.ok(article.includes('<strong>O atendimento aconteceu. O problema não foi resolvido.</strong>'));
  assert.ok(article.includes('href="/din_page?variant=default"'));
  assert.ok(article.includes('property="og:image" content="https://techway.one/atendimento-ia-capa.webp"'));
  assert.ok(article.includes('Responder é diferente de resolver.'));
  assert.ok(article.includes('loading="lazy"'));
  const visibleArticle = article.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert.ok(visibleArticle);
  assert.ok(!visibleArticle.includes('**'));
  for (const post of existing) {
    const oldHtml = fs.readFileSync(path.join(exportDir, `blog/${post.slug}.html`), 'utf8');
    assert.ok(oldHtml.includes(post.title));
    assert.ok(oldHtml.includes(post.content.introduction));
  }
  assert.ok(!fs.existsSync(path.join(exportDir, 'blog/ia-vai-substituir-atendimento-humano.html')));
}
console.log('S01: semantic blocks, comparison, emphasis, escaping, valid links, previous content preservation and requested checks passed.');
