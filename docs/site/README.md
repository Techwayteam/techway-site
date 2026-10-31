# Techway — evolução do site e geração de leads

Base de trabalho criada em **10/10/2026**, no fuso America/Sao_Paulo. Público confirmado pelo fundador: **pequenos negócios que atendem pelo WhatsApp**. O blog abriu a primeira frente; em **26/10/2026**, o roadmap foi repriorizado para clareza da oferta, primeiro lead e primeiro cliente.

**Estado em 25/10/2026:** **T006 publicada e verificada** no commit `5c9cbe8f`: workflow success, nove páginas públicas com canonical/metadados coerentes, quatro BlogPosting, sitemap com sete URLs e robots disponíveis. **T007 está concluída localmente e ainda não publicada:** WhatsApp com origem/CTA em 30 contatos exportados, processo de planilha privada e nenhum GA4/cookie. [Publicação T006](evidence/2026-10-25-T006-publicacao.md), [plano T007](plans/004-T007-medicao-contatos.md) e [evidência T007](evidence/2026-10-25-T007-medicao-contatos.md).

**S01 publicada em 11/10/2026**, com duas fotos geradas, comparativo HTML, metadados e autoria confirmada como Leonardo Reis - Founder Techway. Conteúdo enviado no commit `8d158f76`; workflow e deploy de Pages success, quatro artigos e imagens públicas conferidos. T002 e a variante local de Early Access também publicadas, com preservação das rotas atuais. [Artigo público](https://techway.one/blog/atendimento-ia-alem-respostas-automaticas) e [evidência da publicação](evidence/2026-10-11-T019-publicacao.md). S02–S04 continuam preservadas, aguardando copy do GPT externo via usuário, agora em P2. T001 em 78362aa registra a reconciliação histórica anterior, não a versão atual de produção.

**Replanejamento comercial em 26/10/2026:** o dossiê foi confrontado com a fonte e
transformado no [plano 005](plans/005-primeiro-lead-e-cliente.md). Prioridade P0:
colocar T007 em operação, validar a oferta publicável, entregar a home de conversão e
alinhar os quatro CTAs editoriais. S02–S04 foram preservadas em P2. Perguntas do
fundador estão concentradas em [definições necessárias](13-definicoes-necessarias.md),
sem bloquear trabalho independente. [Reconciliação do diagnóstico](evidence/2026-10-26-dossie-conversao.md).

## Comece por aqui

1. [Análise do site](00-analise-site.md): diagnóstico, evidências, prioridades e limites da auditoria.
2. [Guia de condução](00-guia-de-conducao.md): como retomar uma sessão e executar uma tarefa.
3. [Plano de primeiro lead e cliente](plans/005-primeiro-lead-e-cliente.md): oferta, home, jornada, validação e aquisição inicial.
4. [Plano editorial](plans/001-blog-e-captacao.md): preservar e evoluir o blog conforme objeções/intenção observadas.
5. [Estratégia editorial](editorial/estrategia-e-calendario.md): quatro pautas prioritárias, 12 pautas de apoio e cadência dependente de copy/revisão.
6. [Próximas publicações](editorial/serie-funcionarios-digitais.md): briefs de S01–S04, links, imagens e contrato de copy. [Briefs anteriores](editorial/primeiro-lote.md) preservados como apoio.
7. [Backlog](06-backlog.md), [tarefas](tasks/README.md), [definições](13-definicoes-necessarias.md) e [progresso](10-progresso.md).
8. [T003 — plano e entrega](plans/002-T003-revisao-editorial.md): correção mínima concluída localmente em 12/10/2026 e publicação verificada em 23/10/2026.
9. [T012 — leitura dos artigos](tasks/T012-leitura-artigos.md): layout validado em 16/10/2026 e publicação verificada em 23/10; demais recortes pendentes.
10. [T006 — SEO técnico](tasks/T006-seo-blog.md): publicada e verificada em 25/10/2026.
11. [T007 — atribuição de contatos](tasks/T007-medicao-contatos.md): concluída localmente em 25/10/2026; publicação e importação da planilha privada pendentes.

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
  13-definicoes-necessarias.md
  PLANS.md
  evidence/                       # provas da auditoria e das entregas
  plans/                          # planos por iniciativa
  tasks/                          # tarefas pequenas com critérios de aceite
  templates/                      # contratos de trabalho e revisão
  editorial/                      # pautas, briefs e futuros rascunhos
```

A referência da Luluzinha foi a **imagem da árvore de arquivos** enviada pelo usuário; o conteúdo daqueles documentos não estava disponível. Esta estrutura reproduz sua organização e adapta os contratos ao site da Techway. Não há banco de dados neste site; uma pasta SQL não acrescentaria capacidade agora. Integrações de CRM ou armazenamento entram quando houver necessidade concreta.

A etapa inicial foi análise/estrutura operacional e sincronização; depois S01 e as melhorias locais validadas foram publicadas por pedido explícito do usuário. Os papéis de agentes são contratos de trabalho, sem runtime multiagente persistente. O restante do roadmap segue nas tarefas pendentes.
