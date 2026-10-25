# Mapa do repositório

Atualizado em **24/10/2026** após T006 local. Publicação verificada mais recente: `12fafc5a` (T003/layout T012); SEO ainda sem deploy.

| Caminho | Função atual | Atenção para implementação |
| --- | --- | --- |
| pages/index.tsx | Home/Early Access preservada | Canonical de raiz alinhado em T006 local; sem redesign |
| pages/blog/index.tsx | Listagem com getStaticProps | Ordem decrescente por data, Link/foco corrigidos; SEO compartilhado em T006 |
| pages/blog/[slug].tsx | Artigos com getStaticPaths/getStaticProps | Layout T012 publicado; canonical/social/BlogPosting compartilhados em T006 local |
| data/blogPosts.json | Conteúdo de quatro posts públicos | T003 e S01 publicados; dados não editados em T006; drafts ficam fora do JSON |
| data/site.json, lib/seo.ts, components/Seo.tsx | Domínio, configuração e metadados compartilhados | Blog e BlogPosting; sem datas/perfis de autor presumidos |
| scripts/generate-seo-files.cjs, scripts/verify-seo.cjs | Geração/verificação de sitemap, robots e SEO do HTML | postbuild automático; falha com posts inválidos/futuros/drafts no JSON público |
| data/contact.ts | Número e geração de URL WhatsApp | Compartilhado por landing, footer e botão global; demais consumidores ainda usam links existentes |
| components/Header.tsx | Menu fixo e navegação | QA teclado, nome acessível e altura/âncoras |
| components/Footer.tsx | Contato e links legais | WhatsApp ligado a data/contact.ts em T002 |
| components/Testimonials.tsx | Carrossel móvel atualizado e relatos | Largura total no celular, swipe, indicadores e giro 15s; falta revisão de pausa/foco e prova das métricas |
| components/WhatsAppButton.tsx | Contato flutuante global | Mensagem genérica; falta contexto do artigo/medição |
| components/ContactChat.tsx | Chat usado pela home antiga | Número corrigido; persistência e fluxo final ainda não funcionam |
| pages/index_old.tsx | Versão antiga publicada como rota | Não é backup privado; retirar/arquivar após decisão |
| pages/din_page.tsx | Landing por query variant | Default exportada em HTML; improvisation ainda depende de JavaScript; fallbacks e navegação testados |
| data/landingPages.ts | Conteúdo de duas variantes | Oferta anterior ampla; imagem com espaço no nome |
| types/PageData.ts | Contrato de variantes | Não é tipo central de blog |
| pages/privacidade.tsx, pages/termos.tsx | Páginas legais | Canonical/URLs sociais alinhados em T006, noindex preservado; práticas/textos ainda em T015 |
| pages/_app.tsx, styles/globals.css | Estilos globais e montagem do botão de WhatsApp | Tailwind sem typography; sem analytics identificado |
| public/ | Assets estáticos | Inclui imagens de S01 e cinco PNGs preservados/versionados pelo usuário; nenhuma troca em T006 |
| next.config.js | Export estático, imagens não otimizadas e webpack | loader SVG sem dependência direta; revisar em mudança própria |
| package.json, package-lock.json | Dependências e scripts sincronizados | Next antigo; lucide 0.526.0; instalação sem legacy aprovada |
| .github/workflows/nextjs.yml | Build/deploy para GitHub Pages | Push em main publica; Node 20 e npm install atuais |
| CNAME | Domínio techway.one | Preservar em publicação |
| sendEmailsSMTP.js | Script legado de e-mail | Desconectado, deps/dados ausentes; não executar |
| .next/ | Cache/artefatos de desenvolvimento rastreados | 917 arquivos versionados; tarefa de higiene necessária |
| out/ | Export/build e artefatos de desenvolvimento | Passou a ser versionado em 12fafc5a; preservar até T014. T006 validada em cópia isolada |
| docs/site/ | Base operacional desta entrega | Verdade sobre planos, progresso e evidência |
| AGENTS.md | Instruções de colaboração futuras | Abrir no início das sessões |
| .local-backups/ | Backups e auxiliares locais ignorados | Backup original preservado; T002 acrescenta baseline e verificador temporário do export/Chrome |

## Evolução

Contato WhatsApp existe em `data/contact.ts` desde T002. Configuração de domínio, componente de metadados, BlogPosting e sitemap/robots foram implementados em T006. CMS, tipo editorial único e controle completo de status continuam fora do escopo atual; o pós-build rejeita conteúdo não publicável no JSON público.
