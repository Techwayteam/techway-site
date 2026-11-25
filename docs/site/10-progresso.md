# Progresso

## Estado atual — 25/11/2026 (produção)

**Promoção comercial/SEO/GEO autorizada e executada:** [PR #23](https://github.com/Techwayteam/techway-site/pull/23) integrado integralmente à `main` por squash, commit `dbc3152ab2aa6c2c7ce8d652e1749bdbcdb26a99`. A comparação pré-merge registrou 0 commits atrás e todos os arquivos da branch incluídos. O [workflow Pages #45715909146](https://github.com/Techwayteam/techway-site/actions/runs/45715909146) terminou **success** para jobs `build` e `deploy` em 25/11/2026. Isso comprova promoção e entrega pelo provedor, **não** indexação Google/Bing/ChatGPT.

**Smoke HTTP público concluído (25/11/2026, 19h53 BRT):** [PR #24](https://github.com/Techwayteam/techway-site/pull/24) integrado integralmente a MAIN por squash em `a92a5da77516127fa667c05e6ec671d57bc783bd`. [Workflow Pages #45716788778](https://github.com/Techwayteam/techway-site/actions/runs/45716788778) terminou **success** para três jobs: `build`, `deploy` e `smoke`. O teste direto do runner externo comprovou **HTTP 200** em home, página `/atendimento-agendamentos-whatsapp`, sitemap.xml, robots.txt, blog e logo; conteúdo novo, canonical, schemas `Organization`/`WebSite`/`Service`, **8 URLs** corretas e HTTP 200 com User-Agent `OAI-SearchBot` foram verificados. O log do job `smoke` (139565248888) registra `status: passed`, `sitemapUrls: 8`, `oaiUserAgentHttp: 200`. A ferramenta web textual ainda pode servir versão cacheada; o teste do runner é a evidência de acesso público neste checkpoint. O teste de User-Agent não comprova IP do bot nem citação no ChatGPT.

**Indexação/citações:** Supermetrics está instalado, mas a fonte Google Search Console (`GW`) foi consultada e consta **NOT_AUTHENTICATED** para esta conexão, portanto não temos autorização para ler o índice/inspeção de URL. Bing Webmaster e relatórios de citações também não foram acessados por conta autenticada. Permissão em `robots.txt`, resposta HTTP ao User-Agent e publicação no GitHub Pages **não demonstram** indexação efetiva ou citação em resposta de IA. Após a fonte ser conectada, inspecionar domínio/URL e verificar Search Console/Bing separadamente.

**Escopo:** site `techway-site` apenas, sem alterações no repositório do bot, Supabase, atendimento real, flags ou banco; não houve migração ou alteração de roteamento legado. Histórico de decisões T024/T025 está preservado abaixo; menções a PR #23 "em revisão" em checkpoints de 24/11 são históricas e não refletem o estado atual.


## Checkpoint atual — 24/11/2026

**GEO — etapa em revisão (D037/T025, PR #23):** em resposta ao pedido do fundador, preparada a página canônica `/atendimento-agendamentos-whatsapp` com conteúdo público completo: o que o funcionário digital faz, processo de agendamento, requisitos de implantação, continuidade com equipe, limites e perguntas respondidas. O texto e as respostas existem no **HTML exportado**; a animação da home permanece conscientemente ilustrativa. Incluído JSON-LD `Service` com `provider` referenciando o `Organization` da home, sem preço ou cobertura territorial inventada. Home e rodapé agora conduzem à página; sitemap passa de 7 para **8 URLs**; o marcador do WhatsApp preserva a origem `atendimento-agendamentos-whatsapp`. Foram ampliados os testes de metadata/canonical, página SSR sem JavaScript, schema, CTA, navegação e mobile. [Auditoria e fontes oficiais](evidence/2026-11-24-GEO.md).

**Limite GEO:** Google declara que `llms.txt` não é necessário para AI Overviews/AI Mode; não foi implementado. Não foram alterados bots, `robots.txt` permissivo, roteamento legado, analytics, dados, backend ou fluxos de produção. Sem prova de indexação, citações em IA, autoridade ou aumento de leads; estas verificações requerem site público após deploy e ferramentas de webmaster conectadas.

**Estado de entrega e QA:** última alteração funcional `bd5084f7` foi aprovada no [workflow #45535527637](https://github.com/Techwayteam/techway-site/actions/runs/45535527637), **success** para `npm ci`, TypeScript, build/export, SEO/JSON-LD, robots/sitemap, contatos e testes visuais Playwright em 1440/390px e sem JS. Prints finais da página foram inspecionados; encontrada e corrigida falta de contraste da logo no header e encurtado CTA mobile. Alterações documentais posteriores são registro do resultado, sem impacto funcional. PR #23 está aberto, sem merge ou deploy. Falta aceite comercial do fundador e, após autorização, promoção a `main`, workflow Pages e smoke da URL pública. A aprovação do CI não confirma indexação/citação no Google/ChatGPT/Bing.


**Auditoria de pré-deploy SEO/AEO anterior ao GEO (24/11, D036; baseline de sete URLs, superado por T025):** checklist público com dez recomendações comparado com a fonte da branch PR #23 e com o comportamento previamente registrado do site público. `generate-seo-files.cjs` cria `robots.txt` universalmente liberado e `sitemap.xml` de sete URLs canônicas (inclui `/din_page` preservada, quatro artigos; legais excluídas). `verify-seo.cjs` garante title/description/canonical únicos nas rotas exportadas, `BlogPosting` nos quatro artigos, sitemap/robots e `noindex, follow` **intencional apenas** nas páginas legais. HTML é exportado estaticamente pelo Next; conteúdo textual da nova oferta existe no HTML, mas **as mensagens animadas da demo são renderizadas por JavaScript** e não precisam funcionar como conteúdo indexável autônomo. Imagens do blog usam WebP/ALT; não é obrigatório forçar OG JPG para WebP. Endereço/NAP e `LocalBusiness` não cabem sem estabelecimento físico e perfil comercial verificados. `FAQPage` e `BreadcrumbList` não são obrigatórios e não devem ser criados como atalho para rich result. Redirects 301 da barra final/dominio não foram implementados, pois dependem de regra real no hosting; `/din_page` mantém indexabilidade até DN005. O site tinha publicação de robots/sitemap comprovada com HTTP 200 em 25/10 (evidência T006), mas a tentativa de revalidar esses dois endereços externamente nesta sessão falhou por limitação de acesso web; **não** afirmar novo smoke HTTP. Search Console, indexação efetiva e WAF/bots não puderam ser conferidos.

**Ajuste nesta branch, sem deploy:** `pages/index.tsx` passa a usar título `Atendimento e agendamentos pelo WhatsApp | Techway` e incluir `Organization` + `WebSite` JSON-LD, com marca/logo/Instagram já públicos, sem fingir localização física. `scripts/verify-seo.cjs` ampliado para testar a presença, conteúdo e relação dessas entidades na exportação. Executar CI e browser do PR antes de aceitar/publicar. O PR #23 não foi mesclado neste checkpoint.

**Direção comercial redefinida (D032–D034):** primeiro explicar atendimento **e agendamentos** como soluções já comercializáveis; depois demonstrar claramente sua execução real. O cliente deve entender que a Techway quer ajudá-lo a evoluir e crescer, acolhendo novas ideias sem prometer desenvolvê-las. Medição adicional e prospecção ficam atrás dessas duas prioridades.

**Site público:** últimas mudanças visuais em `main` no commit `f14b1264`, com workflow Pages `43675227146` concluído com sucesso em 15/11. A jornada editorial T021 foi incorporada antes disso no commit `42be79e6`, e os quatro CTAs de artigos preservam `origem` até a home. A listagem de T021 como não publicada nas notas de 08/11 abaixo é **histórica, superada**.

**Entrega em revisão (PR #23):** branch `feat/oferta-real-primeiro-demo-20261124` comunica atendimento e agendamentos disponíveis comercialmente e a parceria para evolução do negócio. A seção `#exemplo` substitui balões estáticos por **uma animação de celular inspirada no WhatsApp** (`components/WhatsAppDemo.tsx` e `.module.css`). O cliente aparece em branco à esquerda, o funcionário digital em verde à direita; mensagens, indicadores de digitação, rolagem, confirmação ilustrativa, pausa, replay, e movimento reduzido são implementados no frontend. Trata-se de **roteiro fictício**, não gravação de operação real nem confirmação de reserva no Supabase. Não adiciona backend, analytics, integração, serviços, flags ou dependências. Testes técnicos e capturas em desktop/mobile são parte do PR e devem ser conferidos antes de merge; **MAIN e o site público continuam inalterados**.

**Limite operacional:** o último estado documentado da Luluzinha (22/11) registrava fluxo privado de agendamento OFF e admin ON em produção. A decisão de comercializar o recurso não equivale a sua ativação em qualquer cliente. Configuração e aceite operacional são específicos por implantação.

**QA visual realizado (24/11, PR #23):** a execução [45529727434](https://github.com/Techwayteam/techway-site/actions/runs/45529727434) terminou **success**: instalação, TypeScript, build/export, SEO, origem de contatos e guardas da copy; Playwright desktop 1440×900/mobile 390×844 com seis mensagens, lados e cores corretos, confirmação apenas ilustrativa e `prefers-reduced-motion`. Autoplay ao entrar na tela, pausa e replay passaram. Capturas reais de `#exemplo`, celular e estado intermediário foram revisadas; a primeira versão ocultava a primeira pergunta e aproximava o controle do CTA móvel, problemas corrigidos com altura/proporção do telefone, copy mais curta e área segura nos controles. O segundo comparativo validou que o roteiro integral agora está visível em desktop e mobile. O wallpaper é SVG original e não foi alterado o logo oficial.

**Registro de movimento — validado:** o QA gravou a animação mobile em `artifacts/visual-fix/demo-animada-mobile.webm`. A correção do encerramento do vídeo antes da cópia foi validada no workflow [45530215246](https://github.com/Techwayteam/techway-site/actions/runs/45530215246), **success** para o último commit funcional `c07fbd0`. O WebM final possui **20,8 s**, cabeçalho íntegro e duração verificada com ffprobe; a gravação inclui a sequência completa em movimento. Roteiro fictício, sem tool de agendamento, envio, migração, merge ou publicação.

**Próximo passo:** confirmar CI do commit final, submeter o resultado visual ao fundador e só então deliberar sobre merge e deploy do PR #23. Uma futura demonstração com tools reais depende de ambiente autorizado e dados fictícios.

---

### Histórico anterior (conservado)


Atualização: **08/11/2026 — America/Sao_Paulo**.

## T021 — implementação em revisão (08/11/2026)

Em branch isolada `feat/t021-blog-oferta-origem` foram preparados os CTAs dos quatro artigos para conduzir à home atual (`#solucoes` ou `#exemplo`), com `origem` restrita aos quatro slugs publicados. A home, o menu, o rodapé e o CTA flutuante mantêm a origem editorial no marcador da mensagem WhatsApp; acessos diretos continuam identificados como `home`. A verificação estática de contatos foi ampliada para conferir destino e origem de cada CTA editorial.

**Status:** implementação em branch, ainda sem type-check/build/browser verificados nesta sessão, sem merge e sem publicação. T021 não está concluída. Próxima verificação: executar `npm run type-check`, `npm run build`, inspecionar quatro jornadas no navegador e revisar o diff antes de publicar.

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
