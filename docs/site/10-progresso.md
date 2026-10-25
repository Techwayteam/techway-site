# Progresso

Atualização: **25/10/2026 — America/Sao_Paulo**.

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

**Publicação feita pelo usuário conferida em 23/10/2026:** árvore inicialmente limpa, HEAD/origem `12fafc5af7e7da2861434bdfccb0c645cffc6b94`, workflow [40023391516](https://github.com/Techwayteam/techway-site/actions/runs/40023391516) success. Home/blog/landing/legais e quatro artigos HTTP 200; dados dos quatro posts públicos iguais à fonte e novo CSS disponível. **T003 e o recorte de layout T012 estão publicados.** `/blog/` segue 404; a rota usada é `/blog`. O commit do usuário também versionou `out` de desenvolvimento; preservado, com higiene em T014. [Evidência](evidence/2026-10-23-publicacao-posts.md).

**T006 publicada e verificada em 25/10/2026:** commit `5c9cbe8f`, workflow [40205213139](https://github.com/Techwayteam/techway-site/actions/runs/40205213139) success. Nove páginas HTTP 200 com canonical/descrição únicos; blog com metadados sociais; quatro BlogPosting coerentes com os dados públicos; quatro capas WebP disponíveis; sitemap exato com sete URLs e robots anunciando-o. Type-check/build isolado também foram repetidos antes do envio. Sem mudança em texto, datas, slugs, layout ou lockfile. [Publicação](evidence/2026-10-25-T006-publicacao.md), [plano](plans/003-T006-seo.md), [evidência local](evidence/2026-10-23-T006-seo.md).

Histórico preservado: T003 teve quatorze campos corrigidos, com afirmações sem fonte retiradas/condicionadas, datas/autores/slugs preservados e QA local em 12/10. T012 corrigiu fluxo de imagens/cabeçalho/tipografia, com 16 cenários Chrome em 16/10. [Evidência editorial](evidence/2026-10-11-T003-editorial.md) e [layout](evidence/2026-10-16-T012-layout.md). Restante de T012 (listagem/sumário/relacionados) pendente.

T000/T001/T002/T003/T006/T018/T019 concluídas e, quando aplicável, publicadas/verificadas. T004/T005: S01 aceita/publicada (1/4), S02–S04 aguardam copy. T007 e demais tarefas seguem no backlog. Sem mensagens/campanhas a terceiros.

## Próximo passo concreto

Executar T007, começando pela definição do destino comercial, da ferramenta de medição e do critério que separa clique de conversa efetivamente recebida. Nada de analytics ou coleta foi configurado em T006. Indexação e resultado enriquecido continuam não comprovados e não bloqueiam T007.

Receber **copy de S02** do usuário/GPT e seguir revisão/integração por artigo. S01 está publicada, com data real de 11/10/2026. Novas publicações exigem reconciliação atual de fonte/diff e verificação do pipeline, respeitando a autorização da sessão.

Plano: `plans/001-blog-e-captacao.md`. Série: `editorial/serie-funcionarios-digitais.md`. B01 em `editorial/rascunhos/001-organizar-atendimento-whatsapp.md` segue apoio não aprovado/publicado. Evidência histórica de T001 em `evidence/2026-10-10-T001-reconciliacao.md`.

## Pendências de negócio

Oferta geral esclarecida em D023: solução disponível, implantação personalizada e Early Access coexistem; necessidades novas podem ser implementadas conforme a demanda. Processo comercial, provas/consentimento de clientes e detalhes operacionais de recursos específicos continuam pertinentes quando uma afirmação ou integração depender deles, sem exigir inventário completo para T003. Trabalho independente pode continuar.

## Limites

Sem acesso a métricas de busca/CRM e sem teste de envio/recebimento no WhatsApp. QA local anterior incluiu Chrome/screenshots; verificações de publicação usaram CI e HTTP/HTML/JSON/CSS. T006 incluiu type-check, export e validação estrutural/negativa; sem novo browser QA, Rich Results Test remoto, Search Console, dispositivo físico ou auditoria completa de acessibilidade. Consultas anteriores permanecem históricas.

Build de S01 em cópia isolada para preservar `out` da prévia ativa; nenhum build executado sobre esses artefatos. Persistem avisos antigos de Browserslist e download de fonte. Imagens são fictícias e não prova comercial. QA local não comprova indexação, entrega de WhatsApp ou disponibilidade das integrações ilustradas.
