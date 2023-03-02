Feature: Testando login do site

Scenario: Login sem senha
  When preencho "userName"
  And clico em "login"
  Then verifico "mensagemSenhaNecessaria"

Scenario: Usuario bloqueado
  When preencho "userNameBloqueado"
  And preencho "senha"
  And clico em "login"
  Then verifico "mensagemUserBloqueado"

Scenario: Login sem dados
  When preencho "userNameVazio"
  And preencho "senhaVazia"
  And clico em "login"
  Then verifico "mensagemUserNecessaria"
  
Scenario: login com sucesso
  When preencho "userName"
  And preencho "senha"
  And clico em "login"
  Then verifico "loginComSucesso"
  