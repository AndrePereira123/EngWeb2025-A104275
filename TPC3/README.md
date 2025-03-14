# PL2025-A104275 ||  André Filipe Soares Pereira || A104275
# TPC-3 - Gestor de Alunos (serviço em nodejs(3))


Para a terceira semana foi pedida a conclusão da implementação de um serviço em nodejs similar aos desenvolvidos nas semanas anteriores ([TPC1](https://github.com/AndrePereira123/EngWeb2025-A104275/tree/main/TPC1)/[TPC2](https://github.com/AndrePereira123/EngWeb2025-A104275/tree/main/TPC2)) mas, agora, com "Envio de informação com HTML Forms: GET e POST", "Recuperação da informação do body do pedido" e 
"Tratamento de recursos estáticos" para poder suportar as páginas a implementar:

- Página principal: Listar alunos.

- Página de aluno com o seu nome, número e git;

- Página de criação de aluno.

- Página de edição de aluno.

- Página de remover aluno.

O serviço deve permitir distinguir os alunos e os "TPC" realizados por cada um deles.

O [dataset](https://github.com/AndrePereira123/EngWeb2025-A104275/blob/main/TPC2/dataset.json) utilizado.


# Usufruir do serviço

O serviço está implementado no ficheiro [alunos_server.js](https://github.com/AndrePereira123/EngWeb2025-A104275/blob/main/TPC3/alunos_server.js); para usufruir do mesmo é necessário inicializar o json-server sob o [dataset relevante](https://github.com/AndrePereira123/EngWeb2025-A104275/blob/main/TPC3/dataset_alunos.json) com: 
 - "json-server --watch dataset_alunos.json" 

Depois recorrendo ao nodejs, o serviço em si:
 - "node ...\alunos_server.js" 

Agora deve ser possível aceder ao [URL da página inicial](http://localhost:7777/) e navegar com o auxílio dos menus implementados.

