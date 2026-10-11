# Mapa do repositório

| Caminho | Função atual | Atenção para implementação |
| --- | --- | --- |
| pages/index.tsx | Home sincronizada com variante local preservada | Apenas a seção Early Access difere da origem; CTAs novos mantidos |
| pages/blog/index.tsx | Listagem com getStaticProps | Link/foco corrigidos localmente em T002; tipos locais, ordem original do array |
| pages/blog/[slug].tsx | Artigos com getStaticPaths/getStaticProps | Link/foco corrigidos em T002; sem canonical/schema, estilos prose não instalados |
| data/blogPosts.json | Conteúdo de três posts preservados | T002 altera apenas destinos de dois CTAs para a landing default; ainda sem deploy |
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
| pages/privacidade.tsx, pages/termos.tsx | Páginas legais | URLs sociais e afirmações operacionais a alinhar |
| pages/_app.tsx, styles/globals.css | Estilos globais e montagem do botão de WhatsApp | Tailwind sem typography; sem analytics identificado |
| public/ | Assets estáticos | 31 arquivos/~25 MB; 5 WebP recuperados/rastreados e 5 PNG locais preservados |
| next.config.js | Export estático, imagens não otimizadas e webpack | loader SVG sem dependência direta; revisar em mudança própria |
| package.json, package-lock.json | Dependências e scripts sincronizados | Next antigo; lucide 0.526.0; instalação sem legacy aprovada |
| .github/workflows/nextjs.yml | Build/deploy para GitHub Pages | Push em main publica; Node 20 e npm install atuais |
| CNAME | Domínio techway.one | Preservar em publicação |
| sendEmailsSMTP.js | Script legado de e-mail | Desconectado, deps/dados ausentes; não executar |
| .next/ | Cache/artefatos de desenvolvimento rastreados | 917 arquivos versionados; tarefa de higiene necessária |
| out/ | Export gerado durante build | Não editar como fonte; artefato local da auditoria foi removido |
| docs/site/ | Base operacional desta entrega | Verdade sobre planos, progresso e evidência |
| AGENTS.md | Instruções de colaboração futuras | Abrir no início das sessões |
| .local-backups/ | Backups e auxiliares locais ignorados | Backup original preservado; T002 acrescenta baseline e verificador temporário do export/Chrome |

## Possíveis arquivos novos na implementação

Contato WhatsApp já existe em `data/contact.ts`, introduzido por T002. Configuração de domínio, tipo/validador editorial, componente de metadados e gerador de sitemap seguem como possíveis módulos futuros, especialmente T006; ainda não estão implementados.
