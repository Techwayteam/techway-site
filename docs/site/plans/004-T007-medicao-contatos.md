# Plano 004 — atribuição de contatos e confirmação de lead (T007)

Estado: **concluído localmente em 25/10/2026; publicação pendente**. Responsável: Codex/implementação e QA; operação posterior: fundador/comercial. Público: pequenos negócios que atendem pelo WhatsApp. Decisão do usuário: começar com **WhatsApp + planilha simples**, sem GA4 nesta etapa. [Evidência](../evidence/2026-10-25-T007-medicao-contatos.md).

## Resultado esperado

Identificar de qual página e posição veio uma conversa recebida, registrar o acompanhamento em uma planilha privada e manter a diferença entre intenção de contato e lead confirmado. O site continua estático e o WhatsApp permanece como único canal comercial.

Fluxo: `página → CTA com origem → WhatsApp aberto → visitante envia → conversa recebida → linha criada na planilha → qualificação e próximo passo`.

## Implementação

1. Centralizar número, composição da mensagem e códigos de atribuição; não colocar dados do visitante na URL.
2. Migrar os CTAs ativos de home, landing, blog/rodapé, depoimentos e páginas legais para um componente único, preservando copy, estilo, acessibilidade e nova aba.
3. Acrescentar ao fim da mensagem `Origem: <página> | CTA: <posição>`. O marcador pode ser editado pelo visitante; nesses casos, registrar origem desconhecida.
4. Validar no export que cada link ativo usa o número esperado, contém um único marcador coerente, expõe atributos de diagnóstico e não bloqueia a navegação.
5. Entregar CSV apenas com cabeçalhos para importação em uma planilha privada. Nenhuma linha com dados pessoais entra no repositório.

Rotas legadas `index_old` e `ContactChat` ficam fora e permanecem em T009. Não há evento enviado a analytics, cookie, backend, webhook, CRM ou mensagem de teste.

## Operação da planilha

Uma linha nasce somente depois que a mensagem aparece no WhatsApp da Techway. Campos mínimos: data/hora de recebimento, origem, CTA, tipo de negócio, necessidade, status, responsável, próximo passo, data do próximo passo, resultado e observações.

Status sugeridos: `recebido → qualificado → proposta → ganho/perdido`; usar `não qualificado` quando não houver aderência. Critério inicial de qualificação: negócio identificável, necessidade concreta ligada a atendimento/processo e possibilidade real de próximo passo. Não registrar clique como recebido e aceitar `origem desconhecida` quando o marcador não chegar.

## Aceite

- Todos os CTAs ativos exportados têm página/posição coerentes e mensagem codificada com um único marcador.
- Número e formato ficam centralizados; links legados permanecem isolados e documentados.
- Type-check, build isolado e verificador de contatos passam; SEO e conteúdo não regridem.
- Template da planilha não contém dados reais e a documentação define responsável, estados e limite da atribuição.
- Nenhum analytics/cookie é instalado. GA4 será reconsiderado quando houver volume, campanha paga ou decisão que dependa de cliques não enviados; nesse caso, consentimento e privacidade entram no escopo.

Publicação não faz parte desta execução sem pedido explícito. A verificação de recebimento exige conversa real futura e não será simulada pelo agente.

## Resultado local

Type-check e build isolado passaram; o pós-build aprovou 30 CTAs em nove páginas sem regressão do SEO. QA móvel cobriu home, landing `improvisation` e artigo. Um desencontro de origem após hidratação foi encontrado, corrigido e retestado. O CSV entregue tem apenas cabeçalhos; criar/importar a planilha privada e registrar a primeira conversa real são passos operacionais posteriores.
