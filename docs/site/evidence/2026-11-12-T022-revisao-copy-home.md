# T022 — proposta de copy da home para discussão e revisão comercial

Estado: **implementada em PR isolado, sem merge ou publicação** (12/11/2026).
Branch: `feat/t022-copy-home-dor-atendimento`.

## Direção de negócio acordada

- **Começar pela dor**, não pelos recursos técnicos: o empreendedor não consegue interromper o trabalho para responder cada mensagem.
- **Vender o primeiro funcionário digital que existe hoje:** atendimento com IA no WhatsApp, dúvidas frequentes, coleta inicial, contexto e passagem para uma pessoa.
- **Demonstrar no contexto de um salão**, como exemplo fictício, mantendo transparência.
- **Mostrar a Techway como uma visão de equipe digital**, mas sem anunciar futuros módulos como disponíveis nesta oferta.
- **Convidar a uma conversa comercial** pelo WhatsApp, mantendo os mesmos componentes e marcadores da T007/T021.

## Mudanças de copy propostas

| Parte da home | Antes | Proposta |
| --- | --- | --- |
| Título principal | “Seus clientes recebem resposta. Você mantém o controle.” | “Você cuida do seu negócio. A Techway ajuda a cuidar do seu atendimento.” |
| Dor | “Menos interrupção para você. Mais continuidade para o cliente.” | “Seu WhatsApp chama. Você nem sempre pode parar para responder.” |
| Exemplo | “Uma dúvida simples não precisa esperar você parar tudo.” | “Imagine seu salão atendendo mensagens enquanto você atende uma cliente.” |
| Implantação | “Começamos pequeno, testamos e evoluímos com o negócio.” | “Começamos pelo atendimento que mais toma o seu tempo.” |
| Visão | Não havia seção específica | “O atendimento é só o começo.”, com distinção explícita entre oferta atual e futuro |
| CTA principal | “Conversar sobre meu atendimento” | “Quero melhorar meu atendimento” |

## Regras e limites

- Não alterar layout geral, dados de contato, comportamento dos links, códigos de CTA, origem editorial, slugs ou SEO dos artigos.
- Manter a seção de capacidades honestas: agendamento **em desenvolvimento**, follow-up **fora da oferta atual**, exemplos identificados como fictícios.
- Não publicar sem revisão da copy e confirmação técnica. O plano amplo anterior da T022 ([PR #20](https://github.com/Techwayteam/techway-site/pull/20)) foi **simplificado nesta conversa**: nesta primeira rodada, T022 prioriza copy da home como apoio à prospecção, sem exigir 5–8 entrevistas formais como pré-condição para iniciar a abordagem comercial.
- O funil privado T007 e eventuais aprendizados de vendas reais podem ser tratados em seguida, sem atrasar a prospecção nem criar novos sistemas.

## Aceite proposto para esta rodada

- [ ] Copy revisada/aceita pelo fundador.
- [ ] Build, TypeScript, export/SEO/CTAs e jornada no navegador aprovados.
- [ ] PR revisado. Merge/deploy somente após solicitação explícita do fundador.

**Sem mensagens enviadas, leads criados, entrevistas conduzidas, merge ou deploy nesta implementação.**

## Evolução gráfica aprovada para implementação — 13/11/2026

Após o debate visual e as prévias 3D, a direção foi definida como **minimalista, predominantemente azul Techway, humana sem fotografias e sem nicho dominante**. Preserva a oferta atual e não apresenta outros módulos como produtos disponíveis.

Implementado nesta mesma PR:
- Header claro e CTA contextual no WhatsApp; marca azul e título escuro na home.
- Hero com superfície branca/azul suave, personagem humano 3D e assistente 3D (assets AVIF locais, leves), duas mensagens demonstrativas como texto HTML e movimento sutil; `prefers-reduced-motion` desliga as animações.
- Seções de solução, exemplo, implantação, transparência, depoimentos, Early Access e contato com superfícies claras, contornos suaves e contraste consistente.
- Visão de evolução da Techway em módulos, distinguindo o atendimento disponível de áreas apresentadas **somente como visão futura**.
- Demonstração textual genérica (Empresa Exemplo), evitando a associação obrigatória a salão.
- Origem de contatos T007/T021 preservada; único CTA novo `cabecalho` usa os mesmos marcadores de origem.
- Ilustrações extraídas de material 3D de referência gerado para a Techway; não representam pessoas reais. A interface e as mensagens ficam no HTML, não embutidas na imagem.

## Evidência técnica — 13/11/2026

[CI da PR #21 — run 43361884168](https://github.com/Techwayteam/techway-site/actions/runs/43361884168) em **success**, sem deploy:
- `npm ci`, type-check, build/export, SEO e script de copy/limites aprovados.
- Export de 9 páginas, 4 BlogPosting, 7 URLs no sitemap e **32 CTAs com origem/posição**.
- Jornada browser Chromium: 4 artigos, menu, 4 aberturas simuladas do WhatsApp (sem mensagens), 3 acessos diretos/origem inválida e 32 links principais verificados.
- Screenshots reais do Next.js em Chromium a **1440×900, 768×900 e 390×844**, sem overflow horizontal, 2 imagens 3D carregadas e H1 único: [artefato do workflow](https://github.com/Techwayteam/techway-site/actions/runs/43361884168/artifacts/14008452056) (retido por 14 dias).
- Avisos anteriores de dependências (11 reportados pelo npm) continuam para análise separada em T008/T014.

## Limites de aceite

**Ainda pendente:** revisão estética e comercial final pelo fundador, eventual ajuste fino de contraste, hierarquia e qualidade de recorte da ilustração em dispositivo físico. Não houve merge, deploy, mensagem real, proposta comercial nem entrevista. O plano formal antigo da T022 no PR #20 permanece à espera de reconciliação com a simplificação acordada. A PR #21 é a implementação visual/copy atual.
