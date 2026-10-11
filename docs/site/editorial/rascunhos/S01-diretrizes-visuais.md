# Techway Blog — Diretrizes visuais do artigo 01

**Artigo:** Seu cliente não quer uma resposta automática. Ele quer resolver o problema.

## Direção de arte

Produzir uma experiência editorial premium, contemporânea e acessível, respeitando a identidade visual existente da Techway.

- Paleta predominante: branco, azul-escuro e azul-claro.
- Fotografia realista, humana e com iluminação natural/cinematográfica.
- Retratar pequenos negócios brasileiros de forma autêntica, sem ambientes corporativos grandiosos.
- Preferir composições elegantes, realistas e minimalistas.
- Evitar robôs humanoides, hologramas, cérebros digitais e outros clichês visuais de IA.
- Não inserir títulos ou textos dentro das fotografias.
- Manter harmonia visual entre todas as imagens.

## Imagem 01 — Capa

**Arquivo sugerido:** `atendimento-ia-capa.webp`

**Formato:** 16:9, preferencialmente 1600 × 900 px.

**Conceito:** O atendimento que acompanha o empreendedor até fora do expediente.

**Prompt para geração:**

> Fotografia editorial premium, horizontal 16:9, de uma pequena empreendedora brasileira no fim do expediente em seu salão de beleza. Ela está sentada junto à recepção, observando uma mensagem no smartphone, com agenda de compromissos e alguns materiais de trabalho sobre a bancada. Ambiente autêntico, elegante e acolhedor, iluminação quente de fim de tarde/noite combinada com sombras suaves em azul profundo, estética contemporânea de fotografia de revista de negócios. Expressão levemente cansada e pensativa, sem exagero dramático. Composição equilibrada com a personagem preferencialmente à direita e espaço negativo à esquerda. Realismo fotográfico, aparência natural, sem texto, sem logos, sem robôs e sem hologramas.

**Alt text:** Empreendedora consultando mensagens no celular após o expediente em seu salão.

**Inserção:** abaixo do título, subtítulo e metadados do artigo; usar também como imagem principal do card no blog e Open Graph.

## Elemento 02 — Comparativo visual

**Título:** Responder é diferente de resolver.

**Inserção:** imediatamente após a seção "Responder rápido já não é suficiente".

Criar um comparativo responsivo com dois painéis de mensagens, utilizando os componentes e estilos existentes do site.

**Painel A — Resposta automática**
- Cliente: "Tem horário amanhã à tarde?"
- Empresa: "Atendemos das 9h às 18h. Retornaremos em breve."
- Resultado: "Cliente ainda espera."

**Painel B — Atendimento inteligente**
- Cliente: "Tem horário amanhã à tarde?"
- Agente: "Tenho 14h ou 16h. Qual prefere?"
- Cliente: "16h, por favor."
- Agente: "Perfeito! Agendamento confirmado para amanhã às 16h."
- Resultado: "Pedido resolvido."

Destacar o primeiro resultado de forma neutra e o segundo com azul-claro e ícone de confirmação.

Adicionar a legenda "Exemplo ilustrativo de um atendimento conectado à agenda da empresa".

**Importante:** implementar preferencialmente em HTML/CSS, sem gerar imagem rasterizada. O conteúdo precisa ser legível, acessível e responsivo. Em dispositivos móveis, empilhar os painéis verticalmente.

## Imagem 03 — Atendimento humano

**Arquivo sugerido:** `atendimento-humano-techway.webp`

**Formato:** 3:2, preferencialmente 1200 × 800 px.

**Conceito:** A tecnologia cuida das tarefas repetitivas para que as pessoas cuidem das relações.

**Prompt para geração:**

> Fotografia editorial realista, horizontal 3:2, de uma pequena empreendedora brasileira atendendo presencialmente uma cliente em uma loja independente, com atenção, simpatia e contato humano genuíno. Ambiente comercial contemporâneo, acolhedor e acessível, com produtos e detalhes reais do pequeno varejo. Luz natural suave, tons neutros com pequenos elementos azulados, composição sofisticada porém espontânea, aparência de fotografia documental premium. Mostrar a proprietária concentrada na cliente, sem poses artificiais ou sorriso exagerado. Valorizar conexão humana e confiança. Sem robôs, sem telas holográficas, sem textos, sem logotipos.

**Alt text:** Proprietária de pequeno negócio atendendo pessoalmente uma cliente.

**Inserção:** na seção "Mas isso significa deixar o atendimento humano de lado?", preferencialmente após os primeiros parágrafos.

**Legenda opcional:** "Automatizar tarefas também pode significar ter mais tempo para as pessoas."

## Requisitos para implementação

1. Reutilizar a estrutura, os componentes e o mecanismo de publicação de artigos já existentes no projeto.
2. Não modificar a copy aprovada além de pequenos ajustes necessários para integrar as imagens.
3. Seguir as convenções existentes de armazenamento de imagens e metadados.
4. Usar imagens locais e otimizadas, preferencialmente WebP ou AVIF.
5. Manter proporções responsivas, evitando cortes inadequados dos rostos e dos elementos principais.
6. Reservar dimensões para evitar mudanças de layout durante o carregamento.
7. Priorizar a imagem de capa no carregamento; aplicar lazy loading às imagens abaixo da primeira dobra.
8. Garantir textos alternativos adequados e associação das legendas aos elementos visuais.
9. Configurar a imagem de capa no Open Graph para prévia de compartilhamento no WhatsApp e em redes sociais.
10. Não usar placeholders genéricos, fotos de banco aleatórias ou URLs externas instáveis na versão publicada.
11. Se não houver recurso disponível para gerar as fotografias, não simular que foram criadas: registrar os arquivos pendentes para posterior inclusão.
12. Antes de implementar, verificar o que já existe e reutilizar componentes, funções e convenções do repositório, evitando duplicações.

**Critério de aceite:** o artigo deve parecer uma publicação editorial da Techway, com identidade visual coerente, leitura confortável no celular e elementos visuais que contribuam diretamente para a compreensão do conteúdo.