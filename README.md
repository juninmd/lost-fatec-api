# lost-fatec-api
Trabalho do professor fausto

## Requisitos

- Node.js 22 (o CI usa 22)
- MongoDB em `mongodb://localhost/lost` (porta 27017)

## Instalação

```sh
npm install
```

## Configuração

`app.js` lê `env/<NODE_ENV>.env` (`development` por padrão). Chaves: `PORT`, `NODE_ENV`.

## Uso

```sh
node app.js
```

## Testes

```sh
npm test
```

Os testes de rota usam o MongoDB local. Sem ele em execução, `npm test` cai com erro de conexão.

## CI

- `validate` (PR e push): secrets, gitleaks, `npm install`, `npm test`, `npm audit --audit-level=high`.
- `security`: gitleaks no push.
- `release-drafter`: rascunho de release.
