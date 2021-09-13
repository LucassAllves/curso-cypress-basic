# curso-cypress-basic

[![pipeline status](https://gitlab.com/lucasgomesalves2015/curso-cypress-basic/badges/main/pipeline.svg)](https://gitlab.com/lucasgomesalves2015/curso-cypress-basic/-/commits/main)


Curso de automação de teste com Cypress da escola Talking About Testing.

					Curso:  TALKING ABOUT TESTING
PROF: Walmyr Filho

Instalação do cypress pela documentação:    https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements  

Inicialização o cypress:  https://docs.cypress.io/guides/getting-started/installing-cypress#Opening-Cypress 

Criar o arquivo .gitignore:   touch .gitignore 

Editar o arquivo .gitignore:   vi .gitignore
.DS_Store
cypress/screenshot/
cypress/videos/
node_modules/


Ver versões de mais de uma arquivo no terminal :    node -v && npm -v

Vamos configurar o nome do nosso projeto com o:  npm init 
Description: (nome do projeto)
Entry point: (index.js)
test command: cypress run 
git repository: (pode deixar em branco)
keywords: cypress, test automation, e2e
author: (Seu nome )
license: MIT


Intalando o cpress: npm install cypress –save-dev

Abrindo o cypress: npx cypress open
		
Iremos trabalhar nesta URL: https://ticket-box.s3.eu-central-1.amazonaws.com/index.html 

foi criado o arquivo cypress, aonde temos sub_pastas que iremos trabalhar:
Fixture: Aonde criamos os dados e massas para os testes;
Integration: Aonde deixaremos todos nossos testes criados;
Plugin: Aonde colocaremos todos nossos plugins;
Support: Aonde ficarão nossos comandos personalizados;
cypress_jason: Aonde ficará toda nossas configurações.
Commands: Aonde criaremos nossos comandos personalizados.


Visitando a página: https://docs.cypress.io/api/commands/visit#Syntax 
	
Digitando em campos(inputs) : https://docs.cypress.io/api/commands/type#Syntax 

Interagindo com select: https://docs.cypress.io/api/commands/select#Syntax   

Interagindo com radio buttons:  https://docs.cypress.io/api/commands/check#Syntax

Interagindo  com checkboxs: ckeck  https://docs.cypress.io/api/commands/check#Syntax
Uncheck  https://docs.cypress.io/api/commands/uncheck#Syntax 
																					
Realizando assertivas para validarmos os testes: https://docs.cypress.io/guides/references/assertions#Length 

Realizando comandos customizado: https://docs.cypress.io/api/cypress-api/custom-commands#Syntax 

Dado os comandos personalizado, não é boa prática usar page objects com cypress: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/ 

commitamos o projeto para o git lab  	https://gitlab.com/lucasgomesalves2015/curso-cypress-basic 

Agora vamos subir para o repositório que criamos: git remote add origin https://gitlab.com/lucasgomesalves2015/curso-cypress-basic.git

Vendo se está na branch que criamos: git remote update

Pegando o README.md que criamos da branch: git rebase origin/main	

Rodando do testes em modo headless para gerar vídeos e screenshots: npm test

configurando integração continua: touch .gitlab-ci.yml
Configuramos o nosso yml CI
	