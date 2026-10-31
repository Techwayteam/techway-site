# T010 — entregar a home de conversão v1

Estado: **concluída localmente em 31/10/2026; publicação pendente**. Prioridade: P0. Responsável: UX + implementação. Revisores:
produto/comercial e QA. Plano: `../plans/005-primeiro-lead-e-cliente.md`.
Dependências: T020 para as afirmações publicáveis; T007 para atribuição; DN002–DN003
para depoimentos e Early Access.

## Problema e resultado

A primeira tela reconhece sobrecarga, mas demora a explicar atendimento no WhatsApp.
A página repete a dor, não mostra uma tarefa concreta e mistura prova real, cenário
hipotético e métricas sem método.

Resultado: uma home enxuta em que o visitante identifica oferta, canal e próximo
passo; vê um exemplo ilustrativo acessível; entende tarefas, implantação e limites;
e chega a um CTA atribuível sem promessa não comprovada.

## Escopo de escrita

Principalmente `pages/index.tsx`, `components/Header.tsx`,
`components/Testimonials.tsx`, metadados/documento global e estilos estritamente
necessários. Preservar marca, paleta, número comercial, rotas, assets locais, T007,
SEO T006 e a variante de Early Access até a decisão de produto. Não reconstruir o
site nem criar chatbot funcional.

## Trabalho

1. Aplicar a direção de hero B do dossiê: categoria explícita, benefício qualitativo,
   CTA “Conversar sobre meu atendimento” e link para `#exemplo`.
2. Criar em HTML um diálogo curto sobre serviço/FAQ, rotulado como exemplo fictício e
   sem simular agendamento confirmado.
3. Substituir repetição da dor por tarefas, três passos de implantação, limites e
   participação humana, conforme T020.
4. Remover números sem método, selos absolutos e o cartão “Aqui pode ser você!”.
   Usar os dois relatos apenas conforme DN002; preferir cartões estáticos.
5. Tornar navegação/âncoras coerentes, adicionar `lang="pt-BR"` global e manter um H1,
   canonical e metadados específicos.
6. Incluir FAQ mínima e convite final somente com informações confirmadas; política e
   preço apontam para explicação real, sem garantia jurídica/técnica inventada.

## Aceite e verificação

- Em cinco segundos, tarefa e WhatsApp aparecem antes da rolagem no desktop; a
  compreensão real será medida em T022, não presumida pelo layout.
- Exemplo é texto HTML acessível, alcançável por teclado, identificado como
  ilustrativo e legível sem ícones/imagens.
- Não há percentual, economia, disponibilidade 24h, escassez ou capacidade pronta sem
  evidência registrada.
- CTAs usam T007, abrem o WhatsApp sem envio automático e preservam página/posição.
- Header, menu, âncoras, foco, flutuante e conteúdo funcionam em 360, 390, 768 e
  desktop; contraste alterado é conferido.
- Type-check, build/pós-build, guardas de SEO/contato e inspeção do HTML passam; não
  há regressão das rotas publicadas.

## Evidências e pendências

Base reconciliada em `../evidence/2026-10-26-dossie-conversao.md`. DN001–DN003 foram
resolvidas pelo fundador em 29/10/2026 (D031). Fonte de aceite:
`../evidence/2026-10-29-T020-aceite-fundador.md`. Implementação, build isolado,
guardas de SEO/contato e QA responsivo concluídos em 31/10/2026; o primeiro build
encontrou e permitiu corrigir a atribuição do depoimento compartilhado em
`/din_page`. Evidência: `../evidence/2026-10-31-T010-home-conversao.md`. Publicação
continua fora da autorização desta ficha; compreensão comercial será validada em T022.
