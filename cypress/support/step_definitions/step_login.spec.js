import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage} from '../../support/page_object/loginPage.js';

Given('acesso o site', () => {
    LoginPage.acessarSite();
    //cy.visit('https://www.saucedemo.com/');
})

When('preencho "([^"]*)"', (campo) => {
    if (campo.split('_')[0] == "login") {
        LoginPage.preencherCampo(campo);
    } else {
        cy.log("Erro");
    }
})

When('clico no botão de "([^"]*)"', (botao) => {
    if (botao.split('_')[0] == "login") {
        LoginPage.clicabtn(botao);
    } else {
        cy.log("Erro");
    }
})

Then('verifico "([^"]*)"', (mensagem) => {
    if (mensagem.split('_')[0] == "login") {
        LoginPage.validaMsg(mensagem);
    } else {
        cy.log("Erro");
    }
})