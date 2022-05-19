# API Rest 1 - GSW

<br>

# Desenvolvimento orientado a teste/ Test Driven Development TDD

<br>

# Resumo do Projeto

O Desafio proposto na primeira avaliação é a criação de uma API utilizando NodeJS, Mongo para armazenar as informações de jogadores. Devendo conter um CRUD para cadastrar as informações de cadastro de usuário, como nome do jogador e coin (moedas), salvando a quantidade de moedas que o jogador possui. Tendo como diferencial que as informações de medalhas e troféus não serão ser salvas no banco, e sim calculados no momento em que a API for responder. Ao final da realização deve ser utilizado o conceito de TDD para o desenvolvimento dos testes.

<br>

![Test Driven Development (TDD)](https://user-images.githubusercontent.com/80925387/167756040-c2dba9fa-c55c-4e74-bbd0-cb8ba6ca4a86.png)

## Ciclo de desenvolvimento:

### Red,Green, Refactor

<br>

# Funcionalidades do projeto

- `Rota para cadastro de usuario` Uma rota onde o usuário pode cadastrar um novo jogador, indicando seu nome e quantidade de moedas, inserindo assim, no banco de dados.
- `Rota para atualizaras moedas do jogador` Uma rota onde o usuário pode atualizar a quantidade de moedas que um jogador tem.
- `Rota para exclusão de usuario` Uma rota onde o usuário pode deletar um jogador existente, excluindo-o permanentemente do banco de dados.
- `Rota de listagem de usuarios` Uma rota é listado os usuarios que existem no banco, calculando também, na hora, a quantidade de medalhas e troféus que cada um possui

<br>

# Tecnologias Utilizadas:

- `MongoDB`
- `Mongoose`
- `NodeJS`
- `Express`
- `Mocha`
- `Chai`
- `Should`
- `Javascript`
- `TDD`
- `Git`
- `Postman`
