# Planos de execução quando necessários

As fichas em `tasks/` são os contratos estáveis de entrega. Planos são registros
vivos e opcionais para iniciativas longas, retomadas, coordenação entre tarefas ou
mudanças com risco de publicação/recuperação. Uma tarefa pequena não precisa de
plano próprio.

O estado operacional canônico fica em `10-progresso.md`; requisitos e prioridades
ficam em `01-prd.md` e `06-backlog.md`. O plano referencia essas fontes, sem copiá-las.

| Plano | Objetivo | Estado |
| --- | --- | --- |
| [001 — blog e captação](plans/001-blog-e-captacao.md) | Preservar a frente editorial e integrar S01–S04 por artigo, conforme copy e demanda | Em execução como apoio ao plano 005; S01 publicada (1/4), S02–S04 aguardam copy em P2 |
| [002 — revisão editorial T003](plans/002-T003-revisao-editorial.md) | Correção mínima de afirmações e CTAs dos três antigos; subplano da etapa 1B | Concluído; publicação pelo usuário verificada em 23/10/2026 |
| [003 — SEO do blog T006](plans/003-T006-seo.md) | Metadados, BlogPosting, sitemap e robots no export estático | Publicado e verificado em 25/10/2026; workflow e URLs públicas aprovados |
| [004 — medição de contatos T007](plans/004-T007-medicao-contatos.md) | Atribuir conversas recebidas no WhatsApp e operá-las em planilha privada | Publicado em 31/10/2026; importação da planilha privada pendente |
| [005 — primeiro lead e cliente](plans/005-primeiro-lead-e-cliente.md) | Tornar oferta, home, jornada, aprendizado e aquisição coerentes até o funil comercial | Em execução; T020/T010/T021 publicadas, T022 em preparação |
| [006 — T022 compreensão e funil](plans/006-T022-validacao-compreensao-e-funil.md) | Testar clareza com 5–8 empresários e operar o registro privado de conversas | Planejado em 12/11/2026; entrevistas e operação pendentes |

## Contrato de um plano

Use `templates/plano.md` como referência flexível. Um plano registra somente:

- resultado demonstrável e menor sequência de mudanças;
- fichas/dependências envolvidas e caminhos reais relevantes;
- riscos e decisões que alteram a execução;
- validação pertinente e resultados realmente observados;
- publicação, recuperação e pendências, quando aplicáveis.

Diferencie previsão de evidência. Atualize o plano quando uma descoberta mudar a
execução e ao fechar/retomar uma etapa. Não copie PRD, backlog, ficha, decisão e
progresso para formar um relatório paralelo. Evidências detalhadas ficam em um único
registro somente quando os testes/commits não forem suficientes.

## Próximas iniciativas

Home, jornada, caso e ativação comercial estão coordenados no plano 005. Manutenção
técnica (T008/T014) e leitura/performance (T012/T013) ganharão plano próprio somente
se a execução real justificar. SEO T006 está detalhado no plano 003 e medição T007
no plano 004. O backlog especifica prioridade e dependência; um plano não autoriza
iniciar, publicar ou contatar terceiros automaticamente.
