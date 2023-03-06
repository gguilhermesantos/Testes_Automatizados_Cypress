Feature: Testando fluxo do site

Scenario: Seguir fluxo tirando itens do carrinho
  When realizar login com sucesso
  And escolho "3" produtos
  And clico no botão de "carrinho"
  And removo itens do carrinho
  And clico no botão de "checkout"
  And preencho checkout com "dadosCorretos"
  And clico no botão de "continue"
  Then valido que existe um item a menos

Scenario: Seguir fluxo até completar compra
  When realizar login com sucesso
  And escolho "3" produtos
  And clico no botão de "carrinho"
  And clico no botão de "checkout"
  And preencho checkout com "dadosCorretos"
  And clico no botão de "continue"
  And clico no botão de "Finalizar"
  Then verifico "mensagemPedidoSucesso"