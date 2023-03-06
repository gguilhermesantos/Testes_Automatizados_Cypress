Feature: Testando login do site

Scenario: Login sem senha
  Given acesso o site
  When preencho "login_userNameCorreto"
  And clico no botão de "login_btnLogin"
  Then verifico "login_mensagemSenhaNecessaria"

Scenario: Usuario bloqueado
  Given acesso o site
  When preencho "login_userNamebloqueado"
  And preencho "login_senha"
  And clico no botão de "login_login"
  Then verifico "login_mensagemuserBloqueado"

Scenario: Login sem dados
  Given acesso o site
  When clico no botão de "login_login"
  Then verifico "login_mensagemuserNecessaria"
  
Scenario: login com sucesso
  Given acesso o site
  When preencho "login_userNameCorreto"
  And preencho "login_senha"
  And clico no botão de "login_login"
  Then verifico "login_mensagemcomSucesso"
  