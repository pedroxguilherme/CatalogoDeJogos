# Projeto Desenvolvimento Framework II


Sobre o projeto: Este projeto é baseado em um catalogo de jogos , onde uma API construida para gerenciar uma coleção de jogos. É um servidor Web construído com Node.Js e Express, 
utilizando várias ferramentas e bibliotecas para estruturar e facilitar a manutenção e segurança do sistema.
- O projeto segue uma organização modular em que cada diretório possui uma função específica:
-config: configurações do ORM (mapeamento objeto-relacional).
-controllers: definem os endpoints da API.
-middleware: funções para validação de tokens de autenticação.
-models: modelos das entidades para o ORM.
-repositories: comunicação com o banco de dados via ORM.
-services: lógica de processamento das requisições.






Definindo estrutura de pastas:

```
└── src
    ├── config          // diretório com config do ORM
    ├── controllers     // diretório com os endpoints
    ├── middleware      // diretório com projetos para validação de token
    ├── models          // diretório com as entidades / models do ORM
    ├── repositories    // diretório com a comunicação ao banco através do ORM
    ├── services        // diretório com os processamentos para as requests
```



Pacotes que iremos utiilizar:
- bcrypt: criar um hash da senha dos alunos
- express: servidor http
- jsonwebtoken: gerar o token de autenticação
- [Sequelize](https://sequelize.org/docs/v6/getting-started/): ORM para comunicação com Banco de Dados
- [sqlite3](https://www.sqlite.org/): Banco de dados local
- uuid: gerador de ids no formato guid


-Cria-se uma imagem com Node.js.(FROM node:20.17.0)<br>
-Define-se o diretório de trabalho para /app.(WORKDIR /app)<br>
-Copia-se os arquivos package.json e package-lock.json.(COPY package*.json ./)<br>
-Instala-se as dependências com npm install.(RUN npm install)<br>
-Copia-se o código da aplicação.(COPY . .)<br>
-Define-se a porta 3000 como a porta de comunicação da aplicação.(EXPOSE 3000)<br>
-Executa-se o servidor com node ./src/server.js.(CMD ["node", "./src/server.js"])<br>
-Esta configuração facilita o desenvolvimento e a distribuição, pois encapsula toda a aplicação e suas dependências em um contêiner Docker.<br>

Para criar conteiner: 
-Comando: docker build . -t (nome-projeto)<br>
-docker build: Este comando cria uma imagem Docker a partir do contexto atual, ou seja, dos arquivos e diretórios do projeto na pasta onde você está executando o comando.<br>
-.: O ponto representa o diretório atual como contexto de build, que deve conter o arquivo Dockerfile (necessário para especificar como o ambiente será montado).<br>
-t (nome-projeto): A flag -t permite nomear a imagem criada, usando o nome que você especificar em (nome-projeto). Esse nome facilita a referência à imagem posteriormente.<br>
-Este comando cria uma imagem chamada "minha-aplicacao" a partir dos arquivos e dependências no diretório atual.<br>



Docker build: $ docker build . -t (nome-projeto)

Para executar o conteiner:
-Construir a Imagem (caso ainda não tenha feito)<br>
docker build -t nome-da-imagem.<br>
-Executar o Contêiner:(docker run -p 8080:3000 nome-da-imagem)<br>
-Executar em Segundo Plano (Modo Detached) (opcional): Para que o contêiner seja executado em segundo plano, adicione a flag -d:
(docker run -d -p 8080:3000 nome-da-imagem)<br>

docker run -p 8080:3000 (nome-projeto)

Pacotes Utilizados
bcrypt: para hashing de senhas.
express: servidor HTTP para rotas e respostas.
jsonwebtoken: geração de tokens para autenticação.
Sequelize: ORM que simplifica a comunicação com o banco de dados.
sqlite3: banco de dados local leve.
uuid: gera identificadores únicos.

-O swagger facilitou com a documentação e os testes de APIS REST, desenvolvida no projeto. 
Ele oferece uma interface visual interativa onde é possível explorar, 
testar e entender os endpoints da API sem a necessidade de realizar chamadas manuais via ferramentas externas ou comandos de terminal.

-Rota Inicial Documentação: A rota /api-docs é onde o Swagger disponibiliza a documentação da API. 
Quando se acessa http://localhost:3000/api-docs, o Swagger carrega uma interface interativa que permite explorar, 
testar e visualizar cada endpoint da API.
-No projeto, a rota inicial configurada no servidor, como localhost, api e /api-docs, 
desempenha funções importantes na navegação e uso da API e da documentação gerada pelo Swagger.
-A rota localhost é o ponto de entrada padrão para acessar o servidor localmente.
-Muitas APIs definem uma rota de base chamada /api para organizar os endpoints de uma maneira mais limpa e estruturada. 