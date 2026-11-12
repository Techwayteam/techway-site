# T022 — validar compreensão e operar o primeiro lead

Estado: **planejada, com plano executável preparado em 12/11/2026**. Prioridade: P0.
Responsáveis: fundador/comercial (participantes, planilha, funil) + UX (teste e síntese).
Plano: [006 — teste de compreensão e funil](../plans/006-T022-validacao-compreensao-e-funil.md). Plano-mãe: [005](../plans/005-primeiro-lead-e-cliente.md).

## Problema e resultado

T010 e T021 estão publicadas, mas ainda não sabemos se empresários entendem a oferta nem se o registro privado de contatos T007 foi operacionalizado. Clique em WhatsApp não é lead.

Entregas da T022: **5–8 avaliações qualitativas anônimas** com pessoas reais, síntese de dúvidas sobre produto/canal/ação e operação mínima do funil com conversas realmente recebidas, sem inventar eventos.

## Escopo e trabalho

1. Preparar planilha privada a partir de [CSV T007](../templates/T007-registro-leads.csv); definir responsável e próximo passo para cada contato real.
2. Avaliar 5–8 gestores de pequenos negócios que atendem no WhatsApp, exibindo a primeira tela por ~5 segundos, sem explicações; usar [ficha anônima](../templates/T022-ficha-avaliacao-anonima.md), depois explorar página e CTA.
3. Sintetizar compreensão de oferta, dor, canal, próximo passo, limites e objeções. Se surgir confusão recorrente, propor correção de copy em PR separado e validá-la.
4. Registrar somente conversas efetivamente recebidas em estados `recebido → qualificado → demonstração → proposta → ganho/perdido`, incluindo origem conhecida/desconhecida, dono e próximo passo.
5. Registrar fatos `conversation_started`, `lead_qualified`, `proposal_sent` e `customer_won` apenas quando ocorrerem. Resolver DN004 **antes** de marcar cliente ganho.
6. Atualizar `../10-progresso.md` e criar evidência agregada/anonimizada quando a execução realmente acontecer.

## Aceite

- [ ] 5–8 avaliações espontâneas e síntese anonimizada (sem taxa estatística inventada).
- [ ] Dúvidas e oportunidades de copy/prova ordenadas por evidência, com responsável.
- [ ] Planilha importada em ambiente privado; contatos recebidos no período com origem, status e próximo passo ou zero explicitado.
- [ ] `customer_won` somente após DN004 resolvida e marco comprovado.
- [ ] Nenhuma conversa, nome, número, email, material privado ou envio não autorizado no Git.

## Dependências

T010/T021 publicadas. Planilha T007 ainda não confirmada como importada. Recrutamento depende de autorização explícita do fundador; T023 (aquisição ativa) exige DN007 e **não** começa automaticamente. Nesta atualização: apenas planejamento, sem convite, teste de compreensão, importação de planilha, lead ou deploy.
