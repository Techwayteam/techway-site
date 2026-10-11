# Plano 001 — blog útil e caminho de contato

Estado: **em execução, etapas 0 e 1A concluídas; S01 publicada via T019**. Replanejamento editorial em **11/10/2026**: série S01–S04 prioritária; copy pelo GPT externo via usuário, coordenação/revisão/integração pelo Codex. T001 e entrega técnica de T002 concluídas em 10/10/2026; publicação de T002/S01 verificada em 11/10/2026. Público: pequenos negócios que atendem pelo WhatsApp.

Entrega posterior nesta sessão: **S01 aceita, publicada e verificada**, com duas fotos geradas, comparativo HTML, autoria confirmada e metadados. Fonte principal e blog público com quatro artigos; commit/push e deploy success em T019. S02–S04 aguardam copy. [Evidência](../evidence/2026-10-11-T019-publicacao.md).

## Problema e entrega

T001 reconciliou os três posts em 78362aa em 10/10/2026. T002 corrigiu CTAs e renderização da landing default. Em 11/10/2026, fonte e diff foram reconciliados novamente, e T019 publicou/verificou S01, T002 e a home preservada no conteúdo 8d158f76. A primeira frente segue com revisão dos antigos e S02–S04, integrados conforme ficarem prontos.

Entregável: diff revisável, inventário reconciliado, conteúdo revisado, novos artigos integrados, navegação verificada e evidências do export. Publicação será executada se estiver no pedido da implementação; este plano não autoriza push por si só.

## Sequência

| Etapa | Tarefas | Trabalho e saída |
| --- | --- | --- |
| 0 — concluída | T001 | Origem sincronizada, terceiro post recuperado, último deploy identificado; variante local da home preservada |
| 1A — concluída e publicada | T002/T019 | Blog → landing default → contato; Link válido, HTML inicial, navegação e URLs públicas verificados |
| 1B | T003 | Revisar os três existentes, fontes, promessa e continuidade do dilema → S01 |
| 1C | T004 | Receber copy externa de S01–S04 e revisar por artigo, começando por S01 |
| 2 | T005 | Integrar cada artigo revisado com capa, links válidos e metadados; não esperar o lote inteiro |
| 3 | T006/T007, quando seus requisitos estiverem claros | Completar SEO e medir contato sem confundir clique com lead |

Etapas 1A/1B/1C podem progredir independentemente depois de confirmar interfaces. Papéis podem ser cumpridos sequencialmente. Se delegação for solicitada, dar arquivos distintos; `data/blogPosts.json` tem dono único na integração.

## Próximas publicações prioritárias

- S01: **Seu cliente não quer uma resposta automática. Ele quer resolver o problema.** — resolução, contexto e participação humana. Título de busca candidato: Atendimento com IA no WhatsApp: como ir além das respostas automáticas.
- S02: **Inteligência artificial vai substituir o atendimento humano?** — divisão de responsabilidades e cuidado.
- S03: **Seu WhatsApp pode fazer mais do que receber mensagens.** — execução de tarefas, integrações e limites.
- S04: **Como crescer sem precisar fazer tudo sozinho?** — organização de processos e delegação com controle.

Briefs, cinco insights, direção visual, links e contrato de copy estão em [série prioritária](../editorial/serie-funcionarios-digitais.md). O artigo público do dilema contextualiza a dor e será ligado a S01 quando disponível, preservando seu slug e histórico. FEBRABAN é origem da proposta recebida, com fatos a verificar antes de citar no texto público. B01–B12 continuam na fila de apoio; os briefs e rascunho anteriores ficam preservados, sem obrigatoriedade de redação agora.

Cadência depende da entrega da copy e da revisão de cada artigo. A antiga hipótese de dois posts/semana será reavaliada após S01; não há datas reservadas, automação nem publicação autorizada pelo calendário. T018 registra o replanejamento documental; sua conclusão não conclui T004/T005.

## Escopo técnico mínimo

Preservar slugs; remover âncoras aninhadas; destinos válidos; autoria/data reais; canonical e descrição por artigo; apresentação legível; imagens referenciadas existentes. Status/filtros avançados só entram se forem necessários para impedir publicação indevida; manter drafts fora do JSON é a opção inicial simples.

Não inclui CMS, banco de dados, captura artificial de leads, reformulação integral da home, atualização conjunta de todos os pacotes ou envio de campanhas. Atualização técnica aplicável segue em tarefa própria sem bloquear a redação independente.

## Aceite

- Os três slugs atuais públicos constam no inventário e permanecem disponíveis no resultado.
- S01–S04 com copy recebida, revisada e integrada por artigo, ação prática e CTA pertinente; sem métrica ou capacidade inventada.
- CTAs dos dois artigos antigos deixam de retornar 404.
- Não há Link com âncora filha no HTML exportado; blog/artigo/contato funciona.
- Type-check e build passam; nenhum rascunho ou data futura vai para produção por engano.
- Metadados e imagens reais conferidos; mobile/teclado verificados quando houver navegador.
- Evidências mostram o que foi validado e o que ainda depende de informação.

## Reversão e risco

Alterações de conteúdo/template devem ser isoladas das atualizações de stack. Registrar fonte anterior e inventário de URLs. Se houver publicação com falha, retornar ao artefato/commit anterior identificado pelo pipeline; não apagar artigos ou usar reset da árvore do usuário. A principal prevenção é reconciliar produção antes do primeiro deploy.

## Métrica de aprendizagem

Primeiro observar leitura e contatos contextualizados, depois qualificação comercial. Não há baseline de tráfego nem ferramenta de medição conectada. A conclusão deste lote depende de conteúdo e jornada funcionais, não de alcançar uma promessa de vendas.
