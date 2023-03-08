import { elementosLogin } from '../support/page_object/elementos_login.js';
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("acesso o site acesso o site", () => {
    loginPage.acessarSite();
})

When("preencho {String}", (campo) => {
    if (campo.split('_')[0] == "login") {
        loginPage.preencherCampo(campo);
    } else {
        cy.log("Erro");
    }
})

And("clico no botão de {String}", (botao) => {
    if (botao.split('_')[0] == "login") {
        loginPage.clicabtn(botao);
    } else {
        cy.log("Erro");
    }
})

Then("verifico {String}", (mensagem) => {
    if (mensagem.split('_')[0] == "login") {
        loginPage.validaMsg(mensagem);
    } else {
        cy.log("Erro");
    }
})