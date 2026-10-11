# Guia de condução

## Retomada de uma sessão

1. Ler `AGENTS.md`, este guia, `09-decisoes.md` e `10-progresso.md`.
2. Verificar `git status --short` e a tarefa ativa. Registrar alterações preexistentes antes de editar.
3. Escolher uma tarefa de `tasks/README.md` e ler seu plano, dependências e aceite.
4. Dizer ao usuário a ação concreta. Pedir informação apenas se ela for necessária; avançar no trabalho independente.
5. Produzir o artefato, validar conforme `07-validacao.md` e registrar evidências.
6. Atualizar tarefa, progresso e decisões quando houver mudança de direção. Informar resultado, verificação e limite real.

## Regras da operação

- Pedido atual: análise e estrutura de implementação, com prioridade ao blog. Redesign e deploy não foram executados nesta entrega.
- A autorização do usuário vale ao longo da sessão. Não criar aprovação extra para escolhas rotineiras de uma implementação autorizada.
- Usar fatos verificados, hipóteses identificadas e fontes datadas. Não inventar números, capacidades, clientes ou status de publicação.
- Preservar slugs publicados e mudanças do usuário. Resolver divergência entre produção e fonte antes de enviar uma nova versão.
- Uma tarefa deve ter responsável, entregável, caminhos de escrita e verificação. Papel de agente não é justificativa para criar infraestrutura desnecessária.
- Separar revisão editorial e técnica: um texto correto pode ter link quebrado; um build correto pode conter promessa sem prova.
- Não enviar mensagens, e-mails ou campanhas como parte da análise. Isso exige pedido explícito para a ação.
- Em caso de bloqueio, registrar o dado que falta e avançar nas tarefas independentes. Não encerrar uma tarefa com todos os critérios em aberto.

## Estados

`planejada → pronta → em_execucao → em_revisao → concluida`

`bloqueada` exige impedimento identificado e responsável pelo desbloqueio. “Concluída” exige evidência e aceite satisfeitos. Redação pronta não equivale a artigo publicado; publicação precisa ter URL e resultado verificado.

## Escopo da primeira execução

T001 registra a reconciliação histórica em 78362aa. T002 e S01 foram publicadas/verificadas por T019 em 11/10/2026, conteúdo 8d158f76, mantendo home/Early Access e os três artigos antigos. Verificar origem/deploy novamente em retomadas futuras. Próximo artigo: S02, aguardando copy do GPT externo via usuário; T003 segue pendente para revisão factual dos antigos. T005 integra por artigo aceito, sem esperar as quatro copies. Ordem em [plano 001](plans/001-blog-e-captacao.md). Não transformar modernização da stack em pré-condição para preparar artigos, salvo falha concreta.
