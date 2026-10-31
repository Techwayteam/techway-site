# Plano 001 — blog útil e caminho de contato

Estado: **em execução, agora como frente editorial de apoio ao plano 005**. Fichas
principais: T001–T007, T012, T018 e T019. Decisões pertinentes: D001, D002, D009,
D016, D017, D023, D027, D029 e D030.

Fonte do estado operacional: [10-progresso.md](../10-progresso.md). Este plano
registra a estratégia da iniciativa; aceite por tarefa permanece nas fichas e
prioridade/dependências permanecem no backlog.

## Resultado e mudança mínima

Construir uma frente editorial em que um visitante encontre conteúdo útil,
entenda uma aplicação concreta da Techway e chegue a um contato atribuível. A menor
sequência preserva os artigos/slugs existentes, integra cada novo artigo somente
depois da revisão, mantém o export estático e mede conversa recebida sem confundir
clique com lead.

## Execução e retomada

| Etapa | Tarefas | Trabalho e saída |
| --- | --- | --- |
| 0 — concluída | T001 | Origem sincronizada, terceiro post recuperado, último deploy identificado; variante local da home preservada |
| 1A — concluída e publicada | T002/T019 | Blog → landing default → contato; Link válido, HTML inicial, navegação e URLs públicas verificados. Direção comercial histórica será substituída por T021, sem reabrir o aceite técnico |
| 1B — concluída e publicada | T003 | Três existentes com correção mínima; estrutura e continuidade do dilema → S01 preservadas; publicação do usuário verificada em 23/10/2026 |
| 1C — P2 | T004 | Receber copy externa de S01–S04 e revisar por artigo; S01 concluída, demais sobem na fila quando houver copy e intenção/objeção pertinente |
| 2 — P2 | T005 | Integrar cada artigo revisado com capa, links válidos e metadados; não esperar o lote inteiro |
| 3 — medição | T006/T007 | T006 publicada/verificada; T007 concluída localmente e promovida a P0 no plano 005 |

Próxima retomada editorial: preservar S02–S04 e receber copy quando disponível, mas
não colocar volume de artigos à frente da base de conversão. A próxima retomada do
produto segue o [plano 005](005-primeiro-lead-e-cliente.md): T007, T020, T010 e T021.

Etapas editoriais podem progredir independentemente depois de confirmar interfaces.
Papéis podem ser cumpridos sequencialmente. Se delegação for solicitada, atribuir
arquivos distintos; `data/blogPosts.json` tem dono único na integração.

## Dependências, riscos e limites

- S02–S04 dependem da copy externa entregue pelo usuário e da revisão por artigo;
  temas e briefs canônicos ficam na
  [série prioritária](../editorial/serie-funcionarios-digitais.md).
- Preservar slugs, autoria/data reais, assets existentes e alterações locais do
  usuário. `data/blogPosts.json` é arquivo compartilhado de integração.
- Push em `main` pode publicar. Planejamento ou implementação local não autoriza
  push/deploy implicitamente.
- Não inclui CMS, banco de leads, reformulação integral da home, campanhas ou
  atualização conjunta da stack. Home e aquisição estão coordenadas no plano 005,
  sem pertencer ao aceite editorial deste plano.
- Cadência depende de copy/revisão; calendário não cria publicação automática.

## Validação e resultado

Critérios canônicos estão nas fichas e em `07-validacao.md`. Para integração
editorial, executar type-check/build, guardas do export, links/CTAs, metadados,
assets, mobile e teclado conforme os caminhos afetados. Publicação exige ainda
workflow concluído e conferência das URLs públicas.

Resultado consolidado: T001/T002/T003/T006/T018/T019 concluídas e publicadas;
S01 integrada/publicada; T007 concluída localmente; T012 parcial; S02–S04 aguardam
copy. Evidências históricas permanecem referenciadas pelas respectivas fichas e
por `10-progresso.md`, sem duplicação neste plano.

## Publicação e recuperação

Isolar conteúdo/template de atualizações de stack. Antes de publicar, reconciliar
fonte, diff, branch e artefatos versionados. Depois, verificar workflow, export e
URLs afetadas. Em falha, usar o commit/artefato anterior identificado pelo pipeline;
não apagar artigos nem restaurar genericamente a árvore do usuário.

## Fechamento

O plano termina quando S01–S04 estiverem revisadas/integradas conforme as fichas e a
jornada editorial estiver coerente com a oferta vigente. A operação do primeiro lead
e cliente pertence ao plano 005. Métricas comerciais não são promessa de vendas nem
substituem o aceite do produto. Estado e próxima ação continuam em
`10-progresso.md`.
