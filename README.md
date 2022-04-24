# Talker Manager

Talker Manager é uma API de um CRUD de pessoas palestrantess.

O banco de dados inicial, contido no arquivo `talker.json`, foi fornecido pela [Trybe](https://betrybe.com).

## Tecnologias utilizadas

Desenvolvido utilizando o framework [Express](https://expressjs.com/) para Node.js.

## Instalação das dependências

Você precisará de um ambiente de execução [Node.js](https://nodejs.org) instalado em sua máquina para executar o comando de instalação de dependências.

Com o repositório clonado e dentro de um terminal:

1. Entre na pasta do repositório:

```
cd project-talker-manager/
```

2. Instale as dependências:

```
npm install
```

## Como executar

Para iniciar a aplicação, execute no terminal:

```
npm start
```

## Documentação

### Login

Realiza login com qualquer email e senha que sejam válidos.

O corpo da resposta possui um **objeto JSON** contendo um campo com o token de autenticação gerado.

#### URL

```
POST http://localhost:3000/login
```

#### Parâmetros

##### Body

| Parâmetro | Tipo   | Descrição                                                       |
| :-------- | :----- | :-------------------------------------------------------------- |
| email     | string | Email no formato "email@example.com". **Obrigatório**.          |
| password  | string | Senha da pessoa usuária. **Obrigatório**. Mínimo: 6 caracteres. |

#### Campos da resposta

| Campo | Tipo   | Descrição                     |
| :---- | :----- | :---------------------------- |
| token | string | Token de autenticação gerado. |

#### Códigos de status da resposta

| Código | Descrição                                 |
| :----- | :---------------------------------------- |
| 200    | Token de autenticação gerado com sucesso. |
| 400    | Parâmetro ausente ou inválido.            |

#### Exemplo

Requisição:

```terminal
curl -X POST http://localhost:3000/login \
-H 'Content-Type: application/json' \
-d '{ "email": "user@email.com", "password": "123456" }'
```

Resposta:

```json
{
  "token": "c90bd1d71be22b3b"
}
```

---

### Buscar todas as pessoas palestrantes

Busca as informações de todas as pessoas palestrantes cadastradas.

O corpo da resposta possui um **array JSON** contendo campos de informações das pessoas palestrantes.

#### URL

```
GET http://localhost:3000/talker
```

#### Parâmetros

Nenhum.

#### Campos da resposta

| Campo          | Tipo    | Descrição                                   |
| :------------- | :------ | :------------------------------------------ |
| age            | inteiro | Idade da pessoa palestrante.                |
| id             | inteiro | ID da pessoa palestrante.                   |
| name           | string  | Nome da pessoa palestrante.                 |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. |
| talk.rate      | inteiro | Nota da palestra.                           |
| talk.watchedAt | string  | Data da palestra.                           |

#### Códigos de status da resposta

| Código | Descrição                                    |
| :----- | :------------------------------------------- |
| 200    | Pessoas palestrantes retornadas com sucesso. |

#### Exemplo

Requisição:

```terminal
curl -X GET http://localhost:3000/talker
```

Resposta:

```json
[
  {
    "age": 62,
    "id": 1,
    "name": "Henrique Albuquerque",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  },
  {
    "age": 67,
    "id": 2,
    "name": "Heloísa Albuquerque",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  },
  {
    "age": 33,
    "id": 3,
    "name": "Ricardo Xavier Filho",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  },
  {
    "age": 24,
    "id": 4,
    "name": "Marcos Costa",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  }
]
```

---

### Buscar uma pessoa palestrante

Busca as informações de uma pessoa palestrante especificada pelo seu ID.

O corpo da resposta possui um **objeto JSON** contendo campos de informações da pessoa palestrante.

#### URL

```
GET http://localhost:3000/talker/{id}
```

#### Parâmetros

##### Path

| Parâmetro | Tipo    | Descrição                               |
| :-------- | :------ | :-------------------------------------- |
| id        | inteiro | ID da pessoa palestrante a ser buscada. |

#### Campos da resposta

| Campo          | Tipo    | Descrição                                   |
| :------------- | :------ | :------------------------------------------ |
| age            | inteiro | Idade da pessoa palestrante.                |
| id             | inteiro | ID da pessoa palestrante.                   |
| name           | string  | Nome da pessoa palestrante.                 |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. |
| talk.rate      | inteiro | Nota da palestra.                           |
| talk.watchedAt | string  | Data da palestra.                           |

#### Códigos de status da resposta

| Código | Descrição                                 |
| :----- | :---------------------------------------- |
| 200    | Pessoa palestrante retornada com sucesso. |
| 404    | Pessoa palestrante não encontrada.        |

#### Exemplo

Requisição:

```terminal
curl -X GET http://localhost:3000/talker/3
```

Resposta:

```json
{
  "age": 33,
  "id": 3,
  "name": "Ricardo Xavier Filho",
  "talk": {
    "rate": 5,
    "watchedAt": "23/10/2020"
  }
}
```

---

### Buscar pessoas palestrantes por termo

Busca as informações das pessoas palestrantes que contém um termo específico em seus nomes.

O corpo da resposta possui um **array JSON** contendo campos de informações das pessoas palestrantes.

#### Autorização

Requer o token de autenticação no cabeçalho de autorização `Authorization`.

#### URL

```
GET http://localhost:3000/talker/search
```

#### Parâmetros

##### Query

| Parâmetro | Tipo   | Descrição                                                  |
| :-------- | :----- | :--------------------------------------------------------- |
| q         | string | Termo a ser pesquisado nos nomes das pessoas palestrantes. |

#### Campos da resposta

| Campo          | Tipo    | Descrição                                   |
| :------------- | :------ | :------------------------------------------ |
| age            | inteiro | Idade da pessoa palestrante.                |
| id             | inteiro | ID da pessoa palestrante.                   |
| name           | string  | Nome da pessoa palestrante.                 |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. |
| talk.rate      | inteiro | Nota da palestra.                           |
| talk.watchedAt | string  | Data da palestra.                           |

#### Códigos de status da resposta

| Código | Descrição                                           |
| :----- | :-------------------------------------------------- |
| 200    | Pessoas palestrantes retornadas com sucesso.        |
| 401    | Autorização falhou. Token de autenticação inválido. |

#### Exemplo

Requisição:

```terminal
curl -X GET http://localhost:3000/talker/search \
-H 'Authorization: c90bd1d71be22b3b' \
-G -d 'q=He'
```

Resposta:

```json
[
  {
    "age": 62,
    "id": 1,
    "name": "Henrique Albuquerque",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  },
  {
    "age": 67,
    "id": 2,
    "name": "Heloísa Albuquerque",
    "talk": {
      "rate": 5,
      "watchedAt": "23/10/2020"
    }
  }
]
```

---

### Cadastrar uma pessoa palestrante

Cadastra uma pessoa palestrante.

O corpo da resposta possui um **objeto JSON** contendo campos de informações da pessoa palestrante cadastrada.

#### Autorização

Requer o token de autenticação no cabeçalho de autorização `Authorization`.

#### URL

```
POST http://localhost:3000/talker
```

#### Parâmetros

##### Body

| Parâmetro      | Tipo    | Descrição                                                          |
| :------------- | :------ | :----------------------------------------------------------------- |
| age            | inteiro | Idade da pessoa palestrante. **Obrigatório**. Mínimo: 18.          |
| name           | string  | Nome da pessoa palestrante. **Obrigatório**. Mínimo: 3 caracteres. |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. **Obrigatório**.       |
| talk.rate      | inteiro | Nota da palestra. **Obrigatório**. Mínimo: 1. Máximo: 5.           |
| talk.watchedAt | string  | Data da palestra. **Obrigatório**. Formato: DD/MM/AAAA.            |

#### Campos da resposta

| Campo          | Tipo    | Descrição                                   |
| :------------- | :------ | :------------------------------------------ |
| age            | inteiro | Idade da pessoa palestrante.                |
| id             | inteiro | ID da pessoa palestrante.                   |
| name           | string  | Nome da pessoa palestrante.                 |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. |
| talk.rate      | inteiro | Nota da palestra.                           |
| talk.watchedAt | string  | Data da palestra.                           |

#### Códigos de status da resposta

| Código | Descrição                                           |
| :----- | :-------------------------------------------------- |
| 201    | Pessoa palestrante cadastrada com sucesso.          |
| 400    | Parâmetro ausente ou inválido.                      |
| 401    | Autorização falhou. Token de autenticação inválido. |

#### Exemplo

Requisição:

```terminal
curl -X POST http://localhost:3000/talker \
-H 'Authorization: c90bd1d71be22b3b' \
-H 'Content-Type: application/json' \
-d '{
  "age": 34,
  "name": "Marcos Paulo",
  "talk": {
    "rate": 4,
    "watchedAt": "25/12/2020"
  }
}'
```

Resposta:

```json
{
  "age": 34,
  "id": 5,
  "name": "Marcos Paulo",
  "talk": {
    "rate": 4,
    "watchedAt": "25/12/2020"
  }
}
```

---

### Atualizar uma pessoa palestrante

Atualiza as informações de uma pessoa palestrante especificada pelo seu ID.

O corpo da resposta possui um **objeto JSON** contendo campos das informações atualizadas da pessoa palestrante.

#### Autorização

Requer o token de autenticação no cabeçalho de autorização `Authorization`.

#### URL

```
PUT http://localhost:3000/talker/{id}
```

#### Parâmetros

##### Path

| Parâmetro | Tipo    | Descrição                                  |
| :-------- | :------ | :----------------------------------------- |
| id        | inteiro | ID da pessoa palestrante a ser atualizada. |

##### Body

| Parâmetro      | Tipo    | Descrição                                                          |
| :------------- | :------ | :----------------------------------------------------------------- |
| age            | inteiro | Idade da pessoa palestrante. **Obrigatório**. Mínimo: 18.          |
| name           | string  | Nome da pessoa palestrante. **Obrigatório**. Mínimo: 3 caracteres. |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. **Obrigatório**.       |
| talk.rate      | inteiro | Nota da palestra. **Obrigatório**. Mínimo: 1. Máximo: 5.           |
| talk.watchedAt | string  | Data da palestra. **Obrigatório**. Formato: DD/MM/AAAA.            |

#### Campos da resposta

| Campo          | Tipo    | Descrição                                   |
| :------------- | :------ | :------------------------------------------ |
| age            | inteiro | Idade da pessoa palestrante.                |
| id             | inteiro | ID da pessoa palestrante.                   |
| name           | string  | Nome da pessoa palestrante.                 |
| talk           | objeto  | Palestra realizada pela pessoa palestrante. |
| talk.rate      | inteiro | Nota da palestra.                           |
| talk.watchedAt | string  | Data da palestra.                           |

#### Códigos de status da resposta

| Código | Descrição                                           |
| :----- | :-------------------------------------------------- |
| 200    | Pessoa palestrante atualizada com sucesso.          |
| 400    | Parâmetro ausente ou inválido.                      |
| 401    | Autorização falhou. Token de autenticação inválido. |

#### Exemplo

Requisição:

```terminal
curl -X PUT http://localhost:3000/talker/5 \
-H 'Authorization: c90bd1d71be22b3b' \
-H 'Content-Type: application/json' \
-d '{
  "age": 34,
  "name": "João Pedro",
  "talk": {
    "rate": 3,
    "watchedAt": "26/12/2020"
  }
}'
```

Resposta:

```json
{
  "age": 34,
  "id": 5,
  "name": "João Pedro",
  "talk": {
    "rate": 3,
    "watchedAt": "26/12/2020"
  }
}
```

---

### Remover uma pessoa palestrante

Remove as informações de uma pessoa palestrante especificada pelo seu ID.

A resposta não possui conteúdo no corpo.

#### Autorização

Requer o token de autenticação no cabeçalho de autorização `Authorization`.

#### URL

```
DELETE http://localhost:3000/talker/{id}
```

#### Parâmetros

##### Path

| Parâmetro | Tipo    | Descrição                                |
| :-------- | :------ | :--------------------------------------- |
| id        | inteiro | ID da pessoa palestrante a ser removida. |

#### Campos da resposta

Nenhum.

#### Códigos de status da resposta

| Código | Descrição                                           |
| :----- | :-------------------------------------------------- |
| 204    | Pessoa palestrante removida com sucesso.            |
| 401    | Autorização falhou. Token de autenticação inválido. |

#### Exemplo

Requisição:

```terminal
curl -X DELETE http://localhost:3000/talker/5 \
-H 'Authorization: c90bd1d71be22b3b' \
-I
```

Resposta:

```terminal
HTTP/1.1 204 No Content
X-Powered-By: Express
Date: Sun, 24 Apr 2022 03:28:40 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

---
