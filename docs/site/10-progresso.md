# Progresso

Atualização: **16/10/2026 — America/Sao_Paulo**.

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
- **T019: publicação verificada** do conteúdo `8d158f76` em 11/10/2026, com workflow [38110814696](https://github.com/Techwayteam/techway-site/actions/runs/38110814696) e deployment 6990772377 em success. Onze URLs públicas conferidas: blog com S01 primeiro, quatro artigos iguais aos dados locais, duas imagens com hashes iguais, home/Early Access, landing/default, termos e privacidade. T002, S01 e variante local da home publicadas. Evidência: `evidence/2026-10-11-T019-publicacao.md` e `evidence/2026-10-11-T019-verificacao.json`.

## Estado atual

**T012 — recorte de layout entregue localmente em 16/10/2026:** usuário mostrou texto preso a meia coluna e imagem centralizada verticalmente. Template dos quatro posts agora tem título/metadados antes da capa, parágrafos justificados em telas maiores e texto contornando as imagens de seção no desktop, com largura inteira abaixo delas. Em celular, imagens/texto empilhados; proporções reais, hierarquia e espaçamentos ajustados. Conteúdo de T003/S01 integralmente preservado. Type-check/build isolado e 16 cenários Chrome em 360/390/768/1280 px aprovados; screenshots inspecionadas. [Evidência](evidence/2026-10-16-T012-layout.md). Origem reconsultada em abb2fc0f, igual ao HEAD; sem nova publicação. Restante de T012 (listagem/sumário/relacionados) pendente.

**T003 concluída na entrega local em 12/10/2026:** após planejamento e respostas D022/D023, usuário solicitou executar a correção mínima. Quatorze campos de texto/CTA dos três antigos revisados; percentuais 40%/50% retirados, absolutos suavizados, oferta personalizada mantida e Early Access incluído no fechamento do dilema. Slugs, títulos, estrutura, datas, autores, assets, destinos e S01 preservados. Type-check/build isolado aprovados; quatro artigos exportados e seis cenários de navegação/teclado em Chrome (390/1280 px) passaram, sem overflow/exceções. [Evidência e antes/depois](evidence/2026-10-11-T003-editorial.md). Origem reconsultada em abb2fc0f, igual ao HEAD; produção não revalidada. Nenhum commit, push ou deploy desta revisão.

T000, **T001, T002, T018 e T019 concluídas**; **T003 concluída localmente, sem nova publicação**. T001/T018 mantêm evidências históricas; T019 verificou commit, push, workflow e produção anteriores à revisão T003. **T004/T005: S01 aceita e publicada (1/4); S02–S04 aguardam copy**. T006 tem metadados dos artigos adiantados; sitemap/dados estruturados e aceite completo pendentes. Demais tarefas seguem no backlog. A fonte da aplicação agora contém as correções locais de T003; versão pública não foi alterada nesta execução. Sem envio de mensagens/campanhas a terceiros.

## Próximo passo concreto

Conferir os layouts atualizados na prévia local dos quatro artigos. T003 e o recorte de layout T012 estão prontos localmente para publicação quando solicitada, com nova conferência de origem/diff e verificação do pipeline/URLs. Receber S02 continua como próximo conteúdo editorial, independente da revisão dos antigos; nenhuma matriz de capacidades é requisito geral para T003.

Receber **copy de S02** do usuário/GPT e seguir revisão/integração por artigo. S01 está publicada, com data real de 11/10/2026. Novas publicações exigem reconciliação atual de fonte/diff e verificação do pipeline, respeitando a autorização da sessão.

Plano: `plans/001-blog-e-captacao.md`. Série: `editorial/serie-funcionarios-digitais.md`. B01 em `editorial/rascunhos/001-organizar-atendimento-whatsapp.md` segue apoio não aprovado/publicado. Evidência histórica de T001 em `evidence/2026-10-10-T001-reconciliacao.md`.

## Pendências de negócio

Oferta geral esclarecida em D023: solução disponível, implantação personalizada e Early Access coexistem; necessidades novas podem ser implementadas conforme a demanda. Processo comercial, provas/consentimento de clientes e detalhes operacionais de recursos específicos continuam pertinentes quando uma afirmação ou integração depender deles, sem exigir inventário completo para T003. Trabalho independente pode continuar.

## Limites

Sem acesso a métricas de busca/CRM e sem teste de envio/recebimento no WhatsApp. QA local de T002/S01 incluiu Chrome e screenshots; T019 acrescentou CI remoto success e verificação de HTML/dados/arquivos públicos. Não houve novo browser QA remoto, teste em dispositivo real ou auditoria completa de acessibilidade. As consultas de T001 e as evidências anteriores à publicação continuam históricas.

Build de S01 em cópia isolada para preservar `out` da prévia ativa; nenhum build executado sobre esses artefatos. Persistem avisos antigos de Browserslist e download de fonte. Imagens são fictícias e não prova comercial. QA local não comprova indexação, entrega de WhatsApp ou disponibilidade das integrações ilustradas.
