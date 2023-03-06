Feature: Testando componentes e funcionalidades do site

Scenario: Validar itens do menu
  When realizar login com sucesso
  And clico no botão de "menu"
  Then verifico "itensMenu"

Scenario: Validar filtro de Z a A
  When realizar login com sucesso
  And clico no botão de "filtro"
  And clico no botão de "Z to A"
  Then verifico "ordenacaoZA"

Scenario: Validar filtro de Z a A
  When realizar login com sucesso
  And clico no botão de "filtro"
  And clico no botão de "low to high"
  Then verifico "ordenacaoLH"

Scenario: Validar filtro de Z a A
  When realizar login com sucesso
  And clico no botão de "filtro"
  And clico no botão de "high to low"
  Then verifico "ordenacaoHL"

Scenario: Validar icone do carrinho
  When realizar login com sucesso
  And escolho "5" produtos
  Then verifico "iconeCarrinho"

Scenario: Validar icone do carrinho retirando item
  When realizar login com sucesso
  And acesso o produtos "viaLink"
  And clico no botão de "AdicionarItem"
  And verifico "iconeCarrinhoAdd"
  And clico no botão de "removerItem"
  Then verifico "iconeCarrinhoRm"

Scenario: Validar acesso via link e imagem
  When realizar login com sucesso
  And acesso o produtos "viaLink"
  And clico no botão de "voltarHome"
  And acesso o produtos "viaImagem"
  Then verifico "acessoProduto"

Scenario: Validar itens da midia social
  When realizar login com sucesso
  Then verifico "midiaSocial"