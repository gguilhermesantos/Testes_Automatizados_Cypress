/// <reference types="Cypress" />
import {LoginElements} from '../elements/loginElements';
//const loginElements = new LoginElements

export class LoginPage {
  acessarSite() {
    cy.visit('https://www.saucedemo.com/');
  }

  preencherCampo(campo){
    const inputCampo = campo.split('_')[1];
    const valueCampo = campo.split('_')[1]+"Value";

    cy.get(LoginElements.inputCampo).type(Cypress.env(valueCampo));
  }

  clicabtn(botao){
    cy.get(LoginElements.campo.split('_')[1]).click();
  }

  validaMsg(mensagem){
    const CampoMsg = mensagem.split('_')[1];
    const valueMsg = mensagem.split('_')[1]+"Value";

    cy.get(LoginElements.CampoMsg()).should('contains.text', valueMsg);
  }
}

//module.exports = new LoginPage(); tirei por conta do export class