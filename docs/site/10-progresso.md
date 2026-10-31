# Progresso

Atualização: **31/10/2026 — America/Sao_Paulo**.

## Entregue

- Auditoria do checkout e das rotas/HTML públicos, com diagnóstico por prioridade.
- Público definido pelo usuário: pequenos negócios que atendem pelo WhatsApp.
- Estrutura documental, funções de agentes, contratos de handoff, aceites e roadmap.
- Evidência dos três artigos públicos, incluindo o que falta na fonte local.
- 12 pautas propostas, três briefs e primeiro rascunho fora da aplicação.
- Baseline técnico: type-check e build aprovados; riscos de HTML e alertas registrados.
- Artefatos gerados pela auditoria limpos/restaurados; alterações locais da home e imagens preservadas.
- Sincronização solicitada pelo usuário: fetch e fast-forward de 49f27f5 para 78362aa, com 19 commits incorporados; main/origin sem divergência.
- Na verificação histórica de T001, deploy em 78362aa com status success; três posts iguais ao online antes dos ajustes locais de T002. Não representa o deploy atual.
- Backup de 45 arquivos locais verificado; variante de Early Access reaplicada com CTA novo, sem seção duplicada. Cinco WebP já rastreados na origem; cinco PNG preservados.
- Reanálise corrigida para considerar botão flutuante global, carrossel móvel melhorado, lucide 0.526.0 e layout flex do blog.
- Instalação sem legacy-peer-deps, type-check e build pós-sync aprovados; export com 11 páginas e três artigos.
- T002: dois CTAs do blog ligados à landing default existente, Link sem âncora filha, default no HTML inicial e improvisation preservada via query; mensagens/contexto e foco ajustados. Type-check/build e 65 verificações locais de export/Chrome aprovados. Evidência: `evidence/2026-10-10-T002-navegacao.md`.
- Avaliação de SEO com fontes oficiais do Google: pré-renderização de default melhora disponibilidade; query não impede indexação; improvisation ainda depende de JavaScript e SEO completo permanece em T006.
- T018: plano adaptado para série S01–S04, com cinco insights, contrato de copy externa e fila de apoio preservada. Origin/main reconsultada em 11/10/2026: mesmo SHA 78362aa; nenhum novo deploy público verificado.
- S01 recebida, revisada e integrada localmente em `/blog/atendimento-ia-alem-respostas-automaticas`, com autoria confirmada **Leonardo Reis - Founder Techway**. Copy aprovada preservada; duas fotos geradas em WebP e comparativo HTML, metadados/canonical/Open Graph e ligação com o artigo do dilema. Listagem por data decrescente.
- Template aceita parágrafos, citações, listas, destaques e figuras; S01 tem título/metadados antes da capa, dimensões reservadas e imagem interna lazy. Datas pt-BR estáveis. Type-check na fonte principal e build isolado aprovados; 12 páginas, quatro artigos. Rota no servidor local em localhost:3000 respondeu HTTP 200. Evidências: `evidence/2026-10-11-S01-integracao.md` e `evidence/2026-10-11-S01-imagens.md`.
- Ajuste editorial posterior solicitado pelo usuário: S01 mantém a FEBRABAN como referência, com setor implícito, exemplo de pedido e apoio digital conforme a demanda, sem vincular a proposta ao tamanho/aumento da equipe. Fonte, artefato editorial e preparação sincronizados; type-check/build aprovados e conteúdo conferido na rota local. Evidência: `evidence/2026-10-11-S01-ajuste-editorial.md`.
- **T019: publicação verificada** do conteúdo `8d158f76` em 11/10/2026, com workflow [38110814696](https://github.com/Techwayteam/techway-site/actions/runs/38110814696) e deployment 6990772377 em success. Onze URLs públicas conferidas: blog com S01 primeiro, quatro artigos iguais aos dados locais, duas imagens com hashes iguais, home/Early Access, landing/default, termos e privacidade. T002, S01 e variante local da home publicadas. Evidência: `evidence/2026-10-11-T019-publicacao.md` e `evidence/2026-10-11-T019-verificacao.json`.

## Estado atual

**Roadmap comercial replanejado em 26/10/2026, sem implementação/publicação:** o
dossiê comercial de 25/10 foi reconciliado com a fonte local e com T006/T007. O novo
[plano 005](plans/005-primeiro-lead-e-cliente.md) prioriza T007, oferta mínima T020,
home de conversão T010 e jornada editorial T021. T004/T005 (S02–S04) permanecem
ativas, mas passam a P2 até haver copy e uma intenção/objeção que justifique subir o
conteúdo. T022 valida compreensão/operação do funil; T011/T023 tratam prova e
aquisição. Perguntas que dependem do fundador foram concentradas em
[definições necessárias](13-definicoes-necessarias.md). [Reconciliação do
dossiê](evidence/2026-10-26-dossie-conversao.md).

Nenhuma permissão adicional foi necessária para o planejamento. Não houve edição de
código/produto, push, deploy, mensagem a terceiros, criação de planilha externa ou
revalidação pública em navegador. As diferenças preexistentes do novo formato de
planos e os artefatos locais de `out` foram preservados.

**T020 concluída documentalmente em 29/10/2026:** o fundador confirmou respostas a
dúvidas, coleta inicial, contexto da conversa e passagem para uma pessoa como
disponíveis; follow-up não está disponível e agendamento deve aparecer somente como
em desenvolvimento. Autorizou nomes, logos e relatos atuais; “80%” será tratado como
percepção, não medição. Early Access ficou definido por proximidade com o
desenvolvedor, influência no roadmap, funcionalidades avaliadas para a empresa,
isenção da implantação e consultoria mensal, sem promessa aberta de escopo ou prazo.
DN001–DN003 foram resolvidas em D031 e liberaram a implementação local de T010,
concluída posteriormente em 31/10/2026. Na etapa de T020, nenhuma página pública foi
alterada. [Preparação](evidence/2026-10-27-T020-oferta-minima.md) e [aceite](evidence/2026-10-29-T020-aceite-fundador.md).

**Publicação feita pelo usuário conferida em 23/10/2026:** árvore inicialmente limpa, HEAD/origem `12fafc5af7e7da2861434bdfccb0c645cffc6b94`, workflow [40023391516](https://github.com/Techwayteam/techway-site/actions/runs/40023391516) success. Home/blog/landing/legais e quatro artigos HTTP 200; dados dos quatro posts públicos iguais à fonte e novo CSS disponível. **T003 e o recorte de layout T012 estão publicados.** `/blog/` segue 404; a rota usada é `/blog`. O commit do usuário também versionou `out` de desenvolvimento; preservado, com higiene em T014. [Evidência](evidence/2026-10-23-publicacao-posts.md).

**T006 publicada e verificada em 25/10/2026:** commit `5c9cbe8f`, workflow [40205213139](https://github.com/Techwayteam/techway-site/actions/runs/40205213139) success. Nove páginas HTTP 200 com canonical/descrição únicos; blog com metadados sociais; quatro BlogPosting coerentes com os dados públicos; quatro capas WebP disponíveis; sitemap exato com sete URLs e robots anunciando-o. Type-check/build isolado também foram repetidos antes do envio. Sem mudança em texto, datas, slugs, layout ou lockfile. [Publicação](evidence/2026-10-25-T006-publicacao.md), [plano](plans/003-T006-seo.md), [evidência local](evidence/2026-10-23-T006-seo.md).

**T007 publicada e verificada em 31/10/2026:** decisão WhatsApp + planilha privada, sem GA4. Trinta e um CTAs em nove páginas recebem origem/posição na mensagem; clique continua separado de conversa recebida. Type-check, build isolado, guardas de SEO/contato e QA móvel de home, landing `improvisation` e artigo passaram. Na publicação conjunta com T010, sete CTAs da home e oito da variante `improvisation` foram reconferidos; o componente compartilhado preservou a origem. Template CSV entregue sem dados reais; nenhuma mensagem foi enviada e a planilha privada ainda precisa ser importada. [Plano](plans/004-T007-medicao-contatos.md) e [evidência](evidence/2026-10-25-T007-medicao-contatos.md).

**T010 publicada e verificada em 31/10/2026:** a home agora
explica atendimento com IA no WhatsApp, mostra tarefas e limites, exemplo fictício em
HTML, implantação, prova autorizada, Early Access conforme D031, FAQ e CTA atribuível.
Agendamento aparece como em desenvolvimento; follow-up fica fora da oferta. Foram
retirados números sem método, disponibilidade 24h, escassez e prova fictícia. Type-check,
build isolado com 12 páginas, SEO, 31 CTAs em 9 páginas e QA no Chromium em 360, 390,
768 e 1280 px passaram. O QA encontrou e corrigiu a atribuição do componente de
depoimentos em `/din_page`. O commit `dcc1ab5a` e o workflow 41164599336 foram
verificados, assim como a home pública, rotas preservadas e atribuição; nenhum
WhatsApp foi acionado. [Ficha](tasks/T010-home-conversao.md) e
[evidência](evidence/2026-10-31-T010-home-conversao.md).

Histórico preservado: T003 teve quatorze campos corrigidos, com afirmações sem fonte retiradas/condicionadas, datas/autores/slugs preservados e QA local em 12/10. T012 corrigiu fluxo de imagens/cabeçalho/tipografia, com 16 cenários Chrome em 16/10. [Evidência editorial](evidence/2026-10-11-T003-editorial.md) e [layout](evidence/2026-10-16-T012-layout.md). Restante de T012 (listagem/sumário/relacionados) pendente.

T000/T001/T002/T003/T006/T007/T010/T018/T019/T020 concluídas localmente e, quando aplicável, publicadas/verificadas. T004/T005: S01 aceita/publicada (1/4), S02–S04 aguardam copy. Demais tarefas seguem no backlog. Sem mensagens/campanhas a terceiros.

## Próximo passo concreto

1. Importar `templates/T007-registro-leads.csv` em planilha privada e operar somente
   conversas efetivamente recebidas como contato/lead.
2. Alinhar os quatro CTAs do blog em T021 à home T010 e preservar origem/posição.
3. Validar a prévia coerente conforme T022; somente
   depois operar T023 com canal e envio
   explicitamente autorizados.

Plano ativo: `plans/005-primeiro-lead-e-cliente.md`. Plano editorial de apoio:
`plans/001-blog-e-captacao.md`. S02 continua aguardando copy, sem bloquear a frente
P0. Novas publicações exigem reconciliação atual de fonte/diff e verificação do
pipeline, respeitando a autorização da sessão.

## Pendências de negócio

Oferta e prova da home esclarecidas em D031; DN001–DN003 estão resolvidas. Continuam
pendentes o critério de cliente ganho, o destino de `/din_page`, práticas legais e o
canal de aquisição em DN004–DN007. O trabalho independente em T021 pode continuar
com os limites registrados; T010 já está concluída localmente.

## Limites

As capacidades da T020 foram confirmadas pelo fundador, sem demonstração independente
nesta etapa; a T010 validou apresentação e fluxos locais, mas ainda precisa de
compreensão comercial em T022. Sem
acesso a métricas de busca/CRM ou a teste de envio/recebimento no WhatsApp. QA local incluiu Chromium
móvel para T007; verificações de publicação anteriores usaram CI e
HTTP/HTML/JSON/CSS. T006 incluiu type-check, export e validação estrutural/negativa;
sem Rich Results Test remoto, Search Console, dispositivo físico ou auditoria
completa de acessibilidade. Consultas anteriores permanecem históricas.

Builds de S01/T006/T007 foram feitos em cópia isolada para preservar `out` da prévia ativa. Persistem avisos antigos de Browserslist e download de fonte. Imagens são fictícias e não prova comercial. QA local não comprova indexação, entrega de WhatsApp, uso real da planilha ou disponibilidade das integrações ilustradas.
