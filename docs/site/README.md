# Techway — evolução do site e geração de leads

Base de trabalho criada em **10/10/2026**, no fuso America/Sao_Paulo. Público confirmado pelo fundador: **pequenos negócios que atendem pelo WhatsApp**. Primeira frente: blog.

Revisão de 10/10/2026: **main sincronizada com origin/main em 78362aa**, correspondente ao deploy público confirmado naquela data. T001 confirmou igualdade dos três posts antes da implementação local de T002. T002 está tecnicamente concluída, sem publicação. Em **11/10/2026**, origin/main foi reconsultada e permanece no mesmo SHA; deploy e HTML público não foram rechecados. O plano agora prioriza S01–S04, com copy do GPT externo via usuário e execução pelo Codex. **S01 está integrada localmente**, com duas fotos geradas, comparativo HTML e metadados; autoria confirmada como Leonardo Reis - Founder Techway. Rota: `/blog/atendimento-ia-alem-respostas-automaticas`. S02–S04 aguardam copy. [Evidência da integração](evidence/2026-10-11-S01-integracao.md).

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

Esta entrega é uma análise e uma estrutura operacional, seguida da sincronização solicitada pelo usuário. Os papéis de agentes estão especificados, mas não existe aqui uma automação persistente nem um serviço multiagente rodando. Foram incorporadas mudanças existentes da origem, sem publicar novos artigos ou executar redesign/deploy do roadmap.
