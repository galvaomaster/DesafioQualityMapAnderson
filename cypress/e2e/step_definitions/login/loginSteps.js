/// <reference types="Cypress"/>


import { radomEmail, randomPass } from "../../data/data";
import LoginPage from "./loginPage";


Given(/^i'm on the nopcommerce page$/, () => {
   LoginPage.visitPage()
   cy.contains('a', 'Log in')
      .click()

});

When(/^i type my email$/, () => {
   LoginPage.fillEmail(radomEmail)

});

And(/^i type my password$/, () => {
   LoginPage.fillPassword(randomPass)
   LoginPage.submitButton()

});


Then(/^i have a successful login$/, () => {
   cy.contains('a', 'Log out')


});

