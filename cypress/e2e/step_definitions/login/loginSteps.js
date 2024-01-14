/// <reference types="Cypress"/>


import { loginEmail, radomEmail, randomPass } from "../../data/dataFrontEnd";
import LoginPage from "./loginPage";


Given(/^i'm on the nopcommerce page$/, () => {
   LoginPage.visitPage()
   // cy.contains('a', 'Log in')
   //    .click()

});

When(/^i type my email$/, () => {
   LoginPage.fillEmail()

});

And(/^i type my password$/, () => {
   LoginPage.fillPassword()
   //LoginPage.submitButton()


});


And(/^i click on submit button$/, () => {
   LoginPage.submitButton()
});



Then(/^i have a successful login$/, () => {
   // cy.visit('https://demo.nopcommerce.com/login?returnurl=%2F')
   // cy.get('.topic-block-title > h2')
   // .should('have.string', 'test')
   LoginPage.successLogin()


});

