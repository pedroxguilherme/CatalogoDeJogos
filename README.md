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
