# Plano 005 — da clareza da oferta ao primeiro cliente

Estado: **T007/T010/T021 publicadas; T022 é a próxima frente P0 (plano 006)**. Fichas: T007, T010,
T011, T015, T020–T023. Decisões pertinentes: D001, D009, D023, D027, D029, D030 e D031.

Fonte do estado: `../10-progresso.md`. Definições do fundador:
`../13-definicoes-necessarias.md`. Reconciliação do dossiê:
`../evidence/2026-10-26-dossie-conversao.md`.

## Resultado e mudança mínima

Transformar o site em uma jornada comercial coerente para pequenos negócios que
atendem pelo WhatsApp:

`visita aderente → oferta compreendida → exemplo/limites → conversa recebida → lead qualificado → proposta → cliente`

A menor mudança útil não é um redesign completo. É publicar a atribuição já pronta,
confirmar somente as promessas usadas na venda, reescrever a home com uma tarefa
demonstrável, alinhar os quatro CTAs editoriais e operar o funil em planilha privada.

O objetivo de negócio é conquistar o primeiro lead e o primeiro cliente. Esses
eventos não são critérios que o código possa garantir. O aceite controlável é uma
página clara, confiável, testada, publicada e conectada a uma operação comercial que
reconhece cada etapa real.

## Dependências, riscos e limites

- DN001–DN003 foram resolvidas em D031. A implementação deve preservar os estados
  confirmados: follow-up indisponível, agendamento em desenvolvimento e impacto de
  80% tratado como percepção.
- Push em `main` publica. Cada onda precisa reconciliar `origin/main`, o commit local
  T007 e os artefatos versionados antes de enviar.
- Preservar slugs, canonical, sitemap, BlogPosting, assets e a rota `/din_page` até
  decisão. Não refazer T006/T007 nem instalar GA4 por duplicação.
- Métricas, relatos e capacidades sem evidência devem ser removidos ou condicionados;
  não desenvolver produto apenas para sustentar uma frase da página.
- Dados de leads permanecem privados. Documentos recebem somente processo, contagem e
  aprendizado anonimizado.
- Tráfego não acontece por consequência automática do redesign. T023 requer canal e
  autorização de contato; nenhum envio está autorizado por este plano.
- Não inclui CMS, CRM novo, chatbot na home, calculadora de ROI, páginas para todos os
  módulos, campanha automatizada ou atualização ampla da stack.

## Execução e retomada

| Onda | Fichas | Entrega demonstrável | Estado/próximo passo |
| --- | --- | --- | --- |
| 0 — medir o que chega | T007 | Atribuição publicada, planilha privada importada e processo pronto para conversa real | Atribuição publicada e verificada; importar a planilha privada e operar contatos reais |
| 1 — esclarecer e converter | T020, T010, T021 | Oferta mínima registrada; hero, exemplo, prova limpa e quatro jornadas editoriais coerentes | Concluída: T021 validada e publicada em 12/11; [evidência](../evidence/2026-11-12-T021-validacao-merge-deploy.md) |
| 2 — testar entendimento | T022 | 5–8 avaliações qualitativas; ambiguidades priorizadas; funil operado | [Plano 006](006-T022-validacao-compreensao-e-funil.md) preparado; entrevistas/planilha ainda pendentes; convites exigem autorização |
| 3 — gerar demanda e confiança | T011, T023 | Um caso autorizado e uma rodada pequena de aquisição rastreável | Depende de consentimento, base publicada e DN007; sem envio automático |
| 4 — aprofundar após evidência | T015 e futura página de solução | FAQ/legal coerentes; página própria somente se oferta e objeções estabilizarem | P1/P2; não bloqueia a primeira versão |

T004/T005 deixam de comandar a fila. S02–S04 permanecem preservadas e podem avançar
quando a copy chegar, mas publicação editorial passa a responder a uma objeção ou
intenção observada. Um artigo útil não substitui demonstração, prova, operação do lead
ou aquisição.

## Prioridade orientada ao funil

1. **Não perder o contato:** colocar T007 em produção e operar o registro privado.
2. **Ser entendido:** oferta publicável, hero explícito e exemplo acessível.
3. **Ser confiável:** retirar números/cartão fictício e usar prova autorizada.
4. **Manter contexto:** artigo, home e WhatsApp contam a mesma história e preservam
   origem suficiente para aprendizado.
5. **Aprender com pessoas reais:** compreensão, conversas, qualificação e objeções.
6. **Levar tráfego aderente:** um canal autorizado por vez.
7. **Aprofundar o ativo:** caso, FAQ, página de solução e conteúdo guiado por demanda.

## Validação e resultado

Por onda, aplicar `../07-validacao.md`. O conjunto exige:

- `npm.cmd run type-check`, build/pós-build isolado quando necessário,
  `verify-seo` e `verify-contacts`;
- um H1, `lang="pt-BR"`, canonical/metadados preservados, links/âncoras válidos e
  ausência de promessa sem evidência;
- teclado, foco, menu, flutuante e layout em 360, 390, 768 e desktop;
- conferência dos quatro artigos e da passagem de origem até o WhatsApp, sem envio;
- revisão comercial distinta da aprovação técnica;
- depois da publicação, workflow, URLs e CTAs públicos verificados;
- em T022/T023, dados privados fora do Git e eventos comerciais registrados apenas
  quando realmente ocorrerem.

Indicadores de aprendizagem: avaliações que identificam corretamente tarefa/canal,
conversas recebidas por origem, leads qualificados, demonstrações, propostas, motivos
de perda e `customer_won`. Sempre mostrar contagens absolutas. Sem baseline, não há
meta percentual defensável nem promessa de prazo para o primeiro cliente.

## Publicação e recuperação

A onda 0 pode ser publicada separadamente porque T007 já está validada. A onda 1 deve
ser uma unidade revisável para evitar hero, exemplo e CTAs contando histórias
incompatíveis. Antes do push, conferir branch/origem, diff, definições e artefatos
preexistentes. Depois, verificar pipeline, home, quatro artigos, landing preservada,
legais, sitemap/robots e links WhatsApp.

Em falha, retornar pelo commit anterior identificado e por diff restrito à onda; não
usar reset/clean geral nem apagar assets/artigos. `/din_page` continua disponível
enquanto DN005 estiver aberta.

## Fechamento

O plano termina quando a base de conversão estiver publicada e operável, a oferta
tiver sido compreendida por pessoas reais, a Techway tiver executado ao menos uma
rodada autorizada de aquisição e o funil registrar os resultados até ganho/perda.
Primeiro lead e primeiro cliente são marcos de negócio registrados no progresso, não
declarações antecipadas de conclusão técnica.
