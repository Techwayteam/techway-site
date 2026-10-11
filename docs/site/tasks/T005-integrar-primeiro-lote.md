# T005 — integrar a série S01–S04 por artigo

Estado: **em execução — S01 integrada localmente, 1/4; sem deploy público**. Prioridade: P1. Responsável: Codex/implementação; revisor: técnico/editorial. Dependências: fonte reconciliada (T001), jornada T002, revisão T003 para os textos existentes alterados e aceite T004 do artigo a integrar. Não exige conclusão do lote inteiro de T004.

## Resultado

Quatro artigos S01–S04 no export ao fim da tarefa, preservando os três atuais e a jornada de contato. Integrar um de cada vez na ordem editorial conforme copy revisada; esta tarefa não cria um prazo de publicação.

## Trabalho e caminhos

Integrar textos revisados em `data/blogPosts.json`; adaptar os templates apenas ao necessário; usar assets reais em `public`. Validar links, datas, autoria, canonical, metadados e renderização. Sem filtro de status implementado, manter rascunhos fora do JSON.

Listagem deve dar destaque à ordem editorial/data verdadeira. Relacionados não podem apontar para artigos ainda não disponíveis. Se enriquecer seções com blocos/listas, migrar mantendo o conteúdo atual e checar leitura; não inserir Markdown cru em `section.text` esperando que o template o interprete.

Usar `editorial/serie-funcionarios-digitais.md` para slugs candidatos, direção visual e mapa de links. Na primeira integração, ligar o dilema a S01 quando ambos estiverem disponíveis; adicionar links aos seguintes somente quando os destinos existirem. Registrar por artigo se está integrado localmente ou publicado com URL verificada. Imagens geradas são ilustrações, com revisão, otimização, dimensões e texto alternativo.

## Aceite

- Cada integração preserva os 3 slugs anteriores e todos os novos já aceitos; ao fim, os 3 anteriores + S01–S04 existem no resultado.
- Metadados e conteúdo reais; assets e CTAs conferidos.
- Type-check, build e navegação afetada aprovados; limites de QA registrados.
- Nenhum rascunho ou publicação futura exportado por engano.
- Evidência e progresso atualizados; caso publicação esteja autorizada, URL/pipeline verificados.

Evidência de S01: `../evidence/2026-10-11-S01-integracao.md`. Fonte principal tem quatro artigos; três antigos preservados, com ligação adicional do dilema para S01. SEO por artigo e Open Graph adiantados; T006 completa sitemap/dados estruturados depois. S02–S04 ainda não integradas; a tarefa inteira segue aberta.
