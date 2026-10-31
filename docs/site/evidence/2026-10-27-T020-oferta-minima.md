# T020 — preparação da oferta mínima verificável

**Registro histórico da preparação.** O fundador aceitou e complementou a oferta em
29/10/2026; consultar `2026-10-29-T020-aceite-fundador.md` para o estado atual.

Data: **27/10/2026 — America/Sao_Paulo**. Tarefa: T020. Escopo autorizado:
trabalho local independente com os defaults seguros de DN001–DN003, sem alterar a
página pública, publicar, enviar mensagens ou criar integrações.

## Baseline preservado

Após `git fetch origin --prune`, `main` permaneceu em `849cc2b8`, um commit à
frente de `origin/main` em `34b8d0d1`; a diferença é a implementação local de T007.
As modificações documentais e os artefatos preexistentes em `out` foram tratados como
trabalho a preservar. Esta execução não alterou `pages`, `components`, `data`,
`public`, `out` ou `.next`.

## Entrega e aceite desta execução

Entregável: matriz em `../02-dominio.md` para separar afirmação candidata,
possibilidade condicionada, default seguro e item fora da oferta mínima. O registro
inclui informação necessária, limite, continuidade humana, manutenção e estado para
cada tarefa, além de dois cenários fictícios reproduzíveis:

1. pergunta sobre serviço/FAQ respondida somente a partir de uma ficha aprovada;
2. pedido de remarcação sem agenda integrada, que deve ser recusado como ação e
   continuado conforme o procedimento humano combinado.

Aceite parcial cumprido: há cenário de FAQ, teste fora do escopo e tratamento
explícito de participação humana, atualização, preço e limites. Agenda, CRM,
lembretes, follow-up, histórico persistente e ações externas não foram classificados
como recursos prontos.

Aceite final não cumprido: não houve acesso a produto/demonstração e o fundador não
aceitou as afirmações publicáveis. A ficha permanece em revisão e DN001–DN003
continuam abertas. Nenhuma nova decisão foi registrada em `../09-decisoes.md`.

## Fontes confrontadas

- `2026-10-26-dossie-conversao.md`: achados da home e limites da
  reconciliação;
- D023 em `../09-decisoes.md`: coexistência de solução disponível, implantação
  personalizada e Early Access, sem prazo ou SLA;
- `../../../pages/index.tsx` e `../../../components/Testimonials.tsx`: afirmações atuais
  que dependem de revisão em T010;
- `../13-definicoes-necessarias.md`: defaults seguros e responsáveis pelas respostas.

## Validação documental

- Conferir referências locais com `node docs/site/evidence/verificar-docs.cjs`.
- Conferir whitespace e integridade do diff com `git diff --check`.
- Revisar que `02-dominio.md`, T020, DN001–DN003 e `10-progresso.md` descrevem o
  mesmo estado.

Type-check e build não são necessários para esta execução porque nenhum arquivo de
código, dado público ou configuração foi alterado. Build aprovado também não
substituiria a demonstração nem o aceite comercial pendente.

## Limites e próximo passo

Não foi comprovada capacidade em produto, integração, retenção de contexto,
continuidade automática, prazo, preço ou condição de Early Access. O próximo passo é
o fundador revisar a matriz e responder DN001–DN003; depois, demonstrar as
capacidades aceitas antes de usá-las na prévia T010.
