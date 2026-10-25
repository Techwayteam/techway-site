# Publicação dos posts conferida — 23/10/2026

Pedido do usuário: verificar a publicação que ele executou antes de iniciar T006. Baseline: árvore limpa; HEAD e origem consultada em `12fafc5af7e7da2861434bdfccb0c645cffc6b94`.

Resultado: **publicação correta**. Workflow [40023391516](https://github.com/Techwayteam/techway-site/actions/runs/40023391516) concluído com `success` para esse SHA. Home, blog, landing, termos, privacidade e quatro artigos responderam HTTP 200. Os quatro objetos `__NEXT_DATA__.props.pageProps.post` públicos coincidem integralmente com `data/blogPosts.json`. Os quatro cabeçalhos/capas usam o novo template; CSS público respondeu 200 e contém o fluxo de imagem à direita. T003 e o recorte de layout T012 estão publicados. [Resultado estruturado](2026-10-23-publicacao-posts.json).

`/blog` respondeu 200; `/blog/` respondeu 404. T006 mantém a URL funcional sem barra final em links, canonical e sitemap; esta entrega não configura redirecionamento no GitHub Pages. O commit do usuário incluiu caches/bundles de desenvolvimento em `out/` e os cinco PNGs preservados. Isso não impediu o build/deploy; não apagar esses arquivos como parte de T006. Higiene continua em T014.

Método: consulta Git de origem, API pública de Actions e HTTP com leitura de HTML/JSON/CSS. A primeira asserção de layout procurava imagem de seção também em S01, que usa blocos próprios; foi corrigida para verificar cabeçalho/título/capa comuns aos quatro. Nova execução aprovada. Sem novo browser QA remoto, inspeção de dispositivo real, acesso a Search Console ou envio de mensagens.
