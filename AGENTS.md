# Techway — instruções para agentes

## Objetivo e contexto

O site deve explicar os agentes de IA da Techway e gerar conversas comerciais com pequenos negócios que atendem pelo WhatsApp. Esse público foi confirmado pelo usuário em 10/10/2026. Blog é a primeira frente; home, SEO, medição e manutenção técnica seguem o roadmap.

## Retomada

Leia `docs/site/README.md`, `docs/site/00-guia-de-conducao.md`, `docs/site/09-decisoes.md` e `docs/site/10-progresso.md`. Verifique `git status --short` antes de editar. Use plano/tarefa com entrega e aceite; atualize progresso e evidência após execução. Instruções explícitas do usuário prevalecem sobre estes documentos.

## Preservação da fonte

- O baseline da auditoria tinha alterações do usuário em `pages/index.tsx` e dez assets não rastreados. Não apagá-los ou substituí-los sem entender o contexto.
- T001 foi concluída em 10/10/2026: main/origin em 78362aa, SHA do último deploy público success; três posts locais iguais aos online. Verificar origem novamente em retomadas futuras, sem tratar essa comparação como atualização permanente.
- Variante local de Early Access foi preservada com CTAs novos. Backup original de 45 arquivos em .local-backups, com manifesto de hashes. As cinco imagens WebP agora são rastreadas; os cinco PNG locais continuam preservados.
- Não renomear slugs publicados sem plano para manter caminhos existentes.
- `.next` contém artefatos versionados; builds podem modificar a pasta. Registrar estado anterior e restaurar apenas artefatos gerados pelo próprio trabalho. Não descartar mudanças do usuário nem usar reset/clean generalizados.

## Implementação

Next Pages Router com export estático e GitHub Pages. Fonte em pages/components/data/public; `out` e `.next` são artefatos. Não criar backend, SQL, CMS ou migração de hospedagem para uma tarefa que cabe no modelo atual. `sendEmailsSMTP.js` e chat legado não são captura funcional de leads.

No Windows, usar `npm.cmd` se npm.ps1 estiver bloqueado. Scripts existentes: type-check e build. Reproduzir o lockfile sem atualização incidental. Lucide já está em 0.526.0 após sincronização, e npm ci sem legacy-peer-deps passou. O pipeline ainda usa o workaround antigo; revisar em T014. Next continua 14.0.3 e requer plano de manutenção.

## Conteúdo e conversão

- Português brasileiro claro; situações concretas do pequeno empresário e convite ligado à dor.
- Não inventar capacidades, resultados, fontes, autores ou clientes. Identificar exemplos hipotéticos e validar afirmações variáveis em fontes atuais.
- Não mudar data apenas para aparentar atualização. Rascunhos ficam fora dos dados públicos até existir controle de status coerente.
- Clique em WhatsApp não equivale a lead. Não coletar dados sem destino real, usar console.log como entrega ou expor dados pessoais em analytics/documentos públicos.
- Revisão editorial e técnica são distintas. Build aprovado não confirma navegação, utilidade ou precisão comercial.

## Escopo, ferramentas e publicação

Respeitar a autorização da sessão e avançar sem perguntas repetidas sobre ações já autorizadas. Análise/estrutura não implica deploy. Push em main aciona publicação no workflow atual: considerar esse efeito antes de enviar mudanças. Publicação solicitada exige fonte reconciliada e resultado verificado; não criar aprovação conversacional extra por rotina.

Não enviar mensagens a terceiros, e-mails ou campanhas sem instrução explícita para envio. Não configurar recorrência apenas porque existe calendário sugerido. Papéis de agentes podem ser cumpridos sequencialmente; delegar apenas se a sessão pedir trabalho com subagentes/execução paralela. A documentação não instala runtime multiagente.

## Verificação e entrega

Aplicar `docs/site/07-validacao.md` conforme a mudança. Documentos exigem referências/estados coerentes; código e dados exigem verificações pertinentes. Registrar limites reais de browser, fontes e métricas. Finalizar com resultado, caminhos principais, validação e próximo passo concreto; não declarar tarefa concluída com aceites pendentes.
