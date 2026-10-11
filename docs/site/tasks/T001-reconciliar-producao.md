# T001 — reconciliar a fonte antes do deploy

Estado: **concluída em 10/10/2026**. Prioridade: P0. Responsável: coordenação/implementação. Dependências atendidas: origem consultada e último deploy público identificado.

## Resultado

Retomar a fonte do site sem apagar o terceiro artigo já publicado ou reverter mudanças existentes. O snapshot contém conteúdo público, não o repositório completo de produção.

## Trabalho

1. Registrar estado local e alterações preexistentes.
2. Identificar branch/commit/pipeline que produziu o site, por histórico e artefatos disponíveis. Não assumir que HEAD é produção.
3. Comparar home, header/footer, CTAs, metadados e os três artigos com a fonte local.
4. Recuperar/reconciliar o terceiro post e seus assets a partir da fonte correta; snapshot pode apoiar a recuperação.
5. Preservar as 71 linhas adicionais da home e os dez arquivos de imagem preexistentes até revisar seu destino.
6. Registrar decisões de divergência e inventário de URLs no handoff.

## Caminhos

Investigar fonte/CI e `evidence/2026-10-10-blog-publicado.json`. Escrita poderá envolver dados, componentes e home após comparação; não editar uma mudança do usuário sem entender o contexto.

## Aceite

- Os três slugs públicos estão preservados no conteúdo reconciliado.
- Fonte da publicação identificada, ou limitação explícita e comparação de conteúdo documentada.
- Diferenças da home resolvidas com motivo; alterações locais preservadas.
- Assets dos três artigos existem; diff não inclui caches gerados.
- Type-check/export validam o conteúdo reconciliado; publicação continua dependendo do escopo da execução.

## Resultado verificado

- Fetch mostrou 19 commits faltantes e nenhum exclusivo local. Fast-forward para 78362aa; main/origin agora 0/0.
- GitHub Pages registra deploy success do mesmo SHA; dados dos três posts locais são iguais aos públicos.
- Backup por hash de 45 arquivos; variante local de Early Access reaplicada com CTA novo, uma única seção. Cinco WebP idênticos à origem foram incorporados como rastreados; os cinco PNG originais foram preservados.
- Instalação sem legacy, type-check e build aprovados; export com 11 páginas e três artigos. Nenhum novo push/deploy.

Evidência: [reconciliação T001](../evidence/2026-10-10-T001-reconciliacao.md). A tarefa de sincronização está concluída; a variante local da home continua como alteração de trabalho intencional, ainda não publicada.
