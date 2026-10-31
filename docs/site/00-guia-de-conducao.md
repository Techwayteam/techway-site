# Guia de condução

## Retomada de uma sessão

1. Ler `AGENTS.md`, este guia, `09-decisoes.md` e `10-progresso.md`.
2. Verificar `git status --short` e a tarefa ativa. Registrar alterações preexistentes antes de editar.
3. Escolher uma ficha autorizada em `06-backlog.md`/`tasks/`, ler seus critérios e
   somente o contexto pertinente. Consultar plano se houver; ele não é obrigatório.
   Se a ficha citar DNxxx, ler `13-definicoes-necessarias.md` e avançar no trabalho
   independente sem inventar a resposta do fundador.
4. Dizer ao usuário a ação concreta. Pedir informação apenas se ela for necessária; avançar no trabalho independente.
5. Produzir o artefato, validar conforme `07-validacao.md` e registrar evidência
   separada somente quando o teste, o diff ou o commit não forem suficientes.
6. Atualizar o estado resumido em `10-progresso.md` e somente contratos/decisões
   que realmente mudaram. Informar resultado, verificação e limite real.

## Regras da operação

- Escopo atual: T003/layout T012 publicados em `12fafc5a`; T006 publicada e verificada em 25/10/2026 no commit `5c9cbe8f`; T007 concluída localmente, ainda sem publicação. O plano 005 reprioriza oferta/home/jornada para primeiro lead e cliente; S02–S04 permanecem em P2.
- A autorização do usuário vale ao longo da sessão. Não criar aprovação extra para escolhas rotineiras de uma implementação autorizada.
- Usar fatos verificados, hipóteses identificadas e fontes datadas. Não inventar números, capacidades, clientes ou status de publicação.
- Preservar slugs publicados e mudanças do usuário. Resolver divergência entre produção e fonte antes de enviar uma nova versão.
- Uma tarefa deve ter responsável, entregável, caminhos de escrita e verificação. Papel de agente não é justificativa para criar infraestrutura desnecessária.
- A ficha é o contrato estável; o plano é estratégia viva e opcional; o progresso é
  a fonte do estado atual. Não repetir a mesma informação nos três.
- Separar revisão editorial e técnica: um texto correto pode ter link quebrado; um build correto pode conter promessa sem prova.
- Não enviar mensagens, e-mails ou campanhas como parte da análise. Isso exige pedido explícito para a ação.
- Em caso de bloqueio, registrar o dado que falta e avançar nas tarefas independentes. Não encerrar uma tarefa com todos os critérios em aberto.

## Estados

`planejada → pronta → em_execucao → em_revisao → concluida`

`bloqueada` exige impedimento identificado e responsável pelo desbloqueio. “Concluída” exige evidência e aceite satisfeitos. Redação pronta não equivale a artigo publicado; publicação precisa ter URL e resultado verificado.

## Escopo da primeira execução

T001 registra a reconciliação histórica em 78362aa. T019 publicou T002/S01 em
11/10/2026. Em 23/10, T003/layout T012 foram verificados em `12fafc5a`. Em 25/10,
T006 foi publicada em `5c9cbe8f`; workflow, nove páginas, quatro BlogPosting,
sitemap e robots foram conferidos publicamente. T007 foi concluída localmente com
WhatsApp + planilha, sem GA4; antes de publicar, reconciliar fonte/diff e depois
verificar os CTAs públicos. Em 26/10, o plano 005 passou a coordenar a prioridade
P0: T007, T020, T010 e T021. S02 aguarda copy em P2 e não bloqueia essa frente.
Planos [001](plans/001-blog-e-captacao.md), [003 — T006](plans/003-T006-seo.md),
[004 — T007](plans/004-T007-medicao-contatos.md) e
[005 — primeiro lead e cliente](plans/005-primeiro-lead-e-cliente.md). Não
transformar modernização da stack em pré-condição para a conversão, salvo falha
concreta.
