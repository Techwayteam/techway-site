# T003 — evidência e mapa inicial do planejamento

Data: **11/10/2026 — America/Sao_Paulo**. Modalidade: leitura da fonte e planejamento documental; nenhuma revisão dos artigos implementada/publicada. [Plano detalhado](../plans/002-T003-revisao-editorial.md).

## Baseline e método

- HEAD local: `abb2fc0f1d4a8a8059594416210dd2ccd87ba79a`.
- `git status --short` inicial: `out/` e cinco PNGs não rastreados (`empreendedor_dilema_capa`, `empreendedor_sobrecarregado`, `funcionario_digital_explicacao`, `liberdade_empresario`, `whatsapp_versus_gestao`); nenhuma alteração rastreada inicial.
- Leitura integral dos três primeiros registros de `data/blogPosts.json`; S01 é o quarto registro. Hash SHA256 inicial do JSON: `AA4FEDB453A1C1B613A2BEA3D1BDB4B22BA9D2361E7BEC0ED9B98D2885126AFD`.
- Consulta dos contratos de T003, plano 001, estratégia/série, PRD/domínio, validação, progresso e decisões; inspeção de campos e relacionados no template, landing default e trecho de oferta/Early Access da home.
- Publicação anterior: [T019](2026-10-11-T019-publicacao.md), tratada como evidência histórica. Nenhuma revalidação remota da Techway nesta entrega.
- A ausência de uma fonte no registro editorial significa **alegação sem suporte registrado**, não prova de falsidade. A disponibilidade funcional depende de informação interna, não da presença de uma frase na home.

## Mapa inicial de afirmações

As localizações abaixo são campos/seções do JSON; continuam úteis se números de linha mudarem. Tratamentos ajustados à escolha de correção mínima e à oferta confirmada; a copy ainda não foi alterada. Prioridade A: fato/expectativa comercial; B: precisão e utilidade.

| ID | Artigo e localização | Trecho ou conteúdo atual | Diagnóstico | Tratamento proposto |
| --- | --- | --- | --- | --- |
| A01 | Produtividade / “Automatize Suas Tarefas Mais Repetitivas” | “imagine reduzir em 50%” junto a ferramentas Techway | Hipótese numérica sem método; associação pode sugerir resultado do produto | Retirar número e orientar observar tempo real; manter número só com contexto/evidência apropriados |
| A02 | Produtividade / mesma seção | Agendamento, e-mails periódicos e relatórios, seguidos da atribuição à Techway | Aplicações possíveis conforme demanda | Preservar exemplos, formulando implementação/configuração conforme necessidade, sem inventário obrigatório |
| B01 | Produtividade / mesma seção | Automação como necessidade | Generalização | Suavizar a frase sem acrescentar seção ou critérios novos |
| B02 | Produtividade / colaboração | Ferramentas “eliminam” reuniões e versões; fortalecem engajamento | Relação causal forte, dependente de processo/uso | Reformular benefícios possíveis pontualmente, preservando narrativa/exemplos |
| A03 | Produtividade / conclusão e CTA | Transformação de produtividade com soluções Techway | Promessa genérica e convite amplo | Conectar ao gargalo identificado e ao próximo passo comercial efetivo |
| A04 | Automação / “O Impacto das Tarefas Repetitivas no Seu Desempenho” | Estudos e redução de até 40% nos custos | Estatística sem estudo identificado no registro | Retirar; ou conferir fonte primária, população, período e aplicabilidade, sem convertê-la em resultado Techway |
| A05 | Automação / “As Soluções da TECHWAY para Automação” | “adaptar perfeitamente”, relatórios e aprovações | Compatibilidade universal implícita | Trocar absoluto por implantação personalizada; preservar aplicações como possibilidades conforme demanda |
| A06 | Automação / mesma seção | Economia de horas e melhoria de precisão | Resultado sem contexto observado | Apresentar como objetivo a avaliar, com responsável e acompanhamento |
| B03 | Automação / título, introdução e conclusão | Economia de tempo/dinheiro, inventário, resultado escalável | Benefício amplo | Preservar título/estrutura; suavizar resultados garantidos sem checklist novo |
| B04 | Dilema / introdução | Todos os empreendedores; perda de venda ao organizar o negócio | Universalização da dor | Usar situação reconhecível sem afirmar resultado inevitável |
| A07 | Dilema / “Existe solução sem contratar alguém?” | Alternativa à contratação; agentes que falam/respondem “como você” | Expectativa de substituição e fidelidade integral | Rever conforme apoio por demanda de D020 e personalização efetiva |
| A08 | Dilema / mesma seção | WhatsApp, inteligência, memória e personalização | Termos amplos | Formular personalização/contexto conforme configuração desenvolvida para o negócio, sem promessa universal |
| A09 | Dilema / conclusão | Atendimento automático e “follow-up inteligente e muito mais” | Aplicações apresentadas genericamente | Manter possibilidades personalizadas conforme necessidade, sem exigir inventário de módulos |
| B05 | Dilema / “Você não precisa dar conta de tudo sozinho” | Liberdade, escala e grande diferença ao automatizar | Resultado genérico apresentado com alta certeza | Relacionar uma tarefa escolhida a acompanhamento, sem garantir resultado |
| A10 | Todos / CTA e destino | Dois CTAs para landing default; dilema para home | Oferta personalizada e Early Access coexistem, conforme resposta | Preservar destinos e ajustar convites; coexistência não é conflito por si só |
| B06 | Dilema / `related` | Ligação para S01 já existente | Continuidade já implementada | Preservar e verificar; não registrar sua criação como nova entrega de T003 |

Observações: “5 profissionais em 1” e “depende 100% de você” aparecem como linguagem figurativa da sobrecarga, não como resultados medidos. Podem ser suavizados por clareza, mas não devem ser tratados como estudos estatísticos. Os 50% são uma hipótese no texto; os 40% são atribuídos a estudos. A revisão distingue esses usos.

## Referência externa consultada

[Google Search Central — conteúdo útil e confiável](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), consultada em 11/10/2026: usada para apoiar a avaliação de utilidade ao público, precisão, autoria transparente e datas honestas. Não sustenta percentuais, recursos da Techway nem promessa de ranking. A recomendação de definir uma ação prática por artigo é a proposta de produto deste plano.

## Respostas recebidas e alteração de escopo

Após o planejamento inicial, o usuário respondeu:

- Profundidade: **“Correção mínima de afirmações e CTAs”**. Registrada em D022; substitui a proposta de reestruturação.
- Oferta: **“Os três são verdadeiros hoje”**, referindo-se a solução disponível, implantação personalizada e Early Access. Informou que necessidades novas podem ser implementadas com rapidez e que Early Access é um discurso comercial favorável. Registrada em D023.

Consequências: manter estrutura, títulos, exemplos e imagens; não exigir checklist novo, nova data no template nem matriz de disponibilidade como pré-condição. Aplicações podem ser apresentadas como possibilidades de implementação personalizada. Não foi definido prazo numérico nem confirmado que toda integração citada esteja pronta para qualquer negócio.

P01/P02 definidos; P03 retirado como pré-condição; P04 será redigido por Codex conforme direção da oferta, preservando destinos. [Registro de decisões](../09-decisoes.md). Não há nova decisão do fundador necessária para concluir este planejamento.

## Verificação documental

- `node docs/site/evidence/verificar-docs.cjs`: **60 referências locais, nenhuma ausente**, após incorporar as respostas e a referência ao registro de decisões (59 na versão inicial).
- `git diff --check`: aprovado; Git apenas informou normalização futura LF/CRLF dos documentos.
- Diff rastreado inicial restrito a sete documentos; a atualização das respostas acrescenta o registro de decisões. Dois documentos novos são o plano e esta evidência. Nenhum arquivo da aplicação alterado. O hash de `data/blogPosts.json` permaneceu idêntico ao baseline.
- `out/` e os cinco PNGs preexistentes continuam não rastreados e foram preservados; nenhum build executado nem alteração em `.next`/lockfile.
- Estados após respostas: planejamento atualizado; T003 planejada com escopo mínimo definido; S01 publicada historicamente; S02–S04 aguardam copy. D022/D023 registram escolhas efetivas; texto final dos CTAs ainda será elaborado.

Type-check/build não se aplicam à entrega documental sem alteração de código/dados; entram após integração editorial futura. T003 permanece planejada.
