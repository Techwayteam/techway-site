# Evidência — T010 home de conversão v1

Data: **31/10/2026 — America/Sao_Paulo**. Estado: **publicada e verificada**.
Ficha: `../tasks/T010-home-conversao.md`.

## Entrega e escopo

A home foi reorganizada sem reconstruir o restante do site. A primeira tela agora
identifica atendimento com IA no WhatsApp, apresenta um benefício qualitativo e leva
ao CTA atribuível “Conversar sobre meu atendimento”. A página inclui:

- tarefas disponíveis, participação humana e limites da oferta;
- exemplo fictício em HTML, sem agendamento ou ação externa simulada;
- três passos de implantação;
- agendamento identificado como em desenvolvimento e follow-up fora da oferta atual;
- dois relatos autorizados, com os 80% apresentados como percepção da cliente;
- Early Access conforme D031, FAQ e convite final sem preço ou prazo inventado.

Foram removidos da home os números sem método, a promessa de disponibilidade 24h, a
escassez e o cartão fictício “Aqui pode ser você”. Slugs, artigos, rotas legais,
assets, canonical, SEO T006 e atribuição T007 foram preservados.

## Arquivos da implementação

- `../../../pages/index.tsx`: nova hierarquia da home, oferta, exemplo, limites,
  Early Access, FAQ, metadados e CTAs;
- `../../../components/Testimonials.tsx`: dois relatos estáticos e autorizados, com
  contexto explícito para a percepção de 80%;
- `../../../components/Header.tsx`: navegação e âncoras coerentes, menu e foco;
- `../../../components/WhatsAppButton.tsx`: convite flutuante alinhado à oferta;
- `../../../pages/_document.tsx`: idioma global `pt-BR`;
- `../../../styles/globals.css`: rolagem por âncora, fonte e respeito a movimento
  reduzido.

## Aceite verificado

- oferta, canal e CTA principal aparecem antes da rolagem em desktop; em 768 × 768 o
  CTA termina em 549 px, sem overflow horizontal;
- exemplo é texto HTML acessível, rotulado como fictício e compreensível sem imagem;
- um único H1, `lang="pt-BR"`, canonical e metadados específicos presentes;
- menu, âncoras, FAQ por teclado, foco, flutuante e layout conferidos em 360, 390,
  768 e 1280 px no Chromium local;
- sete links de WhatsApp da home conferidos com `target`, `rel`, página e posição;
- nenhuma mensagem de WhatsApp foi enviada.

## Validações executadas

- `npm.cmd run type-check`: aprovado na fonte principal;
- `npm.cmd run build`: aprovado em cópia isolada, com 12 páginas estáticas;
- pós-build: SEO aprovado em 9 páginas, 4 `BlogPosting` e 7 URLs no sitemap;
- guarda de contatos: 31 CTAs atribuídos em 9 páginas, sem equiparar clique a lead;
- inspeção do HTML exportado: idioma, H1, canonical, exemplo, limites e ausência de
  promessas não sustentadas aprovados;
- QA no Chromium: navegação responsiva, teclado, imagens e ausência de erros de página
  aprovados.

O primeiro build isolado revelou que o componente compartilhado de depoimentos havia
fixado `page=home` também em `/din_page`. O componente passou a usar o contexto real
da página; o build e a guarda de contatos foram repetidos e aprovados.

## Limites e próximo passo

O build comprova integridade técnica, não compreensão comercial, entrega de WhatsApp
ou resultado de negócio. Não houve teste em dispositivo físico, contato com terceiros,
push ou deploy. Permanecem os avisos históricos de Browserslist desatualizado e falha
de download da fonte do Google durante o build isolado.

O próximo trabalho local independente é T021: alinhar os quatro artigos à mesma oferta
e preservar a origem do contato. T022 fará a validação de compreensão; convites a
participantes e novas publicações continuam dependentes de autorização explícita.

## Publicação verificada

O commit `dcc1ab5a` foi enviado para `main` junto do commit T007 `849cc2b8`. O
[workflow 41164599336](https://github.com/Techwayteam/techway-site/actions/runs/41164599336)
terminou em `success`: build em 46 s, deploy em 11 s e duração total de 1 min 6 s.

Na URL pública `https://techway.one/` foram confirmados título, descrição, canonical,
`lang="pt-BR"`, um H1, ausência de overflow em 390 e 1280 px e sete CTAs da home com
origem/posição. Home, blog, S01, landing, termos, privacidade, sitemap e robots
responderam HTTP 200. A variante `/din_page?variant=improvisation` preservou oito
CTAs como `landing-improvisation`, incluindo o componente compartilhado de
depoimentos. Nenhum link de WhatsApp foi acionado.

As Actions registraram avisos de manutenção do runner sobre Node.js 20 forçado para
Node.js 24 e futura migração de `ubuntu-latest`; não houve falha de aplicação. Esses
avisos permanecem para T014.
