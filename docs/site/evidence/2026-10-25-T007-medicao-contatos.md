# Evidência — T007: atribuição de contatos e confirmação de lead

Data: **25/10/2026 — America/Sao_Paulo**. Estado: **concluída localmente; ainda não publicada**.

## Decisão e limite

O usuário escolheu começar com **WhatsApp + Google Sheets**, sem GA4 nesta etapa. O site não passou a coletar dados, criar cookies, enviar eventos ou armazenar conversas. Clique continua sendo intenção de contato; uma linha só nasce na planilha privada depois que a conversa chega ao WhatsApp da Techway.

Nenhuma mensagem foi aberta ou enviada durante o QA. Nenhuma planilha externa foi criada porque não há conta Google conectada nesta sessão. O arquivo `templates/T007-registro-leads.csv` contém somente cabeçalhos para importação; dados reais devem permanecer fora do repositório.

## Entrega

- número e formato da mensagem centralizados em `data/contact.json` e `data/contact.ts`;
- componente compartilhado `components/WhatsAppLink.tsx` e origem reativa em `hooks/useContactPage.ts`;
- marcador final `Origem: <página> | CTA: <posição>` nos contatos ativos da home, landing, blog/artigos, rodapé, depoimentos, páginas legais e botão flutuante;
- verificador `scripts/verify-contact-attribution.cjs`, executado automaticamente no pós-build e alimentado pelos slugs de `data/blogPosts.json`;
- template e processo operacional com status, responsável e próximo passo.

`components/ContactChat.tsx` e `pages/index_old.tsx` continuam legados e fora do escopo, conforme T009.

## Validação

Executada em cópia isolada para não usar o `out`/`.next` da prévia ativa:

- `npm.cmd run type-check -- --incremental false`: aprovado;
- `npm.cmd run build`: aprovado, **12 páginas estáticas**;
- SEO do pós-build: **9 páginas, 4 BlogPosting e 7 URLs no sitemap** aprovados;
- contatos do pós-build: **30 CTAs atribuídos em 9 páginas** aprovados; número, marcador único, atributos de diagnóstico, nova aba e `noopener noreferrer` conferidos.

QA em navegador Chromium, viewport **390 × 844**:

- `/`: 6 CTAs com origem `home`;
- `/din_page?variant=improvisation`: 8 CTAs com origem `landing-improvisation`;
- `/blog/atendimento-ia-alem-respostas-automaticas`: 2 CTAs com origem do artigo;
- todos os links inspecionados tinham CTA, marcador coerente, nova aba, proteção de origem e nenhuma rolagem horizontal.

A primeira inspeção revelou que componentes compartilhados da landing mantinham `landing-default` após a hidratação da variante por query. `useContactPage` foi introduzido e o cenário foi repetido com todos os oito CTAs em `landing-improvisation`, sem erro de hidratação.

## Limites observados

- Não há prova de recebimento no WhatsApp nem de preenchimento operacional da planilha; isso depende de uma conversa real futura.
- Não houve deploy da T007, teste em dispositivo físico ou auditoria completa de acessibilidade.
- Permanecem avisos anteriores de Browserslist desatualizada, download da fonte Google no build e propriedades legadas da imagem `collaboration.webp`; nenhum deles impediu o aceite desta tarefa.
- GA4 pode ser reavaliado quando houver volume, campanha paga ou decisão que dependa de cliques não enviados, junto com consentimento e política de privacidade.
