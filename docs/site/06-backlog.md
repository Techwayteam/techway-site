# Backlog priorizado

Estimativas relativas: S = mudança pequena; M = múltiplos arquivos/uma revisão; L = trabalho com dependência de negócio ou integração. Não representam prazo prometido.

| ID | Prioridade | Entrega | Responsável funcional | Dependência | Porte | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| T000 | P0 | Diagnóstico e estrutura operacional | Coordenação | — | M | Concluída nesta entrega |
| T001 | P0 | Reconciliar fonte pública e checkout; preservar 3 posts | Coordenação + implementação | Evidência A01 | M | Concluída: main/origin 78362aa, posts iguais ao online |
| T002 | P1 | Garantir blog → landing → contato; corrigir Link e carregamento | Implementação + QA | T001 para integração final | S | Concluída; publicada via T019; direção comercial será atualizada em T021 |
| T003 | P1 | Correção mínima de afirmações e CTAs dos 3 posts antigos | Codex/editorial | T001/T019; direção da oferta recebida em D023 | S | Concluída; publicação verificada em 23/10/2026 |
| T004 | P2 | Receber e revisar copy externa de S01–S04 | Usuário/GPT + Codex/editorial + produto | Copy e fatos por artigo; objeção/intenção observada para subir na fila | M | S01 aceita; S02–S04 aguardam copy, sem bloquear conversão |
| T005 | P2 | Integrar S01–S04 por artigo aceito, com capas e metadados | Codex/implementação + QA | T004 por artigo; base de conversão para CTA | M | S01 publicada (1/4); S02–S04 preservadas e repriorizadas |
| T006 | P1 | Metadados, canonical, BlogPosting e sitemap | Implementação | T001; modelo consistente | M | Concluída; publicada e verificada em 25/10/2026 |
| T007 | P0 | Publicar atribuição e operar confirmação de lead | Aquisição + fundador + implementação | Implementação validada; planilha privada | S | Publicada e verificada em 31/10/2026; importação/operação pendentes |
| T008 | P2 | Atualizar Next/runtime com plano de regressão; lucide já atualizado | Implementação + QA | Fonte reconciliada; subir somente por aplicabilidade de segurança/falha concreta | L | Planejada |
| T009 | P2 | Arquivar rotas legadas e fluxo de chat sem envio | Implementação | Histórico de uso/decisão de destino | M | Planejada |
| T010 | P0 | Entregar home de conversão v1: oferta, exemplo, prova e CTA | UX + produto + implementação | T020; T007; DN002–DN003 | M | Publicada e verificada em 31/10/2026 |
| T011 | P1 | Documentar um caso e prova social autorizada | Produto + redação | Consentimento e dados verificáveis | M | Planejada |
| T012 | P2 | Melhorar leitura, relacionados, sumário e listagem | UX + implementação | Conteúdo inicial integrado | M | Parcial — layout publicado em 12fafc5a e verificado em 23/10; listagem/sumário/relacionados pendentes |
| T013 | P2 | Otimizar imagens/fontes e validar movimento/QA móvel, preservando melhorias já recebidas | Implementação + QA | Template/home escolhidos | M | Planejada |
| T014 | P2 | Higiene de .next/out, lockfile e pipeline | Implementação | Baseline; sem perda de fonte | M | Planejada; 12fafc5a também versionou out de desenvolvimento, preservado |
| T015 | P1 | Alinhar privacidade/termos às práticas reais antes de ampliar alegações | Produto + responsável competente | DN006; práticas reais de dados | M | Planejada; não bloqueia o hero seguro |
| T016 | P3 | Páginas por segmento e materiais de diagnóstico | Produto + aquisição | Interesse e oferta comprovados | L | Planejada |
| T017 | P3 | CMS/CRM e automações editoriais | Coordenação + implementação | Necessidade operacional observada | L | Planejada |
| T018 | P1 | Replanejar próximas publicações com série S01–S04 e copy externa | Codex/coordenação | Proposta fornecida pelo usuário | S | Concluída; 42 referências locais válidas |
| T019 | P1 | Publicar S01 e melhorias locais validadas; verificar Pages e URLs | Codex/implementação + QA | Publicação solicitada; T001/T002 e S01 aceitas | M | Concluída; workflow/deploy success e onze URLs conferidas |
| T020 | P0 | Definir oferta mínima verificável e afirmações publicáveis | Fundador/produto + comercial | DN001–DN003 | S | Concluída em 29/10/2026; aceite do fundador em D031 |
| T021 | P0 | Alinhar os 4 CTAs do blog à oferta e preservar origem | Aquisição + implementação | T010; T006/T007; DN005 para destino definitivo da landing | S | Planejada; ficha criada |
| T022 | P0 | Validar compreensão e operar o primeiro lead | Fundador/comercial + UX | Prévia T010/T021; T007; autorização para participantes | M | Planejada |
| T023 | P1 | Ativar um canal inicial de aquisição rastreável | Fundador/comercial | Base publicada; T007; DN007 e autorização de envio | M | Planejada; nenhum envio autorizado |

## Política de prioridade

Blog foi a primeira frente e continua ativo, mas a fila agora segue a proximidade do
resultado comercial: **não perder contato → explicar oferta → demonstrar → gerar
confiança → preservar origem → validar com pessoas → levar tráfego aderente →
aprofundar conteúdo/solução**. Trabalho editorial sem copy ou sem objeção observada
não bloqueia a base de conversão. Questão de segurança só sobe para P0 com
aplicabilidade comprovada.

## Aceite por onda

- Primeira frente: nenhum post atual perdido; três existentes revistos; S01–S04 úteis e integrados por artigo aceito; todos os CTAs válidos; export e leitura conferidos.
- SEO/medição: canonical e metadados coerentes; sitemap só com URLs reais; eventos sem dados pessoais; contato confirmado separado de clique.
- Conversão: oferta mínima verificável; hero/canal explícitos; demonstração
  identificada; métricas sem prova ausentes; quatro jornadas editoriais coerentes;
  leitura móvel e origem do contato verificadas.
- Aprendizagem comercial: compreensão testada sem indução; conversas reais separadas
  de clique; qualificação, proposta, ganho/perda e motivos registrados de forma privada.
- Escala: novo investimento em ferramenta/segmento apoiado por demanda ou esforço observado.

Plano da frente: `plans/005-primeiro-lead-e-cliente.md`. Definições pendentes:
`13-definicoes-necessarias.md`. Abrir cards adicionais somente quando a execução real
justificar.
