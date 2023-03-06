import loginElements from '../elements/LoginElements'

class LoginPage {
  acessarSite() {
    cy.visit('https://www.saucedemo.com/')
  }
  
  preencherCampo(campo){
    const inputCampo = campo.split('_')[1]
    const valueCampo = campo.split('_')[1]+"Value"

    cy.get(loginElements.inputCampo).type(Cypress.env(valueCampo))
  }

  clicabtn(botao){
    cy.get(loginElements.campo.split('_')[1]).click()
  }

  validaMsg(mensagem){
    const CampoMsg = mensagem.split('_')[1]
    const valueMsg = mensagem.split('_')[1]+"Value"

    cy.get(loginElements.CampoMsg()).should('contains.text', valueMsg)
  }
}