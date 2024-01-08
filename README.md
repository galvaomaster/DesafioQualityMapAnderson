# Desafio Quality Map


## Pré-requisitos

- NodeJS instalado;
- Gerenciador de Pacotes(Yarn);
- Git;
- IDE (VSCode);
- Cucumber (Gherkin) ;


## Instalação

### NodeJS

- Acessar o link [https://nodejs.org/](https://nodejs.org/), baixar e instalar o NodeJS versão 20;
- Ao baixar o NodeJS, o gerenciador de pacotes YARN virá junto. Para verificar a instalação do NodeJS e do Yarn, abrir o Prompt de Comando (em qualquer pasta) e digitar:

Para verificar a instalação/versão do pacote NodeJS (deve retornar algo como v20.10.0):

``node --version `` 

### Yarn

Para verificar a instalação/versão do gerenciador de pacoted Yarn, deve-se acessar o terminal, digitar o comando ``yarn -version ``. 
Deve retornar v1.22.19


 depois
### Faker JS 

 ```https://fakerjs.dev/guide//```
npm add @faker-js/faker --dev


cucumber pre processor
npm install --save-dev cypress-cucumber-preprocessor

### Git

Acessar o link [https://git-scm.com/downloads](https://git-scm.com/downloads), baixar e instalar o Git/GitBash;
 - Após instalado acessar o diretório que deseja clonar o projeto, e via terminal (GitBash) digitar:

``git clone https://github.com/ ``
 - Para rodar o cypress, deverá acessar o diretório ao qual deverá rodar a automação Front/Back o comando *yarn add cypress -D* na pasta raiz do projeto
 - /AutomacaoFrontEnd
 - /AutomacaoBackEnd

## Execução dos testes

- No terminal do VSCode deve ser executado o seguinte comando para que o Cypress possa ser executado:

`` yarn  cypress open``

- Selecionar a opção *E2E Testing*
- Selecionar o navegador de sua preferência (*Google Chrome recomendado*)
- Executar o teste de sua preferência

## O que pode ser aprimorado
- Criação de novos usuários de forma automática, sem a necessidade de efetuar este passo de forma manual.
- Tornar o usuário que efetua a reserva dinâmico, para que o mesmo não falhe caso seja executado mais de uma vez no mesmo dia.
- Padronização dos seletores (foi utilizado mais de um tipo em caráter de amostragem de conhecimento apenas).