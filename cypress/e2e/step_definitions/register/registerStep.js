/// <reference types="Cypress"/>
import { companyName, confirmPassword, radomEmail, randomDateOfBirthDay, randomDateOfBirthMonth, randomDateOfBirthYear, randomFirtName, randomLastName, randomPass } from '../../data/data';
import RegisterPage from './registerPage'


Given(/^that i am on the registration page$/, () => {
 RegisterPage.visitPageRegister('/')
  //  cy.visit('https://demo.nopcommerce.com/')
  //  cy.contains('a', 'Register')
  //    .click()
});


// When(/^i fill in the required fields$/, () => {
// 	RegisterPage.maleGender()
// });



When(/^i fill in the required fields$/, () => {
 
  RegisterPage.maleGender()
  RegisterPage.firstName(randomFirtName)
  RegisterPage.lastName(randomLastName)
  RegisterPage.dateOfBirthDay('10')
  RegisterPage.dateOfBirthMonth(randomDateOfBirthMonth)
  RegisterPage.dateOfBirthYear(randomDateOfBirthYear)
  RegisterPage.email(radomEmail)
  RegisterPage.companyName(companyName)
  RegisterPage.password(randomPass)
  console.log(randomPass)
  console.log(confirmPassword)
  RegisterPage.ConfirmPassword(randomPass)
  RegisterPage.registerButton()

});


Then(/^i have a success message$/, () => {
  cy.visit('https://demo.nopcommerce.com/registerresult/1?returnUrl=/')
  cy.contains('a', 'Continue')
  //cy.get('.result')
  //  .should('have.value', 'Your registration completed')
});




// userFirstName = faker.randomFirtName();
// userLastName = faker.randomLastName();


// const randomFirtName = faker.person.firstName();
// const randomLastName = faker.person.lastName();
// const randomDateOfBirthDay = faker.number.int({ min: 1, max: 31 });
// const randomDateOfBirthMonth = faker.date.month();
// const randomDateOfBirthYear = faker.number.int({ min: 1, max: 110 });
// const randomEmail = faker.internet.email();
// const randomPass = faker.internet.password();
// const companyName = 'Quality Map - Anderson Galvão'
// const pass = '123456'








// Given(/^i'm on the nopcommerce page$/, () => {
//   cy.visit('/')
//   cy.title()
//     .should('be.equal', 'nopCommerce demo store')
//   cy.contains('a', 'Log in')
    
// });

// When(/^i fill in the required fields$/, () => {
//   cy.contains('a', 'Register')
//     .click()
//   cy.contains('strong', 'Your Personal Details')
//   cy.get('#gender-male')
//     .click()
//   cy.get('#FirstName')
//     .type(randomFirtName)
//   cy.get('#LastName')
//     .type(randomLastName)
//   cy.get('[name="DateOfBirthDay"]')
//     .select(randomDateOfBirthDay)
//     .type(randomDateOfBirthDay)
//   cy.get('[name="DateOfBirthMonth"]')
//     .select(randomDateOfBirthMonth)
//     .type(randomDateOfBirthMonth)
//   cy.get('[name="DateOfBirthYear"]')
//     .select(randomDateOfBirthYear)
//   cy.get('#Email')
//     .type(randomEmail)
//   cy.get('#Company')
//     .type(companyName)
//   cy.get('#Newsletter')
//     .check()
//   cy.get('#Password')
//     .type(pass)
//   cy.get('#ConfirmPassword')
//     .type(pass)
//   cy.get('#register-button')
//     .click()


//   //return true;
//});