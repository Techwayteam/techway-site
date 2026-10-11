# S01 — integração local e validação

Data: 11/10/2026. Rota: `/blog/atendimento-ia-alem-respostas-automaticas`. Estado: **integrada e validada localmente; sem deploy público**. Autoria confirmada pelo usuário: Leonardo Reis - Founder Techway; confirmou também presença física na FEBRABAN Tech 2026.

## Resultado

Copy original em `../editorial/rascunhos/S01-copy-recebida.md`, diretrizes em `../editorial/rascunhos/S01-diretrizes-visuais.md`, artefato estruturado em `../editorial/rascunhos/S01-integracao.json`. Texto aprovado preservado: adaptação só de estrutura/ênfase/citações/lista, separação do CTA e inserção das figuras. O prefácio e os complementos operacionais do GPT não entraram como corpo do artigo.

Fonte em `data/blogPosts.json`: novo artigo com slug e SEO recebidos, data da edição local 2026-10-11, autoria confirmada, duas imagens locais e links pertinentes. Conferir data real se o lançamento ocorrer depois. Três textos antigos preservados; ligação dilema → S01 adicionada, e S01 → dilema disponível. Listagem por data decrescente. Nenhuma rota para S02–S04 criada.

Template aceita blocos sem HTML arbitrário, com React escapando texto. S01 usa título/subtítulo/autoria acima da capa, fotos com dimensões e proporções preservadas, lazy na foto interna e prioridade na capa. Comparativo HTML empilha no celular. Campos de SEO/descrição/canonical e Open Graph usam a capa local; sitemap/BlogPosting continuam escopo de T006. [Produção visual e prompts](2026-10-11-S01-imagens.md).

## Validações

- `npm.cmd run type-check -- --incremental false` na fonte principal: aprovado, sem emitir cache do compilador.
- `npm.cmd run build` na cópia isolada `.local-backups/2026-10-11-S01-validation`: aprovado; 12 páginas, três artigos anteriores e S01. Código/dados/assets copiados da fonte principal, dependências existentes reutilizadas; lockfile não alterado.
- `node docs/site/evidence/validar-S01.cjs --export`: aprovado. Copy/metadados/CTAs anteriores preservados, links válidos, seis seções, três citações, quatro itens de exemplos, destaque da frase central, texto escapado, metadados e comparativo no HTML.
- Chrome com emulação em 390 e 1280 px: sem rolagem horizontal ou exceções JavaScript; comparativo com uma/duas colunas, imagens com alt/dimensões, lazy conferido e ambas carregadas. Resultado em `2026-10-11-S01-browser.json`; screenshots mobile/desktop e detalhe humano. Imagens inspecionadas visualmente.
- `http://localhost:3000/blog/atendimento-ia-alem-respostas-automaticas`: HTTP 200, texto S01 presente no servidor de prévia já ativo do usuário. Nenhum servidor do usuário foi interrompido.
- `git diff --check` nos arquivos desta execução: conferido. A checagem geral sinalizou espaço em branco preexistente em `pages/index.tsx:287`, preservado.

Os scripts `preparar-S01.cjs` e `integrar-S01.cjs` registram as etapas já executadas; não executar novamente como rotina, pois o primeiro regenera o artefato editorial e o segundo rejeita slug já integrado. `validar-S01.cjs --fixture` sincroniza apenas os dados da cópia isolada para novo QA.

## Limites e preservação

O primeiro QA usou foto/data temporárias só na cópia isolada; a evidência final usa a fonte e as fotos definitivas. O snapshot de `out` encontrou `out/trace` em uso; por isso nenhum build foi executado no diretório da prévia ativa. Backup não foi usado para restaurar/substituir essa pasta. `.next` versionada não foi modificada por build desta execução. A prévia ativa pode gerar seus próprios artefatos ao recarregar o código.

Chrome precisou de execução fora do sandbox após falha de GPU. Avisos antigos de Browserslist e download da fonte persistem; não impedem o export. Sem teste em aparelho físico, auditoria completa de acessibilidade, indexação, métricas, envio/recebimento de WhatsApp ou comprovação da disponibilidade comercial das integrações hipotéticas.

Não houve commit, push ou deploy público. Próximo conteúdo: receber copy de S02. S01 está pronta na prévia local; eventual publicação deve reconciliar fonte/diff e verificar pipeline/URLs, preservando a variante local da home.
