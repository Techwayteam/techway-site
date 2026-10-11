# Análise do site Techway

Data: **10/10/2026 — revisão após sincronização**. Base: `origin/main` e `main` em **78362aa8a62bc41474d832471486b0e07235a91f**, último deploy público confirmado como bem-sucedido. Escopo: fonte atualizada, dados e rotas públicas, metadados HTML, build local e desenho da operação editorial. Referência pública: [techway.one](https://techway.one/) e [blog](https://techway.one/blog).

Este diagnóstico descreve o snapshot após T001. Na entrega local posterior de **T002**, dois CTAs foram ligados à landing default, os Links corrigidos e a landing pré-renderizada. [Evidência T002](evidence/2026-10-10-T002-navegacao.md). A02/A03 estão resolvidos no workspace, sem deploy; A09 permanece parcialmente aberto para URLs/variantes e posicionamento. O workspace preserva a variante local de Early Access e acrescenta essas mudanças; as observações de produção abaixo são históricas.

## Diagnóstico executivo

A Techway já tem uma mensagem compreensível: ajudar o pequeno empresário a lidar com o atendimento pelo WhatsApp usando agentes de IA. A home trabalha uma dor real, oferece contato direto e apresenta dois relatos de clientes. Há identidade visual, imagens próprias, infraestrutura de publicação e um blog estático.

O maior ganho inicial está em conectar **uma dúvida concreta do empresário → um artigo útil → uma conversa comercial identificável → acompanhamento do lead**. Hoje, dois CTAs de artigos terminam em 404 e não há instrumentação de conversão identificada. Já existe botão flutuante de WhatsApp em todas as páginas, que oferece outro caminho de contato, mas não corrige o CTA quebrado no fim do artigo. A divergência entre publicação e checkout foi resolvida nesta revisão.

Recomendação: executar a frente de blog em duas linhas coordenadas: preparar os artigos novos enquanto se corrige a base de navegação, conteúdo e contato. Depois, enriquecer a home com demonstração, processo de implantação e provas verificáveis. Animações devem ajudar a entender o produto; a sensação de movimento também virá de conteúdo recente e exemplos reais.

## O que foi verificado

| Camada | Verificação | Limite |
| --- | --- | --- |
| Repositório | Todas as páginas, componentes, dados, estilos, configuração e CI | Não havia documentação da Luluzinha além da imagem |
| Publicação | HTTP e HTML de home, blog, 3 artigos, termos, privacidade e rotas auxiliares | HTTP 200 não comprova interação correta em navegador |
| Conteúdo | 3 posts sincronizados, idênticos aos dados públicos do blog | Não há histórico de revisão editorial ou métricas |
| Técnica | Instalação do lockfile, type-check, build aprovado e inspeção do export | Resultado detalhado em evidence/2026-10-10-validacao.md |
| UX e acessibilidade | Inspeção do JSX/CSS e riscos de layout/interação | Sem QA visual em dispositivo ou auditoria de leitor de tela |
| Aquisição | Caminhos de contato, SEO e ausência de tags conhecidas no HTML consultado | Sem Search Console, analytics, CRM, rankings ou volumes de busca |

Os achados visuais são avaliações do código. Não foram medidos Lighthouse, Core Web Vitals de usuários reais, taxas de conversão, tráfego, qualidade de leads ou desempenho comercial. Não se atribui nota fictícia a essas dimensões.

## Situação das versões — sincronização concluída

- O checkout inicial estava em `49f27f5`; depois de `git fetch origin`, confirmou-se que estava **19 commits atrás**, sem commits locais exclusivos.
- Foi feito fast-forward para `78362aa`, deixando `main...origin/main` em **0/0**. Nenhum commit de conteúdo novo foi criado ou enviado.
- O [último deploy público do GitHub Pages](https://api.github.com/repos/Techwayteam/techway-site/deployments/2792971325/statuses) tem status success e aponta a `https://techway.one/`; seu SHA é o mesmo da main sincronizada. Evidência: [deploy da origem](evidence/2026-10-10-deploy-origem.json).
- `data/blogPosts.json` agora contém os **3 artigos**, com conteúdo normalizado idêntico ao __NEXT_DATA__ do blog público; o terceiro slug permanece disponível.
- As cinco imagens WebP locais eram idênticas às da origem por hash Git e agora são rastreadas. Os cinco PNG locais e todos os documentos foram preservados.
- A variante local do Early Access foi reaplicada uma única vez, mantendo os novos links de WhatsApp. Hero, CTA final, botão flutuante, footer, carrossel e template do blog receberam as mudanças remotas. Essa variante local ainda difere da home publicada e não foi enviada.
- Os 45 arquivos locais foram copiados para backup com hash verificado antes da sincronização. Caminho e reconciliação: [evidência T001](evidence/2026-10-10-T001-reconciliacao.md).

A reanálise corrige pontos do diagnóstico anterior: terceiro post recuperado; botão flutuante já existente; carrossel móvel já melhorado com rotação de 15 segundos; lucide atualizado para 0.526.0. O float das seções do blog também já foi substituído por flex. O diagnóstico inicial continua preservado no backup e na evidência de validação anterior.

## Achados priorizados

P0: impede uma retomada segura. P1: corrige perdas diretas ou viabiliza a primeira frente. P2: melhora a apresentação e a escala. P3: evolução após evidência de uso.

| ID | Prioridade | Achado e evidência | Consequência | Ação |
| --- | --- | --- | --- | --- |
| A01 | Resolvido | Main estava 19 commits atrás; fast-forward concluído; 3 posts locais/online iguais | Fonte atual identificada e conteúdo preservado | Manter rotina de fetch/comparação e explicitar variante local da home |
| A02 | P1 | CTAs `/solucoes-produtividade` e `/solucoes-automacao` respondem 404 | Leitor chega ao fim e não consegue seguir para a oferta | Apontar a contato válido e contextual ou criar páginas reais |
| A03 | P1 | `<Link><a>` em ambos os templates do blog, sem legacyBehavior | HTML com âncoras aninhadas e uso incompatível com o Link atual | Transferir classes e props ao Link; validar navegação/hidratação |
| A04 | P1 | Sem canonical, dados de artigo, sitemap e robots no checkout; sitemap e robots públicos 404 | Descoberta e representação editorial pouco estruturadas | Metadados por URL, BlogPosting, sitemap e política de rastreamento |
| A05 | P1 | Sem analytics/contrato de eventos identificado | Não se sabe quais posts geram contatos ou oportunidades | Medir clique contextual e confirmar lead em processo comercial |
| A06 | P1 | Chat antigo só tem console.log como envio; condição final inacessível; número já corrigido na origem | A rota antiga pode dar expectativa de contato sem envio real | Desativar/arquivar o fluxo, ou reparar se for reutilizado |
| A07 | P1 | Números de economia/conversão na home e percentual em depoimento sem evidência no repo; blog cita estudos sem fonte | Promessas comerciais difíceis de sustentar | Documentar evidências ou reescrever sem métricas não verificadas |
| A08 | P1 | Next permanece 14.0.3; lucide já está em 0.526.0 e npm ci sem legacy passou | Dívida de suporte do framework permanece; conflito antigo do lucide foi superado | Atualizar stack em lote separado e retirar workaround do pipeline após validação |
| A09 | P2 | `/index_old` e `/din_page` públicos; variante é carregada só após useEffect | Posicionamentos concorrentes; HTML inicial pobre; caminhos antigos | Retirar do conjunto público ou dar função clara a cada rota |
| A10 | P2 | Home extensa em blocos de texto; pouca demonstração prática | Visitante entende a dor, mas vê pouco do agente trabalhando | Exemplo curto de conversa, tarefas, implantação e limites |
| A11 | P2 | Terceiro card de depoimento é convite fictício | Mistura prova de cliente e chamada promocional | Separar convite; transformar clientes em casos autorizados |
| A12 | P2 parcial | Carrossel já tem largura total no celular, swipe, indicadores e giro a cada 15s; sem pausa por foco/controle persistente | Melhoria móvel incorporada; acessibilidade de movimento ainda precisa revisão | Validar interface e adicionar controle de pausa/foco quando necessário |
| A13 | P2 | `prose` sem typography; flex mantém texto com lg:w-1/2 mesmo sem imagem; datas sem localidade explícita | Seções sem imagem deixam espaço ocioso em desktop; leitura/data ainda precisam atenção | Largura condicional, estilos editoriais e data pt-BR estável |
| A14 | P2 | Imagens acima de 1 MB; 31 arquivos públicos somam cerca de 25 MB; imagens sem otimização do Next | Risco de carregamento caro, principalmente no celular | Dimensionar/comprimir assets usados, declarar sizes e reservar dimensões |
| A15 | P2 | og:url de termos usa domínio externo; privacidade usa caminho diferente da rota real | Compartilhamento e identidade da página inconsistentes | Unificar domínio e URLs reais em configuração central |
| A16 | P2 | Textos legais descrevem cookies, criptografia e monitoramento sem evidência técnica no site | Documentação pode divergir do funcionamento real | Revisar práticas e textos com responsável; auditoria não é parecer jurídico |
| A17 | P2 | `.gitignore` ignora somente node_modules; artefatos `.next` já versionados | Builds sujam o diff e ampliam o ruído de revisão | Higiene de artefatos em tarefa própria, preservando fonte |
| A18 | P2 | Workflow usa npm install e Node 20; loader SVG declarado sem dependência direta | Menor reprodutibilidade e configuração sem uso comprovado | Validar npm ci, runtime suportado e necessidade do loader |
| A19 | P2 | Posts sem relacionados, sumário, perguntas úteis ou categoria navegável; listagem sem ordenação explícita | Pouca continuidade de leitura e descoberta | Melhorar template em função das pautas e do volume |
| A20 | P2 | Botão flutuante já existe em todas as páginas, com mensagem genérica e sem origem do artigo | Oferece contato direto, mas pouca atribuição e contexto comercial | Contextualizar por página e medir clique; revisar sobreposição com chat antigo |

Fontes técnicas: [erro de Link do Next.js](https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor), [export estático](https://nextjs.org/docs/pages/guides/static-exports), [política de suporte](https://nextjs.org/support-policy). A versão 14 aparece como não suportada na política consultada. Isso pede atualização planejada; não demonstra por si só uma vulnerabilidade explorável no site estático. O [aviso de segurança de dezembro de 2025](https://nextjs.org/blog/security-update-2025-12-11) distingue aplicações Pages Router das que usam App Router.

Ausência de robots.txt não significa bloqueio de indexação; ausência de sitemap não significa que o site não pode aparecer no Google. Dados estruturados também não garantem resultado enriquecido ou posição. São melhorias de organização, a verificar na publicação.

## Conteúdo e posicionamento

Os dois posts mais antigos abordam produtividade e automação de maneira ampla. Podem continuar úteis, mas ainda não respondem com profundidade a perguntas de compra de quem vive no WhatsApp. Um artigo traz um percentual atribuído a estudos sem indicar fonte. O terceiro post, agora sincronizado, se aproxima melhor da dor do empreendedor; deve ser revisado e usado como ponte para o novo conjunto.

O vocabulário “funcionário digital” aproxima a oferta do empresário. Recomendo explicar rapidamente: **um agente de IA configurado para executar tarefas de atendimento, com regras, integrações e encaminhamento para a equipe**. Evitar sustentar a proposta em expressões sobre não reclamar ou substituir um salário; mostrar o trabalho realizado, a supervisão humana e as condições de uso.

Faltam respostas comerciais visíveis: o que está disponível hoje, o que exige integração, como o agente recebe as informações do negócio, quando passa a conversa para alguém, como começar e o que acontece após o contato. O status atual do Early Access precisa ser confirmado antes de redesenhar a oferta.

## Proposta de evolução da home

1. Hero: atendimento pelo WhatsApp, benefício concreto e convite a conversar sobre o negócio.
2. Exemplo ilustrativo: cliente pergunta, agente consulta informação autorizada, empresário recebe encaminhamento. Identificar como demonstração se não for fluxo real.
3. Três situações reconhecíveis: perguntas repetidas, mensagens durante o serviço e orçamento sem acompanhamento.
4. Capacidades verificadas e limites; integrações descritas conforme implementação real.
5. Como começa: diagnóstico, configuração, teste e operação acompanhada. Não prometer prazo sem validação.
6. Casos reais com consentimento, contexto e metodologia de qualquer resultado.
7. Objeções: intervenção humana, atualização de informações, disponibilidade, integração e contratação.
8. Três artigos recentes e CTA de conversa contextual.

Movimento recomendado: demonstração guiada curta, feedback discreto em ações e entrada suave de elementos, com respeito a movimento reduzido. Não há evidência de que mais animações, isoladamente, aumentem leads.

## SEO e aquisição

Começar com assuntos duradouros e próximos da decisão: atendimento no WhatsApp, diferença entre chatbot e agente, organização de orçamento e preparação para automatizar. Cada artigo deve entregar um exemplo, uma decisão prática e um próximo passo relacionado à dor. Validar pauta pelo interesse do público; volumes de busca e dificuldade ainda são desconhecidos.

O [Google recomenda conteúdo útil para pessoas](https://developers.google.com/search/docs/fundamentals/creating-helpful-content). Nossa estratégia é aplicar a experiência da Techway a dúvidas reais; volume de posts será consequência da capacidade de revisar. Usar metadados de [Article/BlogPosting](https://developers.google.com/search/docs/appearance/structured-data/article) coerentes com o conteúdo visível.

Cadência inicial proposta: **2 posts por semana por 6 semanas**, condicionada a revisão e qualidade. É uma hipótese operacional, não calendário de publicação autorizado nem promessa de crescimento. Revisar os três existentes e incluir ligações internas entre artigos com intenções diferentes.

## Conversão e dados

O WhatsApp atual da home, rodapé e botão flutuante é o ponto de partida. Já existem mensagens pré-preenchidas diferentes em CTAs da origem, mas o botão global ainda usa texto genérico. Confirmar operacionalmente o atendimento do número antes de publicar mudanças; a auditoria não enviou mensagem. Acrescentar contexto do artigo sem pedir dados no frontend sem destino de armazenamento.

`whatsapp_click` mede intenção, não lead confirmado. Separar contato recebido, lead qualificado, reunião e venda. O registro comercial deve permitir associar a conversa ao artigo por marcador de origem ou confirmação explícita; UTM em link de saída não garante atribuição na conversa. Não colocar nome, telefone, e-mail ou mensagem livre em eventos de analytics.

## Sequência de implementação

| Onda | Entrega | Critério para avançar |
| --- | --- | --- |
| 0 — concluída | Main sincronizada e publicação identificada; mudanças locais preservadas | T001 concluída; terceira rota e dados preservados |
| 1 — primeira frente | Links/CTA do blog, revisão dos existentes e série S01–S04 (replanejada em 11/10/2026) | Leitura e contato válidos, conteúdo revisado por artigo, build/export conferidos |
| 2 | SEO, eventos e rotina de acompanhamento | Metadados consistentes; medição testada e destino comercial definido |
| 3 | Home mais demonstrativa, casos reais e navegação editorial | Capacidades e provas aprovadas pelo responsável; QA móvel |
| 4 | Páginas por segmento, materiais úteis e integrações | Interesse/necessidade observados; custo operacional justificável |

A fonte já está reconciliada. A atualização do framework pode ser iniciada em tarefa própria; lucide já veio atualizado da origem. Problema de segurança aplicável e comprovado passa à frente das ondas; não se presume exploração de servidor que a hospedagem estática não executa.

## Pendências que não impedem preparar o blog

- Decidir o destino da variante local de Early Access quando a home for revisada; ela foi preservada, mas ainda não está publicada.
- Confirmar capacidades prontas, condições da oferta e continuidade do Early Access.
- Definir quem recebe, qualifica e acompanha os contatos.
- Obter dados de busca e conversão quando disponíveis.
- Confirmar autorização de uso de depoimentos, marcas e métricas.
- Fazer QA em navegador e celular antes de concluir melhorias de interface.

Essas pendências não exigem interromper briefs, redação ou correções locais já autorizadas. Restringem afirmações e etapas que dependem da informação.
