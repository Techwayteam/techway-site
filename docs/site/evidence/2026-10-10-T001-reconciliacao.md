# T001 — reconciliação e reanálise da origem

Data: **10/10/2026**, America/Sao_Paulo. Pedido: conferir main da origem, sincronizar e refazer a análise com a versão atualizada/online. Estado: **concluída**.

## Origem e divergência confirmadas

```text
origin: https://github.com/Techwayteam/techway-site
antes: main = 49f27f5
git fetch origin
origin/main = 78362aa8a62bc41474d832471486b0e07235a91f
git rev-list --left-right --count main...origin/main
0 19
```

Após o fetch, ficaram visíveis os 19 commits faltantes, incluindo terceiro post, imagens, WhatsApp flutuante e CTAs contextualizados, mudanças de Early Access, layout móvel de depoimentos/rodapé, atualização de lucide e flex no artigo. A primeira auditoria havia consultado fonte local e site público, sem atualizar refs remotas; esta execução corrige essa limitação.

## Preservação antes de atualizar

Backup: `.local-backups/2026-10-10-before-origin-sync-190818/`. Conteúdo: 45 arquivos alterados/não rastreados, manifesto SHA256 e `local-tracked.patch`. Cada cópia foi conferida contra o original. Arquivos de backup têm sufixo `.backup`, para não entrarem nos includes TypeScript. A pasta é ignorada por `.local-backups/.gitignore`.

Estavam presentes: home com 71 adições, AGENTS.md, 33 arquivos documentais e dez imagens. Os cinco WebP tinham exatamente o mesmo blob Git que origin/main; foram preservados no backup antes de cederem lugar aos arquivos rastreados da origem. Os cinco PNG continuam locais e seu SHA256 foi novamente conferido depois da sincronização.

## Sincronização e conciliação

Foi feito **fast-forward**, sem novo commit, reset geral, stash ou envio à origem. A home foi temporariamente reposta à base para permitir o avanço; em seguida, a seção Early Access local foi reaplicada, preservando seu conteúdo e layout e recebendo o CTA de WhatsApp atualizado da origem.

O resultado tem uma única seção Early Access. Hero/CTA final, botão global e demais mudanças remotas foram mantidos. A variante local difere da seção publicada; não foi apresentada como versão online nem enviada ao GitHub. O único diff de fonte de aplicação contra o novo HEAD é `pages/index.tsx`, restrito ao Early Access: 48 adições/55 remoções em relação à variante remota.

```text
HEAD = origin/main = 78362aa8a62bc41474d832471486b0e07235a91f
git rev-list --left-right --count main...origin/main
0 0
```

## Correspondência com a publicação

GitHub API informou o último deployment `github-pages` com ID **2792971325** e SHA **78362aa8a62bc41474d832471486b0e07235a91f**. Seu [status público](https://api.github.com/repos/Techwayteam/techway-site/deployments/2792971325/statuses) é `success`, com `environment_url = https://techway.one/` e timestamp `2025-07-28T03:49:19Z` (28/07/2025, 00:49:19 em São Paulo). O último commit da origem é de 28/07/2025; a sincronização ocorreu em 10/10/2026 e não representa conteúdo criado hoje.

Registro salvo em `2026-10-10-deploy-origem.json`. A lista pública de workflow runs retornou zero entradas, mas os registros de deployments e seu status permanecem disponíveis; não se confundiu ausência de runs listados com ausência de deploy.

Consulta atual de `https://techway.one/blog` retornou 200, buildId `89RjEaJV_aBsC8awKlEtK`, **3 posts**. Após parse e serialização normalizada em JSON, os dados completos dos artigos públicos são **iguais** aos de `data/blogPosts.json`. Foram reconsultadas 14 rotas; resultados em `2026-10-10-http-pos-sync.json`.

## Validação da base atual

```text
npm.cmd ci --ignore-scripts --no-audit --no-fund --cache <TEMP>/techway-npm-cache
added 148 packages in 31s
exit 0

npm.cmd run type-check
tsc --noEmit
exit 0

NEXT_TELEMETRY_DISABLED=1
npm.cmd run build
Next.js 14.0.3
Compiled successfully
Generating static pages (11/11)
exit 0
```

Lucide 0.526.0 veio do lockfile da origem. A instalação foi feita **sem legacy-peer-deps**, sem conflito antigo reportado. Package/lockfile não receberam edição adicional. Permanecem alertas de base Browserslist antiga e falha no download de stylesheet da fonte Inter durante otimização; o build concluiu.

O export contém os três artigos. Bundle informado: First Load JS da home 93,1 kB, blog 87,9 kB e artigos 88,1 kB. São números do build, não tempos reais de carregamento.

## HTML exportado e problemas atuais

| Arquivo | Âncoras aninhadas | canonical/JSON-LD | WhatsApp flutuante |
| --- | --- | --- | --- |
| out/blog.html | 3 | ausentes | presente |
| out/blog/como-melhorar-sua-produtividade.html | 1 | ausentes | presente |
| out/blog/automacao-de-tarefas-repetitivas.html | 1 | ausentes | presente |
| out/blog/cuidar-do-cliente-ou-do-negocio.html | 1 | ausentes | presente |
| out/din_page.html | 0 | ausentes | presente |

Método: leitura do export e regex `<a\b[^>]*>\s*<a\b`. A landing `/din_page` continua com Loading no conteúdo inicial, embora tenha o botão global. CTAs `/solucoes-produtividade` e `/solucoes-automacao` continuam 404 no público; sitemap/robots também continuam 404.

## Correções ao diagnóstico anterior

- Terceiro post ausente: resolvido pelo fast-forward.
- Botão flutuante de contato: já implementado na origem; próxima melhoria é contexto/atribuição.
- Carrossel estreito no celular e giro de 5s: código atual usa largura total no celular, swipe, indicadores e 15s; ainda revisar pausa/foco/acessibilidade.
- Float de imagens no blog: já substituído por flex; ainda há largura de texto pela metade quando não existe imagem em desktop.
- Telefone placeholder do chat antigo: já corrigido; envio real/condição final continuam defeituosos.
- Lucide antigo/conflito de peer: corrigido na origem; Next e pipeline ainda precisam revisão própria.

Análise, mapa, instruções, backlog, plano, decisões e progresso foram atualizados. Evidência inicial permanece como registro histórico, com nota de que não descreve a base atual.

## Limites e estado de entrega

Não houve novo push/deploy, envio de WhatsApp ou execução remota de CI. Sem dados de CRM/analytics/Search Console e sem QA visual em navegador. Type-check/export validaram o workspace sincronizado com a variante local de Early Access preservada; a análise de produto/layout da versão online usa origem e HTML público, sem tratar a variante local como publicada.

Após inspeção, `.next` foi restaurado ao estado rastreado anterior e seus 66 novos arquivos de build foram removidos, junto com `out` e tsconfig.tsbuildinfo gerados. Variante da home, documentos, backup e PNGs foram mantidos. Conferência final: main/origin 0/0; único diff de fonte da aplicação é a variante de Early Access; `.next` e demais arquivos de fonte sincronizados sem diff. T001 concluída; T002/T003/T004 são as próximas tarefas da frente editorial.
