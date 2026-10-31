# Reconciliação do dossiê comercial com o repositório

Data: **26/10/2026 — America/Sao_Paulo**. Escopo: leitura do relatório
`Auditoria_Comercial_Techway.docx`, do `Plano_Implementacao_Techway.md`, da fonte
local em `849cc2b8`, dos documentos operacionais e do diff preexistente. Nenhuma
alteração de produto, publicação ou contato externo foi executada nesta análise.

## Conclusão

O diagnóstico sustenta uma mudança de prioridade: antes de ampliar a série
editorial, a Techway precisa tornar a oferta de atendimento no WhatsApp explícita,
demonstrável, confiável e acompanhável até o resultado comercial. A recomendação de
editar a estrutura atual, em vez de reconstruir o site, é compatível com o Pages
Router/export estático e com o trabalho já entregue.

## Achados confirmados na fonte

- A primeira tela da home parte da sobrecarga e de “funcionário digital”; atendimento
  no WhatsApp não é a categoria principal do hero.
- A home publica “Até 5h”, “24h” e “Até 2x” sem método junto da afirmação; o
  depoimento de Luciene publica redução de 80% sem contexto verificável no
  repositório.
- O carrossel reúne dois relatos identificados e o cartão hipotético “Aqui pode ser
  você!”, reduzindo a distinção entre prova e convite comercial.
- Três dos quatro artigos apontam para `/din_page?variant=default`; o quarto aponta
  para a home. As rotas funcionam, mas a jornada alterna entre atendimento no
  WhatsApp e uma oferta ampla de automação/dados.
- Não existe demonstração de conversa na home nem explicação suficiente de
  implantação, limites, passagem para uma pessoa, preço ou atualização das
  informações.
- Não há `_document` nem `lang` global; somente o elemento do artigo declara
  `lang="pt-BR"`.
- SEO técnico, canonical, BlogPosting, sitemap e robots já foram entregues em T006;
  refazê-los não aumenta o valor desta iniciativa.

## Ajustes do dossiê ao estado atual

- A atribuição mínima proposta já existe na T007, commit local `849cc2b8`: 30 CTAs
  exportados recebem página/posição na mensagem e há template para planilha privada,
  sem GA4/cookie. O próximo ganho é publicar essa entrega, importar a planilha e
  operar conversas reais; não instalar uma segunda instrumentação.
- Os CTAs dos artigos não estão quebrados tecnicamente. O problema atual é
  continuidade de oferta e preservação de contexto ao atravessar artigo, home ou
  landing.
- D023 permite solução disponível, implantação personalizada e Early Access. A
  validação de oferta desta iniciativa não exige um catálogo completo: exige apenas
  prova e limites das afirmações que entrarão na página comercial.
- O exemplo de agendamento em S01 continua identificado como ilustrativo. A primeira
  demonstração da home deve começar por respostas sobre serviços e dúvidas
  frequentes; agenda, CRM, lembretes e ações externas ficam condicionados.
- T004/T005 continuam válidas, mas S02–S04 não devem anteceder a base de conversão.
  Conteúdo novo volta a subir quando responder uma objeção observada ou uma intenção
  comercial específica.

## Limites desta reconciliação

Não houve acesso ao produto autenticado, contratos, analytics, Search Console,
WhatsApp recebido, proposta comercial ou dados de clientes. Os relatos e permissões
de uso não foram revalidados com terceiros. A auditoria pública do dossiê não foi
repetida em navegador nesta sessão; os achados acima foram confrontados com a fonte
local e a documentação verificada até 25/10/2026.

## Encaminhamento

O plano 005 transforma o dossiê em ondas pequenas com fichas e aceite. A ordem é:
colocar T007 em operação, validar somente a oferta publicável, entregar a home de
conversão e alinhar a jornada do blog; depois testar compreensão, registrar contatos
reais, documentar um caso e ativar um canal de aquisição autorizado.

## Validação documental

- `node docs/site/evidence/verificar-docs.cjs`: **140 referências locais, nenhuma
  ausente**.
- `git diff --check`: aprovado; somente avisos informativos de conversão LF/CRLF.
- PRD, backlog, índice de planos/tarefas, decisões, progresso, fontes e mapa foram
  reconciliados com as novas fichas.
- Type-check/build não foram executados porque não houve mudança de código ou dados.
- Alterações preexistentes em `00-guia-de-conducao.md`, `PLANS.md`, plano 001,
  template de plano e artefatos de `out` foram preservadas; nenhum reset/clean foi
  usado.
