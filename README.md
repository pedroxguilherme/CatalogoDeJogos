# Projeto Desenvolvimento Framework II








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


-Cria-se uma imagem com Node.js.(FROM node:20.17.0)
-Define-se o diretório de trabalho para /app.(WORKDIR /app)
-Copia-se os arquivos package.json e package-lock.json.(COPY package*.json ./)
-Instala-se as dependências com npm install.(RUN npm install)
-Copia-se o código da aplicação.(COPY . .)
-Define-se a porta 3000 como a porta de comunicação da aplicação.(EXPOSE 3000)
-Executa-se o servidor com node ./src/server.js.(CMD ["node", "./src/server.js"])
-Esta configuração facilita o desenvolvimento e a distribuição, pois encapsula toda a aplicação e suas dependências em um contêiner Docker.

Para criar conteiner: 
-Comando: docker build . -t (nome-projeto)
-docker build: Este comando cria uma imagem Docker a partir do contexto atual, ou seja, dos arquivos e diretórios do projeto na pasta onde você está executando o comando.
-.: O ponto representa o diretório atual como contexto de build, que deve conter o arquivo Dockerfile (necessário para especificar como o ambiente será montado).
-t (nome-projeto): A flag -t permite nomear a imagem criada, usando o nome que você especificar em (nome-projeto). Esse nome facilita a referência à imagem posteriormente.
-Este comando cria uma imagem chamada "minha-aplicacao" a partir dos arquivos e dependências no diretório atual.



Docker build: $ docker build . -t (nome-projeto)

Para executar o conteiner:
-Construir a Imagem (caso ainda não tenha feito)
docker build -t nome-da-imagem .
-Executar o Contêiner:(docker run -p 8080:3000 nome-da-imagem)
-Executar em Segundo Plano (Modo Detached) (opcional): Para que o contêiner seja executado em segundo plano, adicione a flag -d:
(docker run -d -p 8080:3000 nome-da-imagem)

docker run -p 8080:3000 (nome-projeto)

Sobre o projeto: Este projeto é baseado em um catalogo de jogos , onde uma API construida para gerenciar uma coleção de jogos. É um servidor Web construído com Node.Js e Express, utilizando várias ferramentas e bibliotecas para estruturar e facilitar a manutenção e segurança do sistema.
- O projeto segue uma organização modular em que cada diretório possui uma função específica:
-config: configurações do ORM (mapeamento objeto-relacional).
-controllers: definem os endpoints da API.
-middleware: funções para validação de tokens de autenticação.
-models: modelos das entidades para o ORM.
-repositories: comunicação com o banco de dados via ORM.
-services: lógica de processamento das requisições.

Pacotes Utilizados
bcrypt: para hashing de senhas.
express: servidor HTTP para rotas e respostas.
jsonwebtoken: geração de tokens para autenticação.
Sequelize: ORM que simplifica a comunicação com o banco de dados.
sqlite3: banco de dados local leve.
uuid: gera identificadores únicos.

O swagger facilitou com a documentação e os testes de APIS REST, desenvolvida no projeto. Ele oferece uma interface visual interativa onde é possível explorar, testar e entender os endpoints da API sem a necessidade de realizar chamadas manuais via ferramentas externas ou comandos de terminal.