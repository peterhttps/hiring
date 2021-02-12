<h1 align="center">Stock Market</h1>
<h4 align="center">
  Quer analizar o mercado financeiro de um jeito simples?
</h4>
<p align="center">
  <img alt="GitHub Repo Size" src="https://img.shields.io/github/repo-size/peterhttps/hiring"/>
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/peterhttps/hiring"/>
   <img alt="GitHub Stars" src="https://img.shields.io/github/stars/peterhttps/hiring"/>
   <img alt="GitHub Issues" src="https://img.shields.io/github/issues/peterhttps/hiring"/>
  </p>

<p align="center">
	<a href="#white_check_mark-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-iniciar">Como iniciar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-testes">Testes</a>
</p>


![](https://i.imgur.com/MJ4GMav.png)

<p align="center">
  <a href="https://stock-market-one.vercel.app/">Testar aplicação</a>
</p>

## :white_check_mark: Features
Dentre as features temos:
-  Incluir ações no portfólio (persistem localmente mesmo após sair da aplicação)
- Ver informações de uma ação
- Ver histórico de preços de uma ação 
-  Fazer simulações de ganhos ou perdas baseado em datas passadas
-  Comparar com ações com outras ações
- Responsividade
- Tema escuro 

## :rocket: Tecnologias 

Este projeto foi desenvolvido com React.js e utiliza styled-components para estilização, além da Context API e 
Local Storage para armazenamento local de informações.  

-  [ReactJS](https://reactjs.org/)
-  [Context API](https://reactjs.org/docs/context.html)
- [Redux-Persist](https://github.com/rt2zz/redux-persist)
-  [Hooks](https://reactjs.org/docs/hooks-reference.html)
- [styled-components](https://styled-components.com/)

## :information_source: Como iniciar

```bash
# Clone este repositório
$ git clone https://github.com/peterhttps/hiring

# Entre na pasta React
$ cd React

# Instale as dependências
$ yarn install

# Suba a aplicação
$ yarn start
```
Você deve criar um arquivo chamado .env na pasta "React" e adicionar à variável de ambiente REACT_APP_ALPHA_API_KEY sua api key da [Alpha Vantage](https://www.alphavantage.co/)
`REACT_APP_ALPHA_API_KEY=suakey`

## :memo: Testes

Testes unitários de componentes com a criação de Mock.

<p>Para rodar os testes automatizados</p>

```bash
# Rodar testes
$ yarn test
```

---


:triangular_flag_on_post: [Get in touch!](https://www.linkedin.com/in/peterparts/)
