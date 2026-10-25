# T007 — atribuir contatos e confirmar leads recebidos

Estado: **concluída localmente em 25/10/2026; publicação pendente**. Prioridade: P1. Responsáveis: Codex/implementação e QA; fundador/comercial pela operação da planilha. [Plano](../plans/004-T007-medicao-contatos.md) e [evidência](../evidence/2026-10-25-T007-medicao-contatos.md).

## Entrega

WhatsApp continua como único canal. CTAs ativos recebem origem de página/posição na mensagem; conversas efetivamente recebidas são registradas manualmente em uma planilha privada importada do [template CSV](../templates/T007-registro-leads.csv). Clique não equivale a lead.

## Escopo e aceite

- Centralizar links ativos em `data/contact.json`, `data/contact.ts` e `components/WhatsAppLink.tsx`.
- Cobrir home, landing, blog/artigos, rodapé, botão flutuante, depoimentos e páginas legais; excluir rota/chat legados.
- Validar número, marcador, atributos, nova aba e export sem instalar analytics ou coletar dados no site.
- Entregar processo mínimo de planilha e evidência local. Publicação e recebimento real ficam separados.

Aceite local cumprido: 30 CTAs em nove páginas aprovados pelo pós-build, QA móvel de três jornadas aprovado e nenhuma coleta/analytics adicionada. A planilha privada ainda precisa ser criada/importada pelo responsável comercial; nenhuma conversa real foi simulada.
