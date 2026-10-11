# S01 — ajuste editorial solicitado

Data: 11/10/2026. Tarefas: continuação de T004/T005, ajuste local de S01 concluído. Entrega e aceite: manter referência à FEBRABAN com setor implícito; exemplo genérico de pedido; fechamento sobre atuação conforme a demanda, sem recomendação de ampliar equipe. Slug, autoria, data e imagens mantidos.

Alterações em `data/blogPosts.json` e `../editorial/rascunhos/S01-integracao.json`: título da seção sobre aprendizados das empresas, apresentação do evento, exemplo de acompanhamento de pedido, comparação entre operações, fechamento e rótulo da segunda fonte. Links das fontes preservados. `preparar-S01.cjs` incorpora esses ajustes para não reintroduzir a versão anterior; copy originalmente recebida permanece histórica. Direção registrada na série editorial e em D020.

Validação: type-check na fonte principal com incremental desativado, build na cópia isolada (12 páginas/quatro artigos) e `validar-S01.cjs --export` aprovados. Os três artigos anteriores seguem com copy/metadados/CTAs preservados. HTML da rota no servidor local respondeu HTTP 200; título novo e fechamento conforme demanda presentes, sem referências explícitas a bancos/setor financeiro/setor bancário ou aumento de equipe no corpo do artigo. Avisos antigos de fonte/Browserslist persistem. Sem mudança de layout; QA visual anterior continua histórico, sem nova alegação de teste visual nesta revisão.

Sem commit, push ou deploy público. Próximo passo: conferir a copy ajustada na prévia; a próxima pauta da fila é S02.
