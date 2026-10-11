# Evidência de validação — 10/10/2026

**Registro histórico do checkout anterior à sincronização.** Para a base atual 78362aa, com três artigos e lucide 0.526.0, consultar [T001 — reconciliação e validação atual](2026-10-10-T001-reconciliacao.md). Não usar as contagens/versões deste registro como pendências atuais.

Ambiente: Windows/PowerShell, Node 22.17.1. Checkout `main`, HEAD `49f27f5`. Baseline inicial: alteração em `pages/index.tsx` (71 adições) e dez imagens não rastreadas. Sem outras alterações iniciais reportadas pelo Git.

## Instalação

`npm` foi bloqueado pela política de execução de npm.ps1; usou-se `npm.cmd`. A tentativa de rede no sandbox falhou com EACCES ao consultar registry.npmjs.org. Reexecução autorizada fora da restrição:

```text
npm.cmd ci --legacy-peer-deps --ignore-scripts --no-audit --no-fund --cache <TEMP>/techway-npm-cache
added 148 packages in 35s
exit 0
```

`legacy-peer-deps` reproduz a abordagem do workflow. A versão lucide-react 0.32.0 declara peers antigos em relação ao React 18. Nenhuma dependência foi atualizada; package.json e package-lock.json permanecem sem diff. Não foi realizado npm audit; esta auditoria não apresenta inventário completo de CVEs.

## Tipos e build

```text
npm.cmd run type-check
tsc --noEmit
exit 0

NEXT_TELEMETRY_DISABLED=1
npm.cmd run build
next build — Next.js 14.0.3
Compiled successfully
Generating static pages (10/10)
exit 0
```

O build incluiu `/`, `/404`, `/blog`, dois artigos, `/din_page`, `/index_old`, `/privacidade` e `/termos`, além da infraestrutura do Next. Saída reportada: First Load JS da home 92,8 kB; blog 87,7 kB; artigo 87,8 kB. Esses números são do bundle calculado pelo build, não uma medida de tempo de carregamento em rede real.

Alertas: falha em baixar stylesheet da fonte Inter durante otimização e base Browserslist/caniuse-lite antiga. O build concluiu apesar desses alertas. Não se presume que a fonte/experiência visual tenha sido verificada.

## Inspeção do HTML exportado

Método: leitura local do HTML e regex `<a\b[^>]*>\s*<a\b`.

| Arquivo | Âncoras aninhadas | canonical | JSON-LD | Loading inicial |
| --- | --- | --- | --- | --- |
| out/blog.html | 2 | ausente | ausente | não |
| out/blog/como-melhorar-sua-produtividade.html | 1 | ausente | ausente | não |
| out/blog/automacao-de-tarefas-repetitivas.html | 1 | ausente | ausente | não |
| out/din_page.html | 0 | ausente | ausente | sim |

O resultado comprova HTML inadequado nos links mesmo com build aprovado. Não foi executado teste de hidratação em navegador. O export teve 62 arquivos, somando cerca de 25,6 MB, incluindo assets; não significa que cada visita baixe todo esse volume.

## Publicação e divergência

HTTP externo confirmou 3 posts publicados e CTAs antigos em 404. Dados públicos de __NEXT_DATA__ foram salvos em `2026-10-10-blog-publicado.json`, com buildId `89RjEaJV_aBsC8awKlEtK`. A rota do terceiro post responde 200. Dados locais continuam com 2 artigos; recuperação e reconciliação serão feitas em T001.

## Preservação do workspace

O build modificou caches em `.next`, que possui 917 arquivos rastreados. O estado inicial dessa pasta era limpo. Somente os artefatos criados/modificados pela validação foram removidos/restaurados: 64 novos arquivos em `.next`, export `out` e tsconfig.tsbuildinfo gerado. A restauração de `.next` exigiu acesso autorizado ao index.lock da pasta .git protegida. A home e os dez assets preexistentes foram preservados.

## Limites

Sem teste visual/móvel, execução remota do CI, envio ao WhatsApp, inspeção de CRM ou acesso a Search Console. Nenhum commit, push ou deploy. A documentação não instala agentes persistentes, automação de produção ou captura de lead.

## Conferência da documentação

O pacote tem 33 arquivos em docs/site (31 Markdown e 2 JSON), além de AGENTS.md. Os links Markdown locais foram conferidos sem destinos ausentes, e os dois JSON foram parseados com sucesso. O snapshot contém 3 posts e a evidência HTTP contém 14 consultas.

`git diff --check` identificou whitespace em `pages/index.tsx:284`, parte da alteração preexistente do usuário; não foi corrigido como efeito colateral da documentação. A nova documentação foi conferida separadamente. O diff da home continua com 71 adições, e configuração/dependências não têm alteração. `.next` voltou a ficar sem diff.
