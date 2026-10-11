# Ferramentas e uso autorizado

## Disponível neste projeto

| Ferramenta | Uso | Limite |
| --- | --- | --- |
| rg / leitura local | Investigar código, dados e instruções | Não expor credenciais ou dados pessoais |
| Git | Conferir estado, histórico e diff | Preservar alterações preexistentes; não publicar como efeito colateral |
| Node/npm | Instalar dependências travadas, checar tipos e gerar export | Windows usa npm.cmd quando npm.ps1 é bloqueado |
| HTTP público | Conferir rotas, HTML e metadados | Sem enviar formulário ou mensagem de teste |
| Fontes oficiais | Validar fatos técnicos e políticas citadas | Registrar URL/data; checar fatos que mudam |
| GitHub Actions/Pages | Pipeline descrito em .github/workflows/nextjs.yml | Push em main aciona publicação; considerar esse efeito antes de enviar |

Comandos atuais: `npm.cmd ci`, `npm.cmd run type-check`, `npm.cmd run build`. Após sincronizar a origem, lucide-react passou a 0.526.0 e a instalação do lockfile **sem legacy-peer-deps** concluiu com sucesso. O workflow ainda usa npm install --legacy-peer-deps; sua atualização cabe em T014. A flag foi necessária para reproduzir a base antiga, não para instalar a atual.

A instalação da reanálise usou `--ignore-scripts --no-audit --no-fund` e cache temporário. Package/lockfile foram atualizados pelo fast-forward da origem, sem edição adicional de dependências. Base atual: HEAD/origin/main 78362aa.

No build, Next utilizou `.next` para os intermediários e `out` para o export. Há 917 arquivos rastreados em `.next`: registrar baseline antes de rodar comandos e não misturar caches com mudanças de fonte. O plano de higiene deve avaliar ignorar `.next/`, `out/`, `*.tsbuildinfo` e `.env*`, preservando um `.env.example` sem segredos se houver necessidade.

## Ainda não conectado

Search Console, analytics, CRM, publicação em redes sociais e automações de WhatsApp/e-mail não foram acessados. Recomendar o resultado necessário antes de escolher uma ferramenta. O início do blog cabe em JSON + Git; não precisa de CMS agora.

`sendEmailsSMTP.js` é legado: depende de dotenv/nodemailer e `data/leads.json`, ausentes no contrato instalado. Não está ligado ao site nem ao workflow e não foi executado. Não usar como captura de lead ou assumir que o site envia e-mails.

## Relação com a hospedagem

Manter a hospedagem atual durante a primeira frente. Sites ou outro provedor só entram se o usuário pedir migração/publicação por esse caminho. Um webhook de CRM precisará de serviço seguro externo ou backend separado; GitHub Pages não recebe código servidor deste site estático. Segredos não podem ser embutidos no bundle público.

## Agentes e ferramentas

As funções de agente deste pacote podem ser executadas sequencialmente por um agente. Se houver pedido explícito para delegar, atribuir tarefas independentes, arquivos de escrita e revisão. Não há scheduler, ferramenta SEO licenciada, serviço multiagente ou disparo automático instalado por criar estes documentos.
