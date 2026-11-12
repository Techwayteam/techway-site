# Plano 006 — T022: testar entendimento e operar o funil comercial

Data: **12/11/2026** (America/Sao_Paulo). Estado: **planejamento concluído; execução comercial ainda não iniciada**.
Ficha: [T022](../tasks/T022-validar-compreensao-e-funil.md). Plano-mãe: [005](005-primeiro-lead-e-cliente.md).
Base: home T010 e jornada blog/oferta T021 publicadas; atribuição T007 ativa, planilha privada ainda pendente.

## Resultado esperado

Com evidência qualitativa, verificar se pequenos empresários compreendem **o que a Techway oferece**, **qual problema resolve**, **por que usa WhatsApp**, **qual próximo passo de contato** e **os limites reais do produto**. Em paralelo, estabelecer registro privado do funil `conversa recebida → qualificado → demonstração → proposta → ganho/perdido`.

O objetivo de negócio é avançar até o primeiro lead/cliente; **não há garantia de captação**, prazo comercial ou meta percentual dedutível da amostra. Esta tarefa não cria CRM, backend, GA4, novas páginas ou disparos de campanha.

## Frente A — avaliar compreensão da oferta (UX + fundador/comercial)

**Público e amostra:** **5–8** donos/gestores de pequenos negócios que já atendem pelo WhatsApp, buscando 3 ou mais tipos de negócios aderentes (como salão/barbearia, estética/massagem e pilates) e, quando possível, pessoas que ainda não conhecem a Techway. Diversidade de familiaridade com IA. Amostra **qualitativa**, não estimativa estatística. O fundador aprova e executa convites; **não enviar mensagens por iniciativa deste plano**.

**Roteiro (10–15 minutos por pessoa):**
1. Mostrar somente a primeira tela de `https://techway.one/` durante ~5 segundos, ocultar e perguntar *sem pistas*: “O que essa empresa oferece?” e “Qual problema ela resolveria?”
2. Reabrir a home: “O que faria para descobrir se essa solução serve para sua empresa?” Observar qual botão/ação encontra; não enviar mensagem real.
3. Deixar explorar home, exemplo, FAQ e limites por 2–3 minutos. Perguntar: “O que entendeu que já funciona? O que parece ainda em desenvolvimento?” Evitar citar agendamento/follow-up na pergunta.
4. Perguntar: “O que faltaria para você confiar na solução e conversar com a empresa?” Registrar objeção e termos utilizados **sem informações pessoais**.
5. Opcional por sessão: mostrar um artigo pertinente e observar se entende blog → oferta → contato. O QA técnico T021 já validou cliques; aqui se avalia compreensão.
6. Ao final, esclarecer fatos: FAQ, coleta inicial, contexto e passagem a humano disponíveis; **agendamento em desenvolvimento**, **follow-up fora da oferta atual**.

**Rubrica:** registrar para cada uma das cinco dimensões (oferta, problema, canal, próximo passo, limites) `claro/parcial/confuso`, acompanhada de evidência observada. Usar [ficha anônima T022](../templates/T022-ficha-avaliacao-anonima.md). Guardar notas identificáveis somente fora do Git com acesso restrito e consentimento.

**Análise e iteração:** começar por **3 avaliações**, consolidar padrões e, se necessário, propor correções mínimas de copy/CTA em PR separado. Finalizar com mais **2–5** avaliações. Se uma mesma confusão sobre promessa, canal ou próximo passo ocorrer em 2+ casos, priorizar revisão editorial; não tratar limiar como estatística de mercado. Não aumentar complexidade do site sem necessidade. Validar correções com revisão comercial e testes técnicos antes de eventual publicação.

## Frente B — operar funil mínimo (fundador/comercial)

1. Importar o modelo [CSV T007](../templates/T007-registro-leads.csv) em **planilha privada**, designar responsável e definir período de registro. Não versionar a planilha ou linhas reais.
2. Criar registro **somente após a mensagem chegar efetivamente ao WhatsApp comercial**. Clique, abertura da janela e sessão de teste não são contatos recebidos. Capturar `origem` e `cta` da mensagem; se faltarem, usar `desconhecida` e `desconhecido`.
3. Preencher colunas do CSV: data/hora recebida, origem, CTA, categoria de negócio, necessidade, status, responsável, próximo passo, data de retorno, resultado e observações breves.
4. Estados e evidência: `recebido` = mensagem chegada (`conversation_started`); `qualificado` = necessidade/aderência confirmadas (`lead_qualified`); `demonstração` = encontro efetivo; `proposta` = proposta enviada (`proposal_sent`); `ganho/perdido` = evento confirmado + motivo de perda.
5. **DN004 segue aberta.** Até o fundador decidir e comprovar o critério de ganho (recomendação atual: proposta aceita + primeiro pagamento confirmado), **não marcar `customer_won`**.
6. Fazer conferência do procedimento com exemplo hipotético **fora dos registros reais**. Consolidar contagens absolutas de cada etapa, objeções, origem conhecida/desconhecida e oportunidades de melhoria. Se nenhuma conversa chegar, reportar **zero**, sem inventar lead.

## Sequência de execução

| Passo | Entrega | Responsável | Dependência |
| --- | --- | --- | --- |
| A1. Preparação | Planilha privada + roteiro/caderno anônimo prontos | Fundador + UX | Trabalho interno autorizado |
| A2. Primeira rodada | 3 avaliações espontâneas | Fundador/UX | Participantes e convites autorizados |
| A3. Ajustes | Matriz de dúvidas + pequenas propostas de copy/CTA | UX/produto; implementação se preciso | 3 respostas reais |
| A4. Validação adicional | Totalizar 5–8 avaliações e síntese agregada | Fundador/UX | Participantes autorizados |
| B1. Operação | Registro de conversas **realmente recebidas**, com dono e próximo passo | Fundador/comercial | Planilha privada e mensagens efetivas |
| Fechamento | Evidência anonimizada, decisões e backlog atualizados | Coordenação + fundador | Observações e registro operacional |

## Aceite

- [ ] 5–8 avaliações, respostas espontâneas e rubrica nas cinco dimensões; conclusões **qualitativas** com contagens absolutas, sem taxa populacional inventada.
- [ ] Dúvidas, objeções e hipóteses priorizadas (`manter / ajustar copy / demonstrar prova`), com responsáveis.
- [ ] Planilha T007 importada privadamente; todos os contatos do período definidos como recebidos de verdade, com origem conhecida ou desconhecida, status, dono e próximo passo.
- [ ] Não há `conversation_started`, `lead_qualified`, `proposal_sent` ou `customer_won` fictícios; DN004 decidido antes de cliente ganho.
- [ ] Nenhum identificador pessoal, conversa, convite ou dados comerciais privados no Git. Sem disparos externos sem autorização.

**Fechamento parcial:** se entrevistas acabarem mas ainda não houver conversas recebidas, registrar “compreensão avaliada; operação/primeiro lead pendente”, **não** encerrar integralmente T022. O primeiro lead não é condição artificial para concluir uma etapa de pesquisa, mas a operação real do funil deve ser distinguida da mera preparação.

## Dependências e limites

- DN004: critério formal de primeiro cliente ainda pendente (não bloqueia entrevistas).
- DN005: decisão sobre `/din_page` permanece aberta; não bloquear T022.
- DN007: aquisição ativa é T023; não autorizar campanhas por inferência.
- Planejamento **não** cria planilha privada, não coleta entrevista, não registra lead e não faz deploy.

Referências: [evidência T021](../evidence/2026-11-12-T021-validacao-merge-deploy.md) e [T007](../tasks/T007-medicao-contatos.md).
