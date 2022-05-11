# API Rest 1 - GSW

<br>

# Resumo do Projeto

O Desafio proposto na primeira avaliação é a criação de uma API utilizando NodeJS, Mongo para armazenar as informações de jogadores. Devendo conter um CRUD para cadastrar as informações de cadastro de usuário, como nome do jogador e coin (moedas), salvando a quantidade de moedas que o jogador possui. Tendo como diferencial que as informações de medalhas e troféus não serão ser salvas no banco, e sim calculados no momento em que a API for responder. Ao final da realização deve ser utilizado o conceito de TDD para o desenvolvimento dos testes. 

<br>

## Desenvolvimento orientado a teste/ Test Driven Development TDD

![Test Driven Development (TDD)](https://user-images.githubusercontent.com/80925387/167756040-c2dba9fa-c55c-4e74-bbd0-cb8ba6ca4a86.png)

## Ciclo de desenvolvimento

### Red,Green, Refactor:

### Escrever um Teste que inicialmente não passa (Red):
![codigo_teste1](https://user-images.githubusercontent.com/80925387/167759346-1ab42ede-cf49-43e9-b491-a616157e7473.PNG)
![codigo_teste2](https://user-images.githubusercontent.com/80925387/167759360-c8bed1a4-a662-489f-ac9f-b0219b3095e7.PNG)
![erro_teste1](https://user-images.githubusercontent.com/80925387/167759381-c9ebfa0d-f624-45de-8d7f-b12930b8c526.PNG)

<br>

### Adicionar uma nova funcionalidade do sistema:
![codigo_teste2_rotas](https://user-images.githubusercontent.com/80925387/167759475-819d587e-896f-4af2-8312-44270c77cd1f.PNG)
![codigo_teste2](https://user-images.githubusercontent.com/80925387/167759547-571a9e99-737d-4416-b66c-184becf00ae2.PNG)
![codigo_teste2_app](https://user-images.githubusercontent.com/80925387/167759564-bfdf9880-eea6-4ab5-a0d2-b0262ba9abe3.PNG)

<br>

### Fazer o Teste passar (Green):
![teste_2](https://user-images.githubusercontent.com/80925387/167759669-f4eec432-b235-4aa1-8029-ac76ec5c21d6.PNG)


### Refatorar código da nova funcionalidade (Refactoring):
![logica_teste3](https://user-images.githubusercontent.com/80925387/167760239-bf8334fa-a458-4363-a4a5-19d8b68af2a9.PNG)
![codigo_app_teste3](https://user-images.githubusercontent.com/80925387/167760256-b2d36803-93a2-4a5f-8cbc-3e63844be7dc.PNG)
![resultado_teste3](https://user-images.githubusercontent.com/80925387/167760338-d3c3b206-1672-4a57-831d-f0409911784a.PNG)



# Tecnologias Utilizadas:

- MongoBD
- Mongoose
- Postman
- JavaScript
- NodeJs
- Node Express
- GIT
- Conceitos de TDD
