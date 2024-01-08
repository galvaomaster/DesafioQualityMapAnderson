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



//import { Given, When, Then } from "cypress-cucumber-preprocessor/step_definitions";

// Given("i'm on the nopcommerce page", function () {
//     cy.visit('https://demo.nopcommerce.com/')
//     cy.title()
//         .should('be.equal', 'nopCommerce demo store')
//     cy.contains('a', 'Log in')
//         .click()

// })

// When("i type my email and password", function () {
//     cy.get('#Email')
//         .type('anderson@test.com')        
//     cy.get('#Password')
//         .type('123456')
//     cy.get('.login-button')
//         .click()    

// })

// Then("i have a successful login", function () {
//     cy.contains('a', 'My account')

// })


//   cy.get('#Email')
//      .type('anderson@test.com')        
//   cy.get('#Password')
//      .type('123456')
//   cy.get('.login-button')
//      .click()

//return true;
