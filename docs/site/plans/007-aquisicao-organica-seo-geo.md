# Aquisição orgânica — mapa temático e baseline (25/11/2026 BRT)

Status: A/G publicados e smoke aprovado (PR #26, workflow 45739708531); D/V preparados em branch para publicação autorizada. Fundador pretende solicitar indexação dos quatro após confirmação pública. Fundador informou concluir solicitações de indexação de URLs anteriores; status de índice ainda não revalidado. Responsável pela pesquisa e integração: agente Techway; fundador aprova provas comerciais e publicação. Base main inicial 993ac55bef81bde1e523195ade7f9372eccb2ff2. Skills de operação: [agent-skills/SKILLS.md](https://github.com/Techwayteam/agent-skills/blob/main/SKILLS.md), PR #1 integrado em ea886f3ad334dc2d6f2777f5944b7da2738893c7.

## Objetivo e recorte
Encontrar pequenos negócios no Brasil que precisam atender clientes e organizar horários pelo WhatsApp, converter visitas em conversas qualificadas. Marca: funcionários digitais, não exclusivamente salão; atendimento e agenda comercializáveis. Não criar páginas para funcionalidades futuras, nem prometer resultados. Preservar slugs e site estático. A página comercial /atendimento-agendamentos-whatsapp é o destino central, home marca, /blog hub editorial.

## Evidência de partida
- Deploy #23/#24 e smoke #45716788778 documentados em 10-progresso: 8 URLs no sitemap, robots e conteúdo público. Audit OpenSEO concluído em 25/11 BRT: [14 páginas](https://app.openseo.so/p/607c806e-4c84-4171-aa21-c4ef70012157/audit?auditId=659ecc0c-c20a-4dde-862c-27ec814a6803), todas HTTP 200; 0 críticos, 1 warning (/din_page órfã), 10 info (4 canonicals de parâmetros de origem corretos, 2 noindex legais intencionais, 3 títulos longos, 1 descrição comercial longa). Sem Lighthouse, crawl HTTP sem JS. Web textual não conseguiu ler diretamente sitemap/robots; smoke do runner anterior e crawl são evidências separadas.
- GSC via OpenSEO: consulta 22/08–22/11 por query e 26/10–22/11 por page, ambas sem linhas. Inspeção de 8 URLs em 25/11: home e /blog enviadas/indexadas, canônicas coerentes; último crawl 22/11 BRT e 16/11 BRT, respectivamente. Serviço, quatro artigos e /din_page desconhecidos do Google. Não há causa determinada nem prova de tráfego zero. Supermetrics sem autenticação continua como histórico de outra integração; OpenSEO conectado à propriedade sc-domain:techway.one com acesso owner.
- Próxima ação de indexação: Search Console > Sitemaps: conferir processamento de sitemap.xml e submeter se necessário; Inspeção de URL > Testar URL publicada > Solicitar indexação para serviço e quatro artigos; considerar home atualizada. API de inspeção disponível é somente leitura; fundador informou posteriormente ter realizado as solicitações pela interface. Reinspecionar em 7–14 dias (janela de acompanhamento proposta, não SLA); se persistir, conferir cobertura e linkagem, teste ao vivo, logs/canonical. Não pedir repetidamente. Google não garante indexação.
- /din_page: decidir DN005 antes de remover sitemap/noindex/redirecionar; manter rota e comportamento até aceite. Títulos não têm limite fixo do Google; revisão orientada por intenção, não contagem rígida.

## Pesquisa inicial de mercado
OpenSEO/DataForSEO, BR/pt, 25/11; lote de 25 termos, 20 retornados. Volume mensal estimado e KD de 0 a 100; 0 não é ausência de concorrência, — = indisponível. Não somar variantes; intenção automática frequentemente navegacional, revisar com SERP. Não foi retornado custo da chamada; não inferir zero. Dados: [projeto](https://app.openseo.so/p/607c806e-4c84-4171-aa21-c4ef70012157/keywords).

| Consulta | Volume | KD | Uso proposto |
|---|---:|---:|---|
| chatbot whatsapp | 5400 | 47 | comparação educativa, concorrência ampla |
| agenda inteligente | 1600 | 0 | termo ambíguo; não priorizar sozinho |
| automação whatsapp | 1600 | 10 | pilar contextualizado em atendimento |
| agenda para salão de beleza | 390 | 6 | vertical com prova operacional |
| atendimento automático whatsapp | 320 | 9 | pilar atendimento |
| sistema de agendamento online | 260 | 46 | comparação, não competir genericamente |
| agente de ia whatsapp | 210 | 24 | comparação / guia de solução |
| atendente virtual whatsapp | 110 | 0 | variante comercial/pilar |
| atendimento com ia | 110 | — | variante |
| agendamento whatsapp | 90 | 0 | pilar agenda |
| agendamento salão de beleza | 70 | 0 | intenção pode ser consumidor, distinguir B2B |
| chatbot whatsapp com ia | 70 | 28 | comparação |
| atendimento whatsapp ia | 40 | — | variante |
| ia para pequenas empresas | 40 | — | expansão P2 |
| atendimento humanizado whatsapp | 30 | — | atualizar artigo existente |
| secretária virtual whatsapp | 30 | — | variante de agenda |
| agendamento automático whatsapp | 10 | — | variante de agenda |
| quanto custa chatbot whatsapp | 10 | — | custo/retorno |
| agendamento online whatsapp | — | — | variante |
| como automatizar atendimento whatsapp | — | — | pilar |
| como automatizar agendamentos pelo whatsapp; funcionário digital; como organizar whatsapp empresa; como evitar perder clientes no whatsapp; chatbot ou agente de ia | não retornados | — | hipóteses, não volume zero |

Busca exploratória pública (não ranking formal): https://www.atendente.ai/ explica treinamento, canais e transferência; https://flowtic.com.br/ segmenta verticais/integrações; https://agendafacil.ai/ explica conexão, horários e serviços; https://www.belezaqui.com.br/ e https://avecsistemas.com/ focam gestão de beleza; https://usewello.com.br/ e https://agendaiabr.com/ mostram fluxo de agenda e nichos. São claims das páginas, não teste dos produtos. Diferenciação proposta: explicar operação real, configuração por empresa, agenda com duração e disponibilidade, diálogo com gestor, limites e provas autorizadas. Não competir por promessas não entregues.

## Mapa de URLs e links (v1)
IDs são referências internas; links bidirecionais com pilar onde relevantes. Não implementar links para páginas ainda não publicadas. Intenções e caminhos propostos sujeitos a revisão de SERP antes de redação; evitar duas páginas com a mesma intenção.

| ID | URL (relativa) | Intenção / termo e valor original | Links de saída planejados | Prioridade / estado |
|---|---|---|---|---|
| H | / | Marca / funcionários digitais; demonstração ilustrativa | S, B | existente/indexada |
| S | /atendimento-agendamentos-whatsapp | comercial / atendente IA + agenda; oferta real | H, A, G, V, C | existente/desconhecida GSC |
| B | /blog | hub editorial navegável | todos os artigos publicados | existente/indexada |
| E1 | /blog/atendimento-ia-alem-respostas-automaticas | atendimento resolutivo / humanização; revisar exemplo original | A, D, S | P1 atualizar; desconhecida |
| E2 | /blog/automacao-de-tarefas-repetitivas | tarefas repetitivas e produtividade | A, R, S | P2 atualizar; desconhecida |
| E3 | /blog/como-melhorar-sua-produtividade | produtividade do pequeno gestor; distinguir de E2 | R, E2 | P2 atualizar; desconhecida |
| E4 | /blog/cuidar-do-cliente-ou-do-negocio | sobrecarga e perda de oportunidades; dilema do empreendedor | A, E1, R, S | P1 atualizar; desconhecida |
| A | /blog/como-automatizar-atendimento-whatsapp | guia pilar informacional / automação whatsapp, atendimento automático; passos de implantação | S, D, E1, E4, F, G, R | P1 publicado; indexação pendente |
| G | /blog/agendamento-automatico-whatsapp | guia pilar / agendamento whatsapp, agenda inteligente contextual; consulta, confirmação, alteração e conflitos | S, A, V, O, C | P1 publicado; indexação pendente |
| D | /blog/chatbot-ou-agente-de-ia-whatsapp | comparação / chatbot whatsapp com IA, agente de IA whatsapp; regras vs execução e limites | A, E1, S | P1 preparado D/V |
| V | /blog/agenda-para-salao-de-beleza | guia B2B vertical; duração, profissionais, serviços, encaixes | G, S, O, C | P1 preparado D/V |
| F | /blog/como-treinar-ia-atendimento-empresa | implantação / dados de empresa, erros e transferência; checklist sem PII | A, D, S | P1 proposta |
| O | /blog/como-evitar-conflitos-agendamento | operacional / horários, serviços e remarcação; exemplos hipotéticos rotulados | G, V, S | P1 proposta |
| R | /blog/quanto-custa-automatizar-atendimento | comercial-investigação / custo, retorno; metodologia e premissas sem preço inventado | A, D, S, E2 | P2 proposta |
| C | /blog/caso-agendamento-salao-beleza | caso real / evidência autorizada; anonimizar se necessário | G, V, S | P2 bloqueado por evidência/autorização |
| I | /blog/ia-para-pequenas-empresas | guia de adoção, limites e decisões | A, G, D, R | P2 proposta |
| T | /blog/calculadora-retorno-automacao | utilitário; estimativa transparente de horas/valor | R, S | P2 proposta |

CTA: guias A/G/D/F/O explicam primeiro e direcionam à solução S; V/C a demonstração ou S; R/T a avaliação de implantação; E2/E3/E4 CTA editorial proporcional e origem preservada. Páginas comerciais e guias devem diferir: produto/implantação/demonstração vs passo a passo independente. Priorizar A e G em SERP e revisar se a intenção pede consolidação em S; não criar se redundante. Conteúdos sobre notificações, follow-up, cobrança, finanças, LGPD ou integrações só com escopo e evidência apropriados.

## Lotes e critérios de aceite
1. P0 (agora): GSC sitemap, cinco pedidos de indexação, checar DN005; revisar links HTML do blog e serviço. Aceite: pedidos/status reais registrados; sem atribuir ao site falha do coletor.
2. P1: briefs e SERP de A, G, D, V, F, O; ajustar E1/E4, titles/description; links contextuais com S e entre guias relevantes. Publicar em pequenos lotes, não os seis automaticamente. Aceite: intenção distinta, resposta útil, prova/fonte, autoria, CTA com origem, links existentes, build/export/SEO/contatos, sitemap e smoke. Não alterar slugs; sem CMS novo.
3. P2: R/I/T/C e E2/E3, só após sinais e autorização de dados. Caso real: coletar métricas agregadas, período, denominador, autorização; sem mensagens de clientes. Autoridade externa: parcerias e fontes legítimas, sem spam/links comprados.
4. Medição semanal proposta (não agendada): cobertura GSC das URLs, cliques/impressões/CTR/posição por consultas e páginas, não marca quando disponível; comparar 28 dias completos, considerar lag. Conversas recebidas, qualificadas e clientes em registro privado (clique ≠ lead). GEO: amostra reproduzível de prompts, engines, citações, sem tracker pago sem autorização. Se sem dados, reportar sem linhas. Sem prometer ranking.
5. Gate para cada release: seo-audit → seo-research → seo-topical-map → seo-content → seo-performance conforme necessário. Atualizar progresso, manter evidência e observar que main dispara deploy. Não chamar documentação de funcionalidade publicada.

## Referências
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/appearance/ai-features
