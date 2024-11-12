# Catalogo de Jogos


Este projeto é baseado em um catalogo de jogos , onde uma API construida para gerenciar uma coleção de jogos. É um servidor Web construído com Node.Js e Express.




Para criar conteiner: 
```
$ docker build . -t (nome-projeto)
```

- docker build: Este comando cria uma imagem Docker a partir do contexto atual, ou seja, dos arquivos e diretórios do projeto na pasta onde você 
- está executando o comando.
- O ponto representa o diretório atual como contexto de build, que deve conter o arquivo Dockerfile (necessário para especificar como o ambiente será montado).
-t (nome-projeto): A flag -t permite nomear a imagem criada, usando o nome que você especificar em (nome-projeto). Esse nome facilita a referência à imagem posteriormente.
- Este comando cria uma imagem chamada "minha-aplicacao" a partir dos arquivos e dependências no diretório atual.




Para executar o conteiner:
```
docker run -p 8080:3000 (nome-projeto) 
```
- Construir a Imagem (caso ainda não tenha feito)
docker build -t nome-da-imagem.



Para executar o conteiner em segundo plano:
```
docker run -d -p 8080:3000 nome-da-imagem
```
- Executar em Segundo Plano (Modo Detached) (opcional): Para que o contêiner seja executado em segundo plano, adicione a flag -d:




Rota Inicial Documentação: 
```
http://localhost:3000/api-docs
```
- A rota /api-docs é onde o Swagger disponibiliza a documentação da API. 
Quando se acessa http://localhost:3000/api-docs, o Swagger carrega uma interface interativa que permite explorar, 
testar e visualizar cada endpoint da API.
- No projeto, a rota inicial configurada no servidor, como localhost, api e /api-docs, 
desempenha funções importantes na navegação e uso da API e da documentação gerada pelo Swagger.
- A rota localhost é o ponto de entrada padrão para acessar o servidor localmente.
- Muitas APIs definem uma rota de base chamada /api para organizar os endpoints de uma maneira mais limpa e estruturada. 




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

