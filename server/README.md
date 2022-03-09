# Server

## 1. Install dependencies
``$ yarn install -g ts-node``
``$ yarn install``

## 2. start server
``$ yarn dev``

----------------

## Descrição da API

- [x] Deve conter uma query `list()`.
- [x] A chamada query `list` sem parâmetro (o termo da busca por nome) deverá retornar todos os itens.
- [x] Se fornecido o argumento da busca `name`, deverá retornar os dados que contém parte da string, usar RegEx no filtro.

Download: [Data JSON](db.json)

Modelo:
```javascript
[
    {
        "_id": "5f1b3f4b7917ef26107bd58c",
        "index": 0,
        "picture": "https://i.pravatar.cc/200?u=5f1b3f4b7917ef26107bd58c",
        "age": 37,
        "eyeColor": "brown",
        "name": "Weber Stein",
        "company": "VIAGRAND",
        "email": "weber.stein@viagrand.ca",
        "phone": "+1 (866) 533-3564",
        "friends": [
          {
            "_id": "5f1d7f3e8882c9c811b111ce",
            "index": 0,
            "picture": "https://i.pravatar.cc/200?u=5f1d7f3e8882c9c811b111ce",
            "age": 23,
            "eyeColor": "green",
            "name": "Patti Mckenzie",
            "company": "DAISU",
            "email": "pattimckenzie@daisu.com",
            "phone": "+1 (960) 566-3327"
          },
        ],
        "greeting": "Hello, Weber! You have 9 unread messages."
    }
]
```

### Stack:
- GraphQL (apollo ou relay)
- Express

### Requisitos:
- [x] colocar um middleware no Express para log dos requests
- [x] no final do `README.md` principal colocar uma chamada funcional para a API em `curl`.

### Diferencial

- [x] Usar TypeScript
- [x] Regex da pesquisa: considerar caractere de espaço, dado o payload acima `name: Weber Stein`, se entrar com `we in` deve retornar no resultado `Weber Stein`

### Executar o projeto

- [x] Deverá executar com `yarn start` na porta 4000

-------------

## Apollo Server
### apollo-server-express
https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-express

### How to setup & deploy an Express GraphQL server with Apollo, Prisma, TypeScript, Postgres & Heroku
https://tomray.dev/setup-and-deploy-graphql-server

### Using Express with GraphQL – How to create a GraphQL server with Node.js/Express
https://www.apollographql.com/blog/backend/using-express-with-graphql-server-node-js/

### Apollo Server - Metrics and logging
https://www.apollographql.com/docs/apollo-server/monitoring/metrics/

utils: 
  https://www.npmjs.com/package/apollo-log
  https://docs.datadoghq.com/integrations/apollo/


### [Creating production builds](https://khalilstemmler.com/blogs/typescript/node-starter-project/#Creating-production-builds)