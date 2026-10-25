# T006 — metadados, BlogPosting e sitemap

Estado: **concluída localmente em 24/10/2026; sem publicação**. Prioridade: P1. Responsável/revisor funcional: Codex/implementação e QA sequenciais. Plano: [003 — SEO técnico](../plans/003-T006-seo.md). Dependências: T001/T019 e publicação pelo usuário em `12fafc5a`.

## Problema e entrega

Os artigos já têm metadados básicos; a listagem não tem canonical/social completo e faltam BlogPosting, sitemap e robots. Completar esses sinais no export estático sem mudar a revisão editorial e o layout aprovados.

## Escopo

Configuração de site/helpers SEO, componentes de metadados, `pages/blog`, canonical/metadados de apoio em home/landing/legais, scripts de geração/verificação e `package.json`. Documentos em `docs/site`. Nenhuma alteração em `data/blogPosts.json`, lockfile, estilos ou artefatos versionados. Builds em cópia isolada.

## Aceite e evidência

Aceites detalhados no plano 003: publicação anterior conferida, metadados únicos no HTML inicial, BlogPosting fiel e seguro, sitemap/robots gerados e validados, type-check/build aprovados, conteúdo/rotas preservados e limites registrados. A execução não inclui push/deploy de T006, acesso ao Search Console ou medição comercial.

Aceites locais satisfeitos: nove páginas verificadas, quatro BlogPosting, sete URLs no sitemap, conteúdo preservado, sete cenários negativos rejeitados e XML parseado independentemente. [Entrega e limites](../evidence/2026-10-23-T006-seo.md), [verificação do export](../evidence/2026-10-23-T006-validacao.json), [guardas](../evidence/2026-10-23-T006-guardas.json). Próximo passo: publicação conforme autorização, com verificação pública; T007 segue separada.
