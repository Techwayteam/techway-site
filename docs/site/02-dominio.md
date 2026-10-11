# Domínio e contratos

## Vocabulário

**Agente de IA:** componente configurado para executar tarefas delimitadas com informações autorizadas, ferramentas e regras. **Funcionário digital:** expressão comercial usada pela Techway; explicá-la com exemplos e supervisão humana. **Lead:** contato realmente recebido e registrado. **Clique:** sinal de intenção, não contato garantido. **Caso:** relato de cliente verificável, com autorização de uso. **Integração:** capacidade dependente de sistema externo e configuração.

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
