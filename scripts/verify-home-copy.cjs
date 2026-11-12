const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const html = fs.readFileSync(path.resolve(__dirname, '../out/index.html'), 'utf8');
const main = html.split('<main')[1]?.split('</main>')[0] || '';
assert(main, 'A home exportada deve conter <main>');
const readable = main.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ' ')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'")
  .replace(/\s+/g, ' ').trim();

const required = [
  'Você cuida do seu negócio. A Techway ajuda a cuidar do seu atendimento.',
  'Seu WhatsApp chama. Você nem sempre pode parar para responder.',
  'O que seu funcionário digital já pode fazer',
  'Começamos pelo atendimento que mais toma o seu tempo.',
  'O atendimento é só o começo.',
  'Hoje, começamos pelo atendimento no WhatsApp.',
  'Outros funcionários digitais fazem parte da nossa visão de futuro',
  'Em desenvolvimento',
  'Fora da oferta atual',
];
for (const phrase of required) {
  assert(readable.includes(phrase), 'Trecho ausente na home exportada: ' + phrase);
}
assert.equal((main.match(/<h1\b/g) || []).length, 1, 'A home precisa de um único H1');
for (const id of ['hero', 'solucoes', 'exemplo', 'como-funciona', 'limites', 'early-access', 'faq', 'visao', 'contato']) {
  assert(html.includes('id="' + id + '"'), 'Âncora ausente: #' + id);
}
assert(readable.indexOf('O atendimento é só o começo.') < readable.indexOf('E se seu WhatsApp deixasse de depender'),
  'A visão deve anteceder o convite comercial final');
console.log('Copy T022 aprovada no export: dor, oferta atual, limites, visão de futuro, CTA e âncoras.');
