# Backlog priorizado

Estimativas relativas: S = mudança pequena; M = múltiplos arquivos/uma revisão; L = trabalho com dependência de negócio ou integração. Não representam prazo prometido.

| ID | Prioridade | Entrega | Responsável funcional | Dependência | Porte | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| T000 | P0 | Diagnóstico e estrutura operacional | Coordenação | — | M | Concluída nesta entrega |
| T001 | P0 | Reconciliar fonte pública e checkout; preservar 3 posts | Coordenação + implementação | Evidência A01 | M | Concluída: main/origin 78362aa, posts iguais ao online |
| T002 | P1 | Garantir blog → landing → contato; corrigir Link e carregamento | Implementação + QA | T001 para integração final | S | Concluída; publicada via T019 |
| T003 | P1 | Rever 3 posts existentes e fatos da oferta | Redação + revisão de produto | T001; fatos comerciais quando citados | M | Planejada |
| T004 | P1 | Receber e revisar copy externa de S01–S04 | Usuário/GPT + Codex/editorial + produto | Copy e fatos por artigo | M | S01 aceita; S02–S04 aguardam copy |
| T005 | P1 | Integrar S01–S04 por artigo aceito, com capas e metadados | Codex/implementação + QA | T001/T002; T003 no conteúdo alterado; T004 por artigo | M | S01 publicada (1/4); S02–S04 pendentes |
| T006 | P1 | Metadados, canonical, BlogPosting e sitemap | Implementação | T001; modelo consistente | M | Planejada |
| T007 | P1 | Definir destino comercial, eventos e confirmação de lead | Aquisição + fundador + implementação | Destino e ferramenta definidos | M | Planejada |
| T008 | P1 | Atualizar Next/runtime com plano de regressão; lucide já atualizado | Implementação + QA | Fonte reconciliada; inventário | L | Planejada |
| T009 | P2 | Arquivar rotas legadas e fluxo de chat sem envio | Implementação | Histórico de uso/decisão de destino | M | Planejada |
| T010 | P2 | Redesenhar home: demonstração, implantação e limites | UX + produto + implementação | Oferta atual; T002 | L | Planejada |
| T011 | P2 | Criar casos de uso documentados e prova social real | Produto + redação | Consentimento e dados verificáveis | M | Planejada |
| T012 | P2 | Melhorar leitura, relacionados, sumário e listagem | UX + implementação | Conteúdo inicial integrado | M | Planejada |
| T013 | P2 | Otimizar imagens/fontes e validar movimento/QA móvel, preservando melhorias já recebidas | Implementação + QA | Template/home escolhidos | M | Planejada |
| T014 | P2 | Higiene de .next/out, lockfile e pipeline | Implementação | Baseline; sem perda de fonte | M | Planejada |
| T015 | P2 | Alinhar URLs e textos de privacidade/termos às práticas | Produto + responsável competente | Práticas reais de dados | M | Planejada |
| T016 | P3 | Páginas por segmento e materiais de diagnóstico | Produto + aquisição | Interesse e oferta comprovados | L | Planejada |
| T017 | P3 | CMS/CRM e automações editoriais | Coordenação + implementação | Necessidade operacional observada | L | Planejada |
| T018 | P1 | Replanejar próximas publicações com série S01–S04 e copy externa | Codex/coordenação | Proposta fornecida pelo usuário | S | Concluída; 42 referências locais válidas |
| T019 | P1 | Publicar S01 e melhorias locais validadas; verificar Pages e URLs | Codex/implementação + QA | Publicação solicitada; T001/T002 e S01 aceitas | M | Concluída; workflow/deploy success e onze URLs conferidas |

## Política de prioridade

Blog é a primeira frente escolhida. Preparar conteúdo enquanto se reconcilia o site. Corrigir perda de contato antes de ampliar distribuição. Questão de segurança só sobe para P0 com aplicabilidade comprovada; versão antiga pede plano e validação, não afirmação automática de incidente.

## Aceite por onda

- Primeira frente: nenhum post atual perdido; três existentes revistos; S01–S04 úteis e integrados por artigo aceito; todos os CTAs válidos; export e leitura conferidos.
- SEO/medição: canonical e metadados coerentes; sitemap só com URLs reais; eventos sem dados pessoais; contato confirmado separado de clique.
- Home: capacidades verificadas, demonstração identificada, leitura móvel e provas documentadas.
- Escala: novo investimento em ferramenta/segmento apoiado por demanda ou esforço observado.

Abrir cards novos com `templates/tarefa.md` ao iniciar as tarefas posteriores. T001–T005 e T018 estão detalhadas em `tasks/README.md`.
