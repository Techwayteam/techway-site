# T012 — leitura e composição dos artigos

Estado: **parcial — recorte de layout dos quatro posts entregue e validado localmente em 16/10/2026; sem publicação**. Responsável: Codex/UX e implementação. Público: pequenos negócios que atendem pelo WhatsApp. Listagem, sumário e evolução de relacionados continuam pendentes. Plano: etapa de leitura do roadmap, mantendo o conteúdo e a jornada definidos no plano 001.

## Problema e entrega

Usuário mostrou o artigo de produtividade com texto preso a meia coluna, imagem centralizada verticalmente e parágrafos sem justificação. A entrega deste recorte é corrigir a apresentação dos quatro artigos existentes: texto contornando imagens em desktop, imagens empilhadas em celular, proporções corretas, tipografia/ritmo de leitura e cabeçalho consistente.

## Escopo

`pages/blog/[slug].tsx`, CSS específico em `styles/BlogArticle.module.css` e marcador de parágrafo em `components/blog/ArticleContent.tsx`. T003 e os demais dados de `data/blogPosts.json` devem ficar integralmente preservados. Não substituir imagens nem alterar texto, datas, slugs, metadados ou destinos comerciais. Preservar os artefatos/PNGs preexistentes; build e QA em cópia isolada.

Título, subtítulo e autoria antes da capa nos quatro artigos. Seções com imagem deixam o arranjo rígido de duas colunas; no desktop o texto contorna a figura e ocupa a largura disponível abaixo dela. Parágrafos justificados em telas maiores, com hifenização e idioma pt-BR; alinhamento natural em celular para evitar lacunas excessivas. Citações, mensagens do comparativo, listas e legendas mantêm alinhamento próprio.

## Aceite

- Quatro artigos com copy/dados idênticos à entrada e uma única H1 visível abaixo do header fixo.
- Imagens com dimensões reais reservadas, sem distorção ou cortes; sem centralização vertical ao lado de parágrafo longo.
- Texto de produtividade comprovadamente ocupa maior largura ao passar da base da imagem em desktop.
- Celular 360/390 px e tablet/desktop 768/1280 px sem overflow; comparativo S01 mantém uma/duas colunas.
- Navegação/CTA/teclado, type-check e build aprovados; screenshots inspecionadas e limites registrados.
- Resultado local distinto de publicação. Listagem, sumário e evolução de relacionados seguem como recortes posteriores de T012.

## Evidência

[Entrega e verificação](../evidence/2026-10-16-T012-layout.md): type-check/build aprovados, conteúdo idêntico, 16 cenários Chrome sem overflow/exceções, proporções reais e fluxo ao redor da imagem comprovados, CTAs/teclado conferidos. Screenshots desktop/celular inspecionadas. Baseline e build isolado em `.local-backups/2026-10-16-T012-layout`. Restante de T012 não concluído por esta entrega.
