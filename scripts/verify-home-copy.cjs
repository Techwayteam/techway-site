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
  'Seu funcionário digital atende e agenda pelo WhatsApp.',
  'Seu WhatsApp chama. Você nem sempre pode parar para responder.',
  'Feito para pequenos negócios',
  'Começamos pelo atendimento que mais toma o seu tempo.',
  'O atendimento é só o começo.',
  'Hoje, começamos pelo atendimento no WhatsApp.',
  'A próxima funcionalidade da Techway pode até nascer',
  'Se o seu negócio cresce, a Techway cresce junto.',
  'Avaliamos juntos',
  'Agendamentos disponíveis',
  'Atendimento e agendamentos pelo WhatsApp já podem ser contratados.',
  'Da primeira pergunta ao agendamento.',
  'Os horários e a reserva mostrados são apenas exemplos',
];
for (const phrase of required) {
  assert(readable.includes(phrase), 'Trecho ausente na home exportada: ' + phrase);
}
assert(!readable.includes('Agendamentos estão em desenvolvimento'), 'Oferta antiga da agenda não pode voltar');
assert(!readable.includes('O agendamento autônomo pelos clientes ainda não está liberado como oferta padrão'), 'Oferta aprovada não pode ser descrita como indisponível');
assert(!readable.includes('Já faz agendamentos e follow-up?'), 'FAQ antiga não pode voltar');
assert(!readable.includes('Outros funcionários digitais fazem parte da nossa visão de futuro'), 'Promessa genérica de módulos futuros não pode voltar');
assert(readable.includes('Ideias e sugestões não são promessas de desenvolvimento.'), 'Evolução não deve prometer funcionalidades sem avaliação');
assert.equal((main.match(/<h1\b/g) || []).length, 1, 'A home precisa de um único H1');
for (const id of ['hero', 'solucoes', 'exemplo', 'como-funciona', 'limites', 'early-access', 'faq', 'visao', 'contato']) {
  assert(html.includes('id="' + id + '"'), 'Âncora ausente: #' + id);
}
assert(readable.indexOf('O atendimento é só o começo.') < readable.indexOf('Seu negócio tem planos. Vamos abrir espaço para eles?'),
  'A visão deve anteceder o convite comercial final');
for (const name of ['techway-empreendedora-hq.webp', 'techway-assistente-hq.webp']) {
  const file = path.resolve(__dirname, '../out/illustrations', name);
  assert(fs.existsSync(file), 'Imagem 3D ausente no export: ' + name);
  const bytes = fs.readFileSync(file);
  assert(bytes.length > 1000 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP',
    'Imagem 3D ausente ou corrompida: ' + name);
}
console.log('Copy comercial aprovada no export: atendimento + agendamento disponíveis, crescimento conjunto, demo fictícia, CTA e âncoras.');
