# T021 — encerramento técnico, merge e deploy

Data: **12/11/2026** (America/Sao_Paulo). Estado: **concluída e integrada à main**.

## Entrega

Quatro CTAs dos artigos agora direcionam à home comercial atual: três para `#solucoes` e o artigo de atendimento com IA para `#exemplo`. A query `origem=blog/<slug>`, restrita aos quatro slugs publicados, mantém a atribuição do artigo ao atravessar artigo → home → WhatsApp. Home, menu e links globais preservam origem e posição do CTA. Acesso direto e origem inválida usam `home`. Não houve mudança em slugs, datas, autoria, SEO ou remoção de `/din_page`; DN005 segue aberta.

## Evidências verificadas no GitHub

- [CI da feature — run 43208758718](https://github.com/Techwayteam/techway-site/actions/runs/43208758718), SHA `7cc5181e14325d77a38260c9e50c0ab1f20c93a2`: **success** em `npm ci`, type-check, build, SEO, guardas e Chromium headless.
- Export: **9 páginas**, **4 BlogPosting**, sitemap de **7 URLs**, **31 CTAs atribuídos** e **4 destinos editoriais** validados.
- Navegador local no runner: **4/4** percursos artigo → home → menu → WhatsApp aprovados; **28 links principais**, **4 popups simulados** e **3 acessos diretos/origens inválidas** verificados. **Nenhuma mensagem enviada.**
- A Action anterior [43208213038](https://github.com/Techwayteam/techway-site/actions/runs/43208213038) falhou na instalação do Playwright 1.56.1 em Ubuntu 26.04, antes do teste. Corrigido com runner Ubuntu 24.04 e instalação isolada; a execução subsequente passou.
- [PR #19](https://github.com/Techwayteam/techway-site/pull/19) integrada por squash, commit `42be79e669a661d1fdab3c45988f8a93bc96f1a0`.
- [Deploy Pages — run 43209562718](https://github.com/Techwayteam/techway-site/actions/runs/43209562718): jobs `build` e `deploy` em **success** no mesmo commit.

## Limites

A publicação está confirmada pelo GitHub Pages; não foi feita inspeção HTTP independente do site público após o deploy. O teste Chromium rodou em servidor local e simulou a abertura externa do WhatsApp, sem conversa real. O novo teste não substitui uma regressão móvel completa. Alertas de dependências preexistentes permanecem para análise de aplicabilidade em T008/T014, sem atribuí-los à T021.

**Resultado:** T021 encerrada tecnicamente. A próxima validação é comercial: [T022](../tasks/T022-validar-compreensao-e-funil.md). Clique em WhatsApp não comprova recebimento ou lead.
