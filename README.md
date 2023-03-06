<a name="readme-top"></a>
# Testes Automatizados de frontend em Cypress

Este projeto tem o intuito de aprender a configurar e desenvolver automação de um site em Cypress.

## Inicializando

Estas instruções fornecerão uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Pré requisitos

* Ter inicializado e configurado um repositório git
* Ter conhecimentos no site: https://www.saucedemo.com/
* Ter instalado Node(https://nodejs.org/en/download/)

### Instalando

`npm init --yes` - cria o arquivo package.json 
`npm install -D cypress` ou `npm install cypress --save-dev` - Instalação do Cypress (node_modules)
`npm install --save-dev cypress-cucumber-preprocessor` - Instalação do cucumber para utilização da estrutura do Gherkin - está depressiado
`npm install --save-dev @cucumber/cucumber` - Instalação do cucumber para utilização da estrutura do Gherkin
`npx cypress open` - cria estrutura para o cypress e pode dar timeout na primeira vez.

Após aberto, clicar em **E2E Testing** > **Continue** > Escolher um navegador de sua preferencia e clicar em **Start E2E Testing in Chrome** e assim estará tudo pronto para começar o desenvolvimento.

Para utilizar BDD:

* Dentro da pasta `e2e` colocar os arquivos `.features`
* Dentro de `support` colocar os arquivos de definições dos passos - Dar preferência em utilizar page object
* Dentro de `support` colocar os arquivos de page object (page_object>elements)

* Colocar path dos arquivos do BDD e Page Object no arquivo `package.json` (cypress preprocessor)
(talvez seja o arquivo cypress.config.js)
Ex.
```
{
  "testFiles": "**/*.{feature,features,spec.js}",
  "ignoreTestFiles": [
    "**/1-getting-started/*.js",
    "**/2-advanced-examples/*.js"
  ]
}
```

No arquivo `cypress.config.js` configurar da seguinte forma:
```js
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}
```
No arquivo `package.json` configurar da seguinte forma:
```js
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

## Rodando testes

* Para iniciar o cypress:
`npx cypress open` - verifica o cypress pode ser executado (pode dar timeout na primeira vez) e criar a estrutura de pastas

* Após a abertura do Cypress, acessar E2E Testing, onde se executa toda a aplicação. Por fim, você verá a lista de navegadores compatíveis que o Cypress encontrou em seu sistema.

* Para rodar testes:
* No terminal, na pasta do projeto, rodar o comando:
```sh
npx cypress run --spec "cypress/integration/**/Sample.feature"
```
Caso rode sem a tag, vai rodar todos os testes

## Comandos úteis

### comandos GIT

```markdown
`git init` - Na pasta do projeto
`git add .` - Para adicionar todos os arquivos
`git add README.md` - Para adicionar o arquivo Readme.me
`git commit -m "message"` - Criar comentário do commit
`git config --global --edit` - Para editar o seu usuario e para configurar o repositório
`git push origin dev` - Enviar as mudanças para o repositório
`git checkout master` - Mudar para outro ganho do repositório
`git fetch` - Atualizar os repositórios locais com o servidor
`git pull` - Pegar as mudanças dos outros desenvolvedores
```

### Cypress

Utilizar nos arquivos `.spec.js` o comando `/// <reference types="cypress" />` para deixar mais facil o acesso à documentação e infos sobre os comandos
hooks
before - executa antes de todos os testes
beforeEach - Executa antes de cada teste
after - executa depois de todos os testes
afterEach - executa depois de cada teste

### Vim
Comandos para Vi:
```markdown
 `:q`  – Fecha o arquivo e encerra o Vim
 `:wq` – Salva as alterações, fecha o arquivo e encerra o Vim (junção dos comandos :w, que salva o arquivo, e :q para sair)
 `:q!` – Descarta as alterações, fecha o arquivo e encerra o Vim
```

### Criar chave ssh

Rodar comandos no terminal:
```sh
ssh-keygen -t ed25519 -C <email>
eval "$(ssh-agent -s)"
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
```
Colar no GitHub

### Caso não funcione acesso por ssh

Caso não funcione o push opte por esse metodo: [Clique aqui](https://www.doaction.com.br/en/blog/como-corrigir-o-erro-support-for-password-authentication-was-removed-please-use-a-personal-access-token-instead)

* vá em `Settings` e depois `Developer Settings`
* Clique em `Personal access tokens` e a seguir em `Tokens (classic)`
* Generate new token:
* Dê um nome para seu token em Note e a seguir marque os checkboxes para habilitar as permissões
  - Gerar o token
* Agora, você deve copiar o seu token:
  - A última etapa é adicionar o token recém copiado ao endereço do seu repositório remoto e assim subir alterações para o github:
```sh
git remote set-url origin https://{{TOKEN}}@github.com/gguilhermesantos/Testes_Automatizados_Cypress
git push -u origin master
```

### Links úteis
* [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
* [Instalação cucumber](https://cucumber.io/docs/installation/javascript/)
* [Vídeo sobre automação com Cypress](https://lnkd.in/dA6yqm5M)
* [Instalação Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)
* [Gherkin no cypress](https://dev.to/leading-edje/using-gherkin-with-your-cypress-tests-4p20)
* [Page Object no Cypress](https://dev.to/leading-edje/using-page-objects-in-cypress-co9)

### Tags para commit
Lista de tags e seus significados para commits:

* **feat:** São quaisquer adições ao código. Enquanto elas podem alterar parte do código já existente, o foco dela é a implementação de features novas ao sistema.
* **fix:** Soluciona um problema no código, ou seja, correção de bugs.
* **docs:** Alteração e criação de documentação.
* **refactor:** Refere-se a quaisquer mudanças no código, porém não alterem sua funcionalidade. Alteração de nome de variável ou função lógica, mas manteve a mesma funcionalidade.
* **test:** É usado para identificar alterações de desenvolvimento relacionadas a testes - como refatoração de testes existentes ou adição de novos testes.
* **perf:** Mudança de código que melhora o desempenho de algo.
* **revert:** Reverter um commit.
* **merge:** Junção de branchs.
* **conflict:** Resolução de conflitos.
* **bump:** Atualização de biblioteca ou framework

<p align="center">(<a href="#readme-top">Voltar ao topo</a>)</p>