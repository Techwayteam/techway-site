# Domínio e contratos

## Vocabulário

**Agente de IA:** componente configurado para executar tarefas delimitadas com informações autorizadas, ferramentas e regras. **Funcionário digital:** expressão comercial usada pela Techway; explicá-la com exemplos e supervisão humana. **Lead:** contato realmente recebido e registrado. **Clique:** sinal de intenção, não contato garantido. **Caso:** relato de cliente verificável, com autorização de uso. **Integração:** capacidade dependente de sistema externo e configuração.

## Oferta mínima verificável — T020

Definição aceita pelo fundador em 29/10/2026 (D031). A oferta inicial é configurar e
evoluir, junto de cada empresa, um atendimento no WhatsApp que responde dúvidas,
coleta informações iniciais, mantém o contexto da conversa e permite continuar com
uma pessoa. Follow-up não está disponível. Agendamentos estão em desenvolvimento e
só podem ser apresentados com esse estado, sem confirmação automática ou prazo.

### Matriz de afirmações

| Tarefa | Afirmação publicável | Demonstração mínima | Informação necessária | Limite e continuidade humana | Atualização | Estado em 29/10/2026 |
| --- | --- | --- | --- | --- | --- | --- |
| Responder sobre serviços e dúvidas recorrentes | O atendimento responde dúvidas usando informações aprovadas pela empresa | Perguntar por um serviço, como funciona e uma orientação previamente fornecida | Lista de serviços, descrições, regras e respostas aprovadas | Não inventar informação; quando a fonte não responder, declarar o limite e seguir o procedimento humano combinado | A empresa informa mudanças; conteúdo alterado precisa ser revisto e testado | **Disponível** |
| Coletar informações iniciais | O atendimento coleta os dados iniciais definidos para entender o pedido antes da continuidade | Informar interesse, serviço desejado e dúvida principal; conferir o resumo | Campos mínimos e finalidade definidos com a empresa | Coleta não equivale a cadastro ou execução de ação externa; a pessoa assume conforme o procedimento acordado | Campos e regras são definidos na implantação | **Disponível** |
| Manter contexto | O atendimento mantém o contexto da conversa para lidar com perguntas relacionadas | Fazer uma pergunta complementar sobre o serviço já citado | Regras de contexto e tratamento de dados confirmadas na implantação | Não ampliar a afirmação para histórico permanente, memória ilimitada ou retomada futura sem validação própria | Mudanças técnicas e de fonte exigem novo teste | **Disponível para o contexto da conversa** |
| Continuar com uma pessoa | O atendimento permite passar a conversa para uma pessoa quando necessário | Fazer uma pergunta fora do escopo e verificar a continuidade humana | Canal, horário, responsável e procedimento escolhidos pela empresa | Não prometer resposta humana imediata nem um mecanismo idêntico para todas as empresas | Responsável comercial mantém o procedimento atualizado | **Disponível** |
| Agendamentos | Agendamentos pelo WhatsApp estão em desenvolvimento | Demonstrar somente em ambiente e fluxo validados antes de qualquer promessa de confirmação | Agenda, regras, disponibilidade, permissões e tratamento de falhas | Não afirmar que está pronto, não confirmar horário sem integração efetiva e não prometer prazo de entrega | Definida por integração e escopo contratado | **Em desenvolvimento** |
| Follow-up | Não entra na oferta atual | Nenhuma demonstração comercial | — | Não anunciar retomada automática de conversas | — | **Não disponível** |
| Lembretes, CRM e outras ações externas | Avaliados por caso depois de validar sistema, permissão e comportamento | Nenhuma demonstração incluída na oferta mínima | Integração, autorização, regras e testes próprios | Não afirmar que estão prontos nem simular execução | Definida por integração, se contratada | **Fora da oferta mínima** |

### Cenários de verificação

**FAQ dentro do escopo — exemplo fictício.** Uma pessoa pergunta a um salão quais
serviços são oferecidos e como se preparar para um serviço específico. A
demonstração recebe uma ficha aprovada com essas respostas. O comportamento esperado
é responder somente com a ficha, sem criar preço, disponibilidade ou agendamento, e
permitir uma pergunta complementar sobre o serviço já citado.

**Pedido fora do escopo — exemplo fictício.** A pessoa pede follow-up automático ou
uma remarcação em um fluxo sem agenda integrada. O comportamento esperado é não
confirmar a ação, explicar o limite e aplicar a continuidade humana combinada. A
demonstração falha se inventar disponibilidade, declarar o agendamento concluído ou
prometer uma retomada automática que não existe.

### Implantação e proposta

Antes de qualquer contratação, a conversa comercial delimita tarefa inicial, fontes
aprovadas, perguntas fora do escopo, procedimento humano, atualização e critérios de
teste. O Early Access oferece proximidade com o desenvolvedor, participação na
priorização do roadmap, avaliação e criação de funcionalidades para a realidade da
empresa, isenção da taxa de implantação e consultoria mensal para evolução do
negócio. Funcionalidade nova depende de escopo e acordo; não há promessa aberta de
entrega ou prazo. O valor mensal e eventuais integrações são definidos na proposta.
Não usar escassez nem “condições que não se repetem”. Relatos autorizados podem ser
usados; impactos percebidos devem ser apresentados como percepção, não como medição
objetiva.

## Modelo editorial atual

`data/blogPosts.json` é um array com `slug`, `title`, `subtitle`, `author`, `date`, `featuredImage`, `tags`, `content` e `cta`. `content` contém `introduction`, `sections[]` (`title`, `text`, imagem opcional e descrição) e `conclusion`; `cta` tem texto e link. Há tipos duplicados entre listagem e detalhe.

Regras imediatas: slug único e estável; data ISO válida; autoria real; texto não vazio; assets existentes em `public`; CTA interno existente ou link externo seguro; nenhuma alegação quantitativa sem evidência.

## Evolução proposta, ainda não implementada

| Campo | Regra |
| --- | --- |
| status | draft/reviewed/published; registros atuais preservados como publicados durante a migração |
| updatedAt | Data real de revisão substantiva; não substituir a data original |
| seoDescription | Resumo específico; usar subtitle como fallback na migração |
| category | Pilar editorial; tags continuam úteis para detalhes |
| readingTime | Calculado do conteúdo, sem afirmar precisão absoluta |
| featuredImageAlt | Descrição da imagem, evitando repetir título sem contexto |
| sources | URLs e data de consulta para fatos externos |
| relatedSlugs | Apenas artigos publicados e existentes |
| section.id | Identificador estável para sumário e links |

Aplicar filtros coerentes em listagem, getStaticPaths, relacionados e sitemap. Datas futuras não entram em produção; export estático requer um novo build na data desejada, não agenda posts sozinho. Preservar retrocompatibilidade até migrar todos os posts.

## Qualificação proposta

Registrar no processo comercial: identificador interno, horário do contato, origem quando conhecida, segmento, dor principal, volume aproximado de atendimento, tarefa pretendida, responsável e próximo passo. Critérios de fit propostos: usa WhatsApp com recorrência; tem trabalho repetitivo identificável; há responsável pela operação e interesse em avaliar implantação. Preço, capacidade de entrega e demais critérios ainda dependem da oferta atual.

Dados de pessoas e conversas ficam no sistema comercial autorizado, nunca em JSON público, documentos de evidência ou analytics. Se atribuição não puder ser comprovada, marcar como desconhecida; não imputar todo contato ao último clique.

## Contrato de eventos proposto

| Evento | Propriedades permitidas | Significado |
| --- | --- | --- |
| article_view | slug, categoria, caminho | Visualização conforme definição da ferramenta |
| whatsapp_click | origem, slug opcional, posição do CTA | Interesse em abrir WhatsApp |
| diagnostic_submit | origem e identificador técnico não pessoal | Formulário efetivamente entregue ao destino, se for implementado |
| lead_received | ID interno não pessoal, origem conhecida | Registro confirmado no processo comercial |

Separar visualização do provedor de analytics de um evento customizado para evitar contagem duplicada. Não enviar texto livre, nome, telefone, e-mail ou dados sensíveis como propriedades.
