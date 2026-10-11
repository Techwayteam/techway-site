// Run from the repository root. Produces an editorial draft, never public data.
const fs = require('node:fs');
const source = fs.readFileSync('docs/site/editorial/rascunhos/S01-copy-recebida.md', 'utf8').replace(/\r\n/g, '\n');
const start = source.indexOf('# Seu cliente');
const end = source.indexOf('## Complementos para publicação', start);
if (start < 0 || end < 0) throw new Error('Article boundaries not found');
const article = source.slice(start, end).trim();
const title = article.split('\n')[0].slice(2);
const bodyStart = article.indexOf('\n\n', article.indexOf('\n\n') + 2);
const subtitle = article.slice(article.indexOf('\n\n') + 2, bodyStart).trim().replace(/^\*|\*$/g, '');
const body = article.slice(bodyStart).trim();
const [main, closing] = body.split('\n---\n');
const parts = main.split(/^## /m);
function blocks(text) {
  return text.trim().split(/\n\s*\n/).filter(Boolean).map((part) => {
    if (part.startsWith('- ')) return { type: 'list', items: part.split('\n').map((item) => item.replace(/^- /, '')) };
    if (part.startsWith('"') && part.endsWith('"')) return { type: 'quote', text: part.slice(1, -1) };
    return { type: 'paragraph', text: part };
  });
}
const introductionBlocks = blocks(parts[0]);
const sections = parts.slice(1).map((part) => {
  const breakAt = part.indexOf('\n');
  return { title: part.slice(0, breakAt).trim(), text: '', blocks: blocks(part.slice(breakAt)) };
});
// Editorial changes requested after the original copy was integrated.
const eventSection = sections[1];
eventSection.title = 'O que as empresas estão aprendendo sobre atendimento';
eventSection.blocks[0].text = 'Esse foi um dos aprendizados que mais nos chamou a atenção durante a FEBRABAN Tech 2026.';
eventSection.blocks[3].text = 'Pense, por exemplo, em alguém que entra em contato com uma empresa para acompanhar um pedido.';
eventSection.blocks[7].text = 'E embora as grandes empresas tenham operações muito diferentes das de um salão de beleza, uma oficina ou uma pequena loja, o princípio por trás dessa evolução é o mesmo:';
sections[5].blocks[7].text = '**É permitir que você ofereça uma excelente experiência ao cliente, com apoio digital que atua conforme a demanda do seu negócio.**';
// The founder confirmed in this session that he attended the event in person.
// Preserve the first-hand wording from the supplied copy.
sections[0].blocks.push({ type: 'comparison' });
const humanSection = sections.find((section) => section.title.includes('atendimento humano'));
humanSection.blocks.splice(3, 0, {
  type: 'image', src: '/atendimento-humano-techway.webp',
  alt: 'Proprietária de pequeno negócio atendendo pessoalmente uma cliente.',
  width: 1200, height: 800,
  caption: 'Automatizar tarefas também pode significar ter mais tempo para as pessoas. Imagem ilustrativa gerada com IA.'
});
const closingParts = closing.trim().split(/\n\s*\n/);
const ctaText = closingParts.pop().replace(/^\*\*|\*\*$/g, '');
const conclusionBlocks = closingParts.map((text) => ({ type: 'paragraph', text: text.replace(/^\*|\*$/g, '') }));
const draft = {
  status: 'draft',
  editorialId: 'S01',
  receivedAt: '2026-10-11',
  slug: 'atendimento-ia-alem-respostas-automaticas',
  title, subtitle,
  seoTitle: 'Atendimento com IA: além das respostas automáticas | Techway',
  metaDescription: 'Descubra como a inteligência artificial pode ir além das respostas automáticas e ajudar pequenos negócios a resolver pedidos pelo WhatsApp.',
  author: 'Leonardo Reis - Founder Techway', date: null,
  layout: 'editorial',
  featuredImage: '/atendimento-ia-capa.webp',
  featuredImageAlt: 'Empreendedora consultando mensagens no celular após o expediente em seu salão.',
  featuredImageWidth: 1600, featuredImageHeight: 900,
  content: { introduction: '', introductionBlocks, sections, conclusion: '', conclusionBlocks },
  cta: { text: ctaText, link: '/din_page?variant=default' },
  tags: ['atendimento', 'inteligência artificial', 'WhatsApp', 'funcionário digital'],
  sources: [
    { title: 'FEBRABAN — balanço da edição 2026 e liderança humana', url: 'https://portal.febraban.org.br/noticia/4491/pt-br/' },
    { title: 'FEBRABAN — pesquisa sobre aplicações de IA em 2026', url: 'https://portal.febraban.org.br/noticia/4490/pt-br/' }
  ],
  related: [{ title: 'Cuidar do cliente ou do negócio? O dilema de quem empreende sozinho', slug: 'cuidar-do-cliente-ou-do-negocio' }]
};
fs.writeFileSync('docs/site/editorial/rascunhos/S01-integracao.json', JSON.stringify(draft, null, 2) + '\n');
console.log(JSON.stringify({ slug: draft.slug, sections: sections.length, introductoryBlocks: introductionBlocks.length, pending: ['date'] }));
