/// <reference types="Cypress"/>

import { faker } from '@faker-js/faker';

// const user = {

//   firstName,
//   lastName

// }

//  userFirstName = faker.randomFirtName();
//  userLastName = faker.randomLastName();


const randomFirtName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomDateOfBirthDay = faker.number.int({ min: 1, max: 31 });
const randomDateOfBirthMonth = faker.date.month();
const randomDateOfBirthYear = faker.number.int({ min: 1, max: 110 });
const randomEmail = faker.internet.email();
const randomPass = faker.internet.password();
const companyName = 'Quality Map - Anderson Galvão'
const pass = '123456'


//const randomLastName = faker.person.lastName();
//const randomLastName = faker.person.lastName();


describe('Acesso a página', () => {


  beforeEach(function () {
    cy.visit('https://demo.nopcommerce.com/')
  })

  it('Validar o título da página', () => {
    cy.title()
      .should('be.equal', 'nopCommerce demo store')

  })

  it.only('Registro de um novo usuário com campos preenchidos', function () {
    cy.contains('a', 'Register')
      .click()
    cy.contains('strong', 'Your Personal Details')
    cy.get('#gender-male')
      .click()
    cy.get('#FirstName')
      .type(randomFirtName)
    cy.get('#LastName')
      .type(randomLastName)
    cy.get('[name="DateOfBirthDay"]')
      .select(randomDateOfBirthDay)
      .type(randomDateOfBirthDay)
    cy.get('[name="DateOfBirthMonth"]')
      .select(randomDateOfBirthMonth)
      .type(randomDateOfBirthMonth)
    cy.get('[name="DateOfBirthYear"]')
      .select(randomDateOfBirthYear)
    cy.get('#Email')
      .type(randomEmail)
    cy.get('#Company')
      .type(companyName)
    cy.get('#Newsletter')
      .check()
    cy.get('#Password')
      .type(pass)
    cy.get('#ConfirmPassword')
      .type(pass)
    cy.get('#register-button')
      .click()
    // cy.get('.result')
    // .should('have.value', 'Your registration completed')


    //xpath('a[contains(text(),"Register")]')
    // elemento Registrar //a[contains(@href, '/register?returnUrl=%2F')] 
  }),
    it('Validar Campos obrigatórios não preenchidos', function () {
      cy.contains('a', 'Register')
        .click()
      cy.contains('strong', 'Your Personal Details')
      // cy.get('#gender-male')
      // .click()
      // cy.get('#FirstName')
      // //.type('')    
      // cy.get('#LastName')
      // //.type('')
      // cy.get('#Email')
      // //.type('')
      // cy.get('#Password')
      // cy.get('#ConfirmPassword')    
      cy.get('#register-button')
        .click()
      cy.get('#FirstName-error')
        .should('be.visible')
      cy.get('#LastName')
        .should('be.visible')
      cy.get('#Email-error')
        .should('be.visible')


    })


})




