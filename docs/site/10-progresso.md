# Progresso

Atualização: **11/10/2026 — America/Sao_Paulo**.

## Entregue

- Auditoria do checkout e das rotas/HTML públicos, com diagnóstico por prioridade.
- Público definido pelo usuário: pequenos negócios que atendem pelo WhatsApp.
- Estrutura documental, funções de agentes, contratos de handoff, aceites e roadmap.
- Evidência dos três artigos públicos, incluindo o que falta na fonte local.
- 12 pautas propostas, três briefs e primeiro rascunho fora da aplicação.
- Baseline técnico: type-check e build aprovados; riscos de HTML e alertas registrados.
- Artefatos gerados pela auditoria limpos/restaurados; alterações locais da home e imagens preservadas.
- Sincronização solicitada pelo usuário: fetch e fast-forward de 49f27f5 para 78362aa, com 19 commits incorporados; main/origin sem divergência.
- Último deploy público identificado em 78362aa, status success; T001 confirmou igualdade integral dos três posts com o online antes dos ajustes locais de T002.
- Backup de 45 arquivos locais verificado; variante de Early Access reaplicada com CTA novo, sem seção duplicada. Cinco WebP já rastreados na origem; cinco PNG preservados.
- Reanálise corrigida para considerar botão flutuante global, carrossel móvel melhorado, lucide 0.526.0 e layout flex do blog.
- Instalação sem legacy-peer-deps, type-check e build pós-sync aprovados; export com 11 páginas e três artigos.
- T002: dois CTAs do blog ligados à landing default existente, Link sem âncora filha, default no HTML inicial e improvisation preservada via query; mensagens/contexto e foco ajustados. Type-check/build e 65 verificações locais de export/Chrome aprovados. Evidência: `evidence/2026-10-10-T002-navegacao.md`.
- Avaliação de SEO com fontes oficiais do Google: pré-renderização de default melhora disponibilidade; query não impede indexação; improvisation ainda depende de JavaScript e SEO completo permanece em T006.
- T018: plano adaptado para série S01–S04, com cinco insights, contrato de copy externa e fila de apoio preservada. Origin/main reconsultada em 11/10/2026: mesmo SHA 78362aa; nenhum novo deploy público verificado.
- S01 recebida, revisada e integrada localmente em `/blog/atendimento-ia-alem-respostas-automaticas`, com autoria confirmada **Leonardo Reis - Founder Techway**. Copy aprovada preservada; duas fotos geradas em WebP e comparativo HTML, metadados/canonical/Open Graph e ligação com o artigo do dilema. Listagem por data decrescente.
- Template aceita parágrafos, citações, listas, destaques e figuras; S01 tem título/metadados antes da capa, dimensões reservadas e imagem interna lazy. Datas pt-BR estáveis. Type-check na fonte principal e build isolado aprovados; 12 páginas, quatro artigos. Rota no servidor local em localhost:3000 respondeu HTTP 200. Evidências: `evidence/2026-10-11-S01-integracao.md` e `evidence/2026-10-11-S01-imagens.md`.
- Ajuste editorial posterior solicitado pelo usuário: S01 mantém a FEBRABAN como referência, com setor implícito, exemplo de pedido e apoio digital conforme a demanda, sem vincular a proposta ao tamanho/aumento da equipe. Fonte, artefato editorial e preparação sincronizados; type-check/build aprovados e conteúdo conferido na rota local. Evidência: `evidence/2026-10-11-S01-ajuste-editorial.md`.

## Estado atual

Publicação autorizada em 11/10/2026: **T019 em execução**, com origem reconciliada e diff revisado; preparando commit/push e verificação de Pages/URLs. Os estados locais abaixo registram o resultado anterior a essa publicação e serão atualizados após verificação remota.

T000, **T001, T002 e T018 concluídas**, sendo T002 local e ainda não publicada. T018 passou na conferência de 42 referências locais e preservação. **T004/T005: S01 aceita e integrada localmente (1/4); S02–S04 aguardam copy**. T003 segue pendente para revisão factual dos antigos; só foi adicionado link de continuidade, preservando textos, datas e CTAs. T006 tem metadados dos artigos adiantados; sitemap/dados estruturados e aceite completo pendentes. Demais tarefas seguem no backlog. Não houve commit, push, deploy público ou envio a terceiros nesta sessão.

## Próximo passo concreto

Receber **copy de S02** do usuário/GPT e seguir revisão/integração por artigo. Executar T003 para revisar percentuais/promessas dos antigos. S01 está na prévia local; publicação remota só quando incluída no pedido, reconciliando diff e pipeline e preservando Early Access. Edição local de S01: 11/10/2026; se o lançamento ocorrer em outra data, conferir e ajustar a data real nesse momento.

Plano: `plans/001-blog-e-captacao.md`. Série: `editorial/serie-funcionarios-digitais.md`. B01 em `editorial/rascunhos/001-organizar-atendimento-whatsapp.md` segue apoio não aprovado/publicado. Evidência histórica de T001 em `evidence/2026-10-10-T001-reconciliacao.md`.

## Pendências de negócio

Capacidades prontas; oferta e Early Access atuais; processo comercial; provas e consentimento dos clientes. Pedir esses fatos no momento em que uma afirmação ou integração depender deles; pesquisa, redação genérica útil e trabalho técnico independente podem continuar.

## Limites

Sem acesso a métricas de busca/CRM e sem teste de envio/recebimento no WhatsApp. T002 foi validada no export local com Chrome headless, incluindo inspeção de screenshot móvel; isso não representa auditoria completa de acessibilidade, dispositivo real ou teste de produção. O resultado técnico foi observado no ambiente Windows local; não foi disparado novo CI remoto. As consultas públicas de T001 são históricas; nenhum resultado de T002 foi apresentado como publicado.

Build de S01 em cópia isolada para preservar `out` da prévia ativa; nenhum build executado sobre esses artefatos. Persistem avisos antigos de Browserslist e download de fonte. Imagens são fictícias e não prova comercial. QA local não comprova indexação, entrega de WhatsApp ou disponibilidade das integrações ilustradas.
