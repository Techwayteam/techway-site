# Definições necessárias

Perguntas que dependem do fundador e alteram promessa, operação comercial ou
publicação. O trabalho independente deve continuar; não usar este arquivo para
transferir decisões rotineiras de implementação ao usuário.

| ID | Definição necessária | Resposta ou recomendação segura | Afeta | Estado |
| --- | --- | --- | --- | --- |
| DN001 | Quais capacidades podem ser demonstradas hoje a uma nova empresa: respostas sobre serviços/FAQ, coleta inicial, continuidade humana, contexto, follow-up e agendamento? | Respostas, coleta inicial, contexto da conversa e passagem para pessoa estão disponíveis. Follow-up não está. Agendamento está em desenvolvimento e só pode aparecer com esse rótulo. Histórico permanente, lembretes, CRM e outras ações externas exigem validação própria | T020, T010 | **Resolvida em 29/10/2026 — D031** |
| DN002 | A autorização dos dois clientes para nome, logo e relato continua válida? Como tratar o “80%”? | Fundador confirmou a autorização. “80%” é percepção da cliente e deve ser apresentado como relato subjetivo, sem aparência de métrica auditada ou resultado garantido | T010, T011 | **Resolvida em 29/10/2026 — D031** |
| DN003 | O que o Early Access oferece hoje, quais condições podem ser explicadas e como se forma a proposta comercial? | Proximidade com o desenvolvedor, influência no roadmap, funcionalidades avaliadas para a empresa, isenção da implantação e consultoria mensal. Valor e escopo entram na proposta; não prometer qualquer funcionalidade ou prazo | T020, T010 | **Resolvida em 29/10/2026 — D031** |
| DN004 | Qual evento define o primeiro cliente: aceite da proposta, assinatura ou primeiro pagamento? | Usar **proposta aceita e primeiro pagamento confirmado** para `customer_won`, registrando assinatura separadamente quando existir | T022, T023 | Aguardando fundador/comercial |
| DN005 | `/din_page` continua sendo um serviço comercial ativo, vira página da oferta principal ou deve apenas permanecer compatível? | Preservar a URL sem redirecionar, mas retirar a rota da jornada principal até a decisão | T021, futura página de solução | Aguardando fundador/produto |
| DN006 | As afirmações de segurança e tratamento de dados das páginas legais correspondem à arquitetura e aos fornecedores reais? | Não repetir selos ou garantias técnicas na página comercial; tratar a revisão em T015, com responsável competente | T015, T010 | Aguardando fundador/produto |
| DN007 | Qual primeiro canal de aquisição pode ser operado depois da base publicada e quem está autorizado a abordar terceiros? | Founder-led: começar por contatos mornos/referrals ou um recorte pequeno de outbound manual; nenhum agente envia mensagens sem autorização e lista/critério definidos | T023 | Aguardando fundador/comercial |

## Definições já disponíveis

- Público inicial: pequenos negócios que atendem pelo WhatsApp (D001).
- Solução disponível, implantação personalizada e Early Access podem coexistir;
  possibilidades novas não equivalem a recurso pronto nem a SLA (D023).
- Clique em WhatsApp não é lead; conversa precisa ser recebida e registrada (D009,
  D029).
- WhatsApp + planilha privada é a medição inicial; GA4 permanece adiado (D029).
- Oferta mínima, relatos autorizados e benefícios do Early Access confirmados em
  D031; agendamento permanece em desenvolvimento e follow-up não está disponível.

Ao responder uma linha, registrar a decisão em `09-decisoes.md`, atualizar as fichas
afetadas e manter aqui somente a referência e o estado resolvido.
