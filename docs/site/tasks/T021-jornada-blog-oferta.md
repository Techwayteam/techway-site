# T021 — alinhar blog, oferta e origem comercial

Estado: **concluída — merge, testes e deploy confirmados em 12/11/2026**. Prioridade: P0. Responsável: aquisição + implementação.
Revisores: editorial/comercial e QA. Plano:
`../plans/005-primeiro-lead-e-cliente.md`. Dependências: destino da home T010;
preservação de T006/T007; DN005 para o futuro da landing antiga.

## Problema e resultado

Três artigos funcionais levam à landing ampla `/din_page?variant=default` e um leva
à home. A troca de oferta quebra a continuidade comercial e o marcador T007 registra
apenas a página do clique final, não necessariamente o artigo que iniciou a jornada.

Resultado: cada artigo conduz ao próximo passo pertinente da oferta de atendimento e,
quando o visitante atravessa outra página, a origem editorial continua disponível no
contato sem dados pessoais nem analytics adicional.

## Escopo de escrita

`data/blogPosts.json`, template do artigo e utilitários/componentes de contato somente
se necessários. Preservar quatro slugs, datas, autoria, BlogPosting, canonical,
relacionados e `/din_page`; não redirecionar nem apagar a landing nesta ficha.

## Trabalho

1. Mapear intenção de cada CTA: S01 pode levar ao exemplo; os artigos amplos devem
   levar à oferta principal ou contato contextualizado.
2. Escolher a solução mínima para preservar origem: CTA direto atribuído ou parâmetro
   allowlisted propagado até o WhatsApp. Não usar texto livre, telefone, nome, e-mail,
   cookie ou dado de conversa.
3. Padronizar texto do convite sem alterar o conteúdo editorial além do necessário.
4. Atualizar guardas para cobrir destino, mensagem e origem em todos os quatro artigos.

## Aceite e verificação

- 4/4 CTAs têm intenção, destino e oferta coerentes; nenhum depende da landing ampla
  por acidente.
- Uma jornada artigo → home/exemplo → WhatsApp registra o artigo/origem ou é
  explicitamente simplificada para CTA direto, sem duplicar marcador.
- `/din_page` permanece acessível e canônica enquanto DN005 estiver aberta, mas não é
  apresentada como a mesma oferta sem decisão.
- Type-check, build/pós-build, SEO, links, teclado e mobile passam; nenhum rascunho ou
  data muda.

## Evidências e pendências

T002/T003 permanecem concluídas no contexto histórico. Esta ficha registra a nova
direção comercial; não reclassifica link funcional como 404. A decisão arquitetural
definitiva da landing continua em DN005.

## Encerramento em 12/11/2026

Quatro CTAs editoriais alinhados à home; origem do artigo preservada até WhatsApp, com allowlist e fallback para `home`. Testes Chromium e guardas aprovados, PR #19 integrada ao commit `42be79e`, deploy GitHub Pages em `success`. Detalhes e limites: [evidência T021](../evidence/2026-11-12-T021-validacao-merge-deploy.md). T022 assume a validação comercial; DN005 permanece aberta.
