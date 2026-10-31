# T022 — validar compreensão e operar o primeiro lead

Estado: **planejada**. Prioridade: P0. Responsáveis: fundador/comercial + UX.
Revisor: coordenação. Plano: `../plans/005-primeiro-lead-e-cliente.md`.
Dependências: prévia estável de T010/T021; planilha privada de T007; autorização para
convidar participantes.

## Problema e resultado

Clareza e conversão são hipóteses até pessoas reais entenderem a oferta e conversas
chegarem ao comercial. Clique não é lead e teste de copy não é venda.

Resultado: diagnóstico qualitativo de compreensão, operação do funil mínimo e
registro da primeira conversa recebida/qualificada quando ocorrer, sem expor dados no
repositório.

## Escopo de escrita

Somente roteiro/resultados anonimizados em `docs/site/evidence/` e estado agregado em
`10-progresso.md`. Dados pessoais e linhas da planilha ficam fora do Git.

## Trabalho

1. Mostrar a primeira tela a 5–8 empresários dos perfis prioritários. Após cinco
   segundos, perguntar o que a Techway faz, qual problema resolve, como começar e o
   que ainda impede confiança.
2. Corrigir ambiguidades de tarefa, canal ou próximo passo antes de acrescentar novas
   seções ou variantes.
3. Importar o CSV T007 para uma planilha privada e registrar somente conversas
   efetivamente recebidas: origem, necessidade, status, próximo passo e resultado.
4. Usar os estados `recebido → qualificado → demonstração → proposta → ganho/perdido`,
   registrando motivo de perda. Resolver DN004 antes de declarar primeiro cliente.

## Aceite e verificação

- 5–8 avaliações têm respostas anonimizadas e síntese sem indução; não viram taxa de
  conversão populacional.
- Todos os contatos comerciais do período escolhido têm origem conhecida ou
  “desconhecida”, status, responsável e próximo passo na planilha privada.
- `conversation_started`, `lead_qualified`, `proposal_sent` e `customer_won` só são
  marcados por evento real; contagens absolutas acompanham qualquer taxa.
- Nenhuma mensagem de teste, conversa, telefone, nome ou e-mail entra em analytics,
  evidência pública ou repositório.

## Evidências e pendências

Esta ficha não promete lead nem venda. Ela comprova que a página foi compreendida e
que o negócio consegue reconhecer o primeiro resultado quando acontecer. Convites a
participantes exigem autorização do fundador; agentes não contatam terceiros por
inferência.
