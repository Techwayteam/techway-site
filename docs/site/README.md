# Techway — evolução do site e geração de leads

Base de trabalho criada em **10/10/2026**, no fuso America/Sao_Paulo. Público confirmado pelo fundador: **pequenos negócios que atendem pelo WhatsApp**. Primeira frente: blog.

**S01 publicada em 11/10/2026**, com duas fotos geradas, comparativo HTML, metadados e autoria confirmada como Leonardo Reis - Founder Techway. Conteúdo enviado no commit `8d158f76`; workflow e deploy de Pages success, quatro artigos e imagens públicas conferidos. T002 e a variante local de Early Access também publicadas, com preservação das rotas atuais. [Artigo público](https://techway.one/blog/atendimento-ia-alem-respostas-automaticas) e [evidência da publicação](evidence/2026-10-11-T019-publicacao.md). O plano segue com S02–S04 aguardando copy do GPT externo via usuário. T001 em 78362aa registra a reconciliação histórica anterior, não a versão atual de produção.

## Comece por aqui

1. [Análise do site](00-analise-site.md): diagnóstico, evidências, prioridades e limites da auditoria.
2. [Guia de condução](00-guia-de-conducao.md): como retomar uma sessão e executar uma tarefa.
3. [Plano da primeira frente](plans/001-blog-e-captacao.md): preparar o blog e produzir o primeiro lote.
4. [Estratégia editorial](editorial/estrategia-e-calendario.md): quatro pautas prioritárias, 12 pautas de apoio e cadência dependente de copy/revisão.
5. [Próximas publicações](editorial/serie-funcionarios-digitais.md): briefs de S01–S04, links, imagens e contrato de copy. [Briefs anteriores](editorial/primeiro-lote.md) preservados como apoio.
6. [Backlog](06-backlog.md), [tarefas](tasks/README.md) e [progresso](10-progresso.md).

## Estrutura

```text
AGENTS.md                         # instruções de execução no repositório
docs/site/
  README.md
  00-analise-site.md
  00-guia-de-conducao.md
  01-prd.md
  02-dominio.md
  03-tools.md
  04-arquitetura.md
  05-fluxos-automacoes.md
  06-backlog.md
  07-validacao.md
  08-prompts.md
  09-decisoes.md
  10-progresso.md
  11-fontes.md
  12-mapa-repositorio.md
  PLANS.md
  evidence/                       # provas da auditoria e das entregas
  plans/                          # planos por iniciativa
  tasks/                          # tarefas pequenas com critérios de aceite
  templates/                      # contratos de trabalho e revisão
  editorial/                      # pautas, briefs e futuros rascunhos
```

A referência da Luluzinha foi a **imagem da árvore de arquivos** enviada pelo usuário; o conteúdo daqueles documentos não estava disponível. Esta estrutura reproduz sua organização e adapta os contratos ao site da Techway. Não há banco de dados neste site; uma pasta SQL não acrescentaria capacidade agora. Integrações de CRM ou armazenamento entram quando houver necessidade concreta.

A etapa inicial foi análise/estrutura operacional e sincronização; depois S01 e as melhorias locais validadas foram publicadas por pedido explícito do usuário. Os papéis de agentes são contratos de trabalho, sem runtime multiagente persistente. O restante do roadmap segue nas tarefas pendentes.
