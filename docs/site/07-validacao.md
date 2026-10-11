# Validação e critérios de entrega

## Baseline atual, após sincronização

Em 10/10/2026, `npm.cmd ci` (sem legacy), `npm.cmd run type-check` e `npm.cmd run build` passaram na base sincronizada em 78362aa. O build produziu **11 páginas estáticas**, incluindo os **3 posts**, e preservou a variante local de Early Access. Permanecem alertas de Browserslist antiga e falha de download de fonte durante otimização. Não se conclui que a navegação seja correta apenas porque o build passou.

Resultado atual: [reconciliação e validação pós-sync](evidence/2026-10-10-T001-reconciliacao.md). A [validação inicial](evidence/2026-10-10-validacao.md) documenta o checkout antigo e é histórica; suas contagens e versão antiga do lucide não descrevem a base atual.

Entrega posterior local: [T002 — blog, landing e contato](evidence/2026-10-10-T002-navegacao.md). Type-check/build aprovados e 65 verificações de export/Chrome, incluindo mobile e default sem JavaScript. Ainda sem publicação, validação comercial da copy ou teste de recebimento no WhatsApp.

## Conteúdo

- Público, intenção e promessa claros; resposta útil logo no início.
- Exemplo, checklist ou critério de decisão aplicável a um negócio pequeno.
- Exemplo fictício identificado; cliente/caso real com autorização e evidência.
- Dados, políticas e afirmações técnicas verificadas; nenhuma estatística inventada.
- Capacidades da Techway limitadas ao que está implementado ou descritas como possibilidade dependente de configuração.
- Autoria e datas reais; revisão substantiva separada da primeira publicação.
- Sem repetir a intenção principal de outro artigo sem motivo claro.

## Dados e export

- Slugs únicos e publicados preservados; existência das imagens e caminhos de CTA.
- Data válida, com formatação pt-BR estável em servidor e cliente.
- Drafts e posts futuros não entram em listagem, rotas, relacionados ou sitemap.
- `npm.cmd run type-check`; `npm.cmd run build` após mudanças de código/dados.
- Conferir HTML em `out/`, rotas dos artigos, título, canonical e metadados por página.
- Não tratar cache/artefato gerado como alteração de fonte; preservar baseline.

## Navegação e UX

- Blog → artigo → contato é testado no navegador quando disponível.
- Link sem âncoras aninhadas; teclado, foco visível e nome acessível das ações.
- Menu móvel abre/fecha; conteúdo não fica escondido pelo header fixo.
- Texto legível em telas de 360–390 px; imagens não quebram leitura; sem rolagem horizontal.
- Movimentos não são necessários para entender a página; controles e movimento reduzido considerados.
- Sem erros de hidratação; relacionados existem; slug desconhecido resulta em 404.

## SEO e medição

- URLs usam `https://techway.one` e convenção de barra consistente; investigar 404 atual em `/blog/`.
- Article/BlogPosting descreve conteúdo visível; datas e autoria são verdadeiras; validação estrutural não garante rich result.
- Sitemap contém somente URLs publicáveis; robots não bloqueia conteúdo pretendido.
- Não usar robots.txt para fingir que uma rota deixou de existir ou que foi removida do índice.
- Eventos de contato têm origem e posição; nenhum dado pessoal ou mensagem livre em analytics.
- Clique não é contabilizado como lead recebido; teste de entrega de formulário depende de endpoint real.

## Regressão e publicação

Comparar slugs públicos e export local, home, footer, termos e privacidade. Antes de push, considerar que o workflow atual publica automaticamente main. Se publicação estiver no pedido, verificar pipeline e URLs após concluir; se for entrega local, registrar essa condição.

Não enviar WhatsApp/e-mail para testar sem autorização de envio. Para destino externo, conferir estrutura e número, e usar confirmação operacional do responsável. Documentar verificação de abertura sem confundi-la com recebimento.

## Quanto testar

Publicação posterior de S01/T002: [T019](evidence/2026-10-11-T019-publicacao.md), em 11/10/2026. CI/Pages success e onze URLs públicas verificadas; quatro artigos e duas imagens iguais à fonte. Os resultados locais anteriores acima são históricos; não representam o estado completo depois dessa publicação.

Documentação: validar caminhos, referências, coerência de estados e preservação do diff original. Texto editorial: validar contrato, links e fatos. Templates e filtros: testes focados nas falhas reais (slug duplicado, asset ausente, draft exportado, CTA quebrado) quando o validador existir. Evitar testes que apenas repitam código ou adicionem custo sem verificar comportamento.
