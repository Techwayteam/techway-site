# T018 — adaptação do plano editorial

Data: 11/10/2026, America/Sao_Paulo. Pedido: incorporar recomendações do GPT externo, mantendo a copy sob sua responsabilidade e preparo/revisão/integração com o Codex. Usuário forneceu a proposta como anexo; depois forneceu copy e diretrizes de S01.

Entrega: quatro briefs S01–S04 na sequência recebida, cinco insights mapeados, contrato de copy, direções visuais e links graduais; plano, estratégia, PRD, tarefas/backlog, decisões e progresso alinhados. B01–B12 preservadas como apoio; brief B01 e rascunho não substituídos. Cadência anterior continua hipótese histórica, sem datas/recorrência. S01 avançou nesta mesma sessão; as outras copies não foram inventadas.

Origem reconsultada: `git ls-remote origin refs/heads/main` retornou 78362aa8a62bc41474d832471486b0e07235a91f, igual ao HEAD local. Consulta de rede exigiu execução fora do sandbox após falha de conexão. Não houve fetch que alterasse a fonte nem novo deploy público verificado.

Validação documental: `verificar-docs.cjs` conferiu 42 referências locais, zero ausentes; estados conferidos e T018 concluída. Vinte arquivos preexistentes comparados por SHA256: só as três fontes autorizadas na sequência mudaram (`data/blogPosts.json` e os dois templates do blog). Os outros 17, incluindo B01 em rascunho e imagens preexistentes, permaneceram iguais. Os três artigos antigos mantêm copy/metadados/CTAs idênticos ao snapshot anterior; somente o dilema recebeu link relacionado para S01. Teste em `validar-S01.cjs`.

Limite: esta evidência conclui o replanejamento, não a série inteira. T004/T005 seguem com 1/4 e T003 permanece pendente. Próximo conteúdo: S02, a receber do usuário/GPT.
