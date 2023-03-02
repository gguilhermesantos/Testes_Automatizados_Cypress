Feature: Testando login do site

Scenario: Login sem senha
  When I open the to-do page
  Then 2 to-do items are displayed
  And to-do item 1 is "Pay electric bill"

 validar sem itens / checkout tirando um item / validar overview // complete