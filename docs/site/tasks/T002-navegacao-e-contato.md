# T002 — navegação do blog e contato válido

Estado: **concluída — entrega técnica local em 10/10/2026**. Prioridade: P1. Responsável: implementação; revisor: QA. Dependência: T001 satisfeita. Publicação não solicitada.

## Resultado

Leitor abre artigo, segue para uma landing pertinente e encontra contato contextual da Techway. Os dois posts antigos apontam para `/din_page?variant=default`; o terceiro mantém a home. As rotas antigas sem implementação não foram criadas nem redirecionadas: a correção está nos destinos dos botões.

## Trabalho e caminhos

Escopo ajustado pelo usuário: garantir blog → landing → contato, reutilizando as copies existentes, com avaliação de SEO em paralelo.

Arquivos: `pages/blog/index.tsx`, `pages/blog/[slug].tsx`, `pages/din_page.tsx`, `data/blogPosts.json`, `data/landingPages.ts`, `data/contact.ts`, `components/WhatsAppButton.tsx` e `components/Footer.tsx`.

Classes/props transferidas para Link; âncoras filhas removidas. Variante default pré-renderizada com título/descrição, sem Loading ou atraso artificial. Variante improvisation preservada e selecionada após hidratação; queries inválidas/repetidas retornam à default. Número centralizado nos componentes alterados, com mensagens contextuais corretamente codificadas. Rótulos de seis CTAs de landing ajustados para indicar conversa; restante da copy preservado.

Não ativar o chat legado nem inventar páginas de soluções vazias apenas para evitar 404. Usar destino existente e pertinente. Se medir clique, não bloquear navegação ou afirmar que um lead foi recebido.

## Aceite

- CTAs dos dois artigos antigos apontam a destino válido.
- HTML exportado sem âncoras aninhadas; navegação interna conferida.
- Número consistente com configuração e texto contextual codificado corretamente.
- Foco/nome das ações acessíveis; type-check e build aprovados.
- Nenhuma mensagem enviada como teste sem pedido para envio.

## Evidência e limites

[Validação e SEO](../evidence/2026-10-10-T002-navegacao.md): type-check/build aprovados e 65 verificações do export/Chrome local, sem erros de JavaScript/hidratação. Telas de 360, 390 e 1280 px, teclado, histórico, imagens e default sem JavaScript conferidos.

Recebimento de WhatsApp não foi testado. Oferta, promessas e depoimentos mantidos exigem revisão comercial/editorial, fora do aceite técnico desta tarefa. Não houve commit/push/deploy. SEO completo, canonical e sitemap permanecem em T006.
