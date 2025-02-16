# PL2025-A104275
### TPC-1
### André Filipe Soares Pereira || A104275

# Problema proposto
Para o primeiro trabalho semanal foi proposta a implementação de "um serviço em nodejs que consuma a API de dados servida pelo json-server da oficina de reparações e responda com as páginas web do site"
de forma similar ao [serviço implementado durante as aulas praticas](https://github.com/AndrePereira123/EngWeb2025-A104275/tree/main/TPC1/codigo_produzido_na_aula)(sob o qual baseei o meu código).

O [dataset fornecido](https://github.com/AndrePereira123/EngWeb2025-A104275/blob/main/TPC1/dataset_reparacoes.json) apresenta uma unica lista "reparacoes" onde cada objeto guarda:
  - nome
  - nif
  - viatura
  - nr_intervencoes
  - intervencoes
    
de cada cliente, para além de uma data;

Cada "viatura" tem 3 campos:

  - marca
  - modelo
  - matricula
    
Cada lista "intervencoes" guarda objetos com 3 campos:
  - codigo
  - nome
  - descricao

O principal objetivo da tarefa é ler os dados fornecidos pela API do dataset e permitir acessar não só a lista de todas as reparações como todas as viaturas e intervenções que não podem ser diretamente listados através de URL's com o json-server.

# Implementação
O serviço está implementado no ficheiro [Servidor.js](https://github.com/AndrePereira123/EngWeb2025-A104275/blob/main/TPC1/Servidor.js).

Comecei por simplemenste substituir os URL's utilizados no codigo produzido na aula para os novos na porta 12000 "http://localhost:12000", atualizando alguns títulos e manipulação dos objetos para garantir a impressção correta dos dados. Para além disto realizei algumas alterações de UI durante toda a implementação como:
- Aumentar tamanho de fonte do texto
- Adicionar espaço entre linhas
- Adicionar mudança de cor ao pairar sobre o texto selecionavel
- Centralização de titulos
- Adição de menu lateral para facilitar navegação
- Integração de um alfabeto selecionavel para filtrar resultados por letra inicial (nome de cliente ou marca de viatura dependendo da página)
  
entre outros.

Com o menu lateral disponibilizei 3 opções : "Reparações", "Viaturas" e "Intervenções". Estas permitem listar os dados com os formatos relevantes.
Ao clicar em "Reparações", o utilizador é direncionado para "[http://localhost:12000/reparacoes](https://github.io/AndrePereira123/EngWeb2025-A104275/main/TPC1/Paginas%20demonstrativas/reparacoes.htm)"

# Ficheiros htm de exemplo
