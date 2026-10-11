# Fontes e evidências

Consulta: **10/10/2026**. Usar fontes primárias e reler as que mudam antes de implementar/publicar conteúdo dependente delas. Links abaixo embasam o diagnóstico; não substituem evidência da própria Techway.

| Fonte | Uso | Limite |
| --- | --- | --- |
| [Home Techway](https://techway.one/) | Posicionamento e conteúdo público | HTML/texto disponível; não comprova resultado comercial |
| [Blog Techway](https://techway.one/blog) | Inventário de 3 artigos | Snapshot está em evidence; não é fonte completa de código |
| [Main sincronizada](https://github.com/Techwayteam/techway-site/commit/78362aa8a62bc41474d832471486b0e07235a91f) | Fonte Git atual após fetch/fast-forward | Workspace mantém variante local de Early Access |
| [Status do último deploy](https://api.github.com/repos/Techwayteam/techway-site/deployments/2792971325/statuses) | Deploy success do mesmo SHA para techway.one | Não foi criado novo deploy nesta sessão |
| [Next — Link com âncora filha](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor) | Sintaxe inválida encontrada no blog | Build passou; HTML exportado confirmou âncoras aninhadas |
| [Next — export estático](https://nextjs.org/docs/pages/guides/static-exports) | Limites da hospedagem e build | Não pressupor backend no Pages |
| [Next — suporte](https://nextjs.org/support-policy) | Revisão da versão 14.0.3 | Revalidar versão alvo na execução |
| [Next — aviso de segurança](https://nextjs.org/blog/security-update-2025-12-11) | Diferenciar App Router e Pages Router | Não atribuir essas vulnerabilidades a site estático por versão apenas |
| [Google — conteúdo útil](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | Estratégia editorial ligada a dúvidas reais | Não é promessa de ranking/lead |
| [Google — Article](https://developers.google.com/search/docs/appearance/structured-data/article) | Metadados de artigos | Não garante resultado enriquecido |
| [Google — JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) | Avaliação T002: renderização e pré-renderização de default | Executar JS é possível; não comprova indexação da Techway |
| [Google — URLs](https://developers.google.com/search/docs/crawling-indexing/url-structure) | Parâmetros de variante e links rastreáveis | Query não é vantagem automática de ranking |
| [Google — canonicalização](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) | URL preferida e variantes para T006 | Nenhuma canonical nova implementada em T002 |

## Evidências locais

- `evidence/2026-10-10-http.json`: códigos HTTP e metadados observados.
- `evidence/2026-10-10-blog-publicado.json`: dados públicos em __NEXT_DATA__, com buildId e 3 posts.
- `evidence/2026-10-10-validacao.md`: comandos, resultados, HTML exportado e limites.
- `evidence/2026-10-10-http-pos-sync.json`: rotas online reconsultadas após sincronização.
- `evidence/2026-10-10-deploy-origem.json`: status e URL do deploy do commit 78362aa.
- `evidence/2026-10-10-T001-reconciliacao.md`: backup, fast-forward, preservação local e validação atual.
- `evidence/2026-10-10-T002-navegacao.md`: entrega técnica local e avaliação de SEO; resultado estruturado em `2026-10-10-T002-validacao.json` e screenshot móvel.
- `data/blogPosts.json`: três posts preservados; após T002 local dois CTAs diferem do conteúdo público; `pages`, `components`, `public` e workflow são as fontes do diagnóstico técnico.
- Referência da Luluzinha: imagem fornecida pelo usuário com árvore de documentos. Não foi acessado outro projeto nem inferido o conteúdo dos arquivos.

Registrar futuras evidências com data, origem, método e conclusão. Não guardar credenciais, conversas de clientes ou dados pessoais nos documentos.

## Fontes da série — 11/10/2026

- Proposta editorial, copy de S01 e diretrizes visuais: anexos do usuário nesta sessão; copy atribuída ao outro GPT como origem da redação, responsabilidade editorial pública confirmada como Leonardo Reis - Founder Techway. Usuário confirmou presença física no evento.
- [FEBRABAN — balanço de 2026](https://portal.febraban.org.br/noticia/4491/pt-br/): fonte primária de 27/08/2026, consultada para tema, agentes autônomos e liderança humana. Não comprova produto, cliente ou resultado da Techway.
- [FEBRABAN — pesquisa e aplicações de IA](https://portal.febraban.org.br/noticia/4490/pt-br/): fonte primária de 25/08/2026, consultada para aplicações em processos e atendimento. Não foram transportados percentuais bancários como resultados de pequenos negócios.
- Origin/main via `git ls-remote` em 11/10/2026: 78362aa8a62bc41474d832471486b0e07235a91f. Consulta não revalida o deploy de 10/10.
- [Replanejamento](evidence/2026-10-11-T018-plano-editorial.md), [integração local de S01](evidence/2026-10-11-S01-integracao.md) e [prompts/produção visual](evidence/2026-10-11-S01-imagens.md).
