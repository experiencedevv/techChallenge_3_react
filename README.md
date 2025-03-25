# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## AScripts disponíveis

No diretório do projeto você pode rodar:

### `npm start`

Roda a plicação no modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página irá recarregar quando houver mudanças.\
Você também pode ver erros de lint no console.

Primeiro deve ser executado no terminal na pasta “src” o código - "json-server --watch db.json --port 3001"
O usuário acessa o sistema por meio do terminal executando "npm start".
O front-end é carregado e exibe a interface inicial.

http://localhost:3001/posts

http://localhost:3001/acessos

## Como rodar com Docker
docker build -t meu-react-app .
docker run -d -p 3000:80 meu-react-app
