/// <reference types="Cypress"/>

import { companyName, confirmPassword, radomEmail, randomDateOfBirthDay, randomDateOfBirthMonth, randomDateOfBirthYear, randomFirtName, randomLastName, randomPass, randonCompanyName, randonConfirmPassword ,site} from '../../data/dataFrontEnd';
import RegisterPage from './registerPage'


Given(/^that i am on the registration page$/, () => {
  RegisterPage.visitPageRegister()
  //  cy.visit('https://demo.nopcommerce.com/')
  //  cy.contains('a', 'Register')
  //    .click()
});


When(/^i fill in the required fields$/, () => {

  RegisterPage.maleGender()
  RegisterPage.firstName(randomFirtName)
  RegisterPage.lastName(randomLastName)
  RegisterPage.dateOfBirthDay(randomDateOfBirthDay)
  RegisterPage.dateOfBirthMonth(randomDateOfBirthMonth)
  RegisterPage.dateOfBirthYear(randomDateOfBirthYear)
  RegisterPage.email(radomEmail)
  RegisterPage.companyName(randonCompanyName)
  RegisterPage.password(randomPass)
  RegisterPage.ConfirmPassword(randonConfirmPassword)
  RegisterPage.registerButton()

});


Then(/^i have a success message$/, () => {
  cy.visit('https://demo.nopcommerce.com/registerresult/1?returnUrl=/')
  cy.contains('Your registration completed')
    .should('be.visible')


});


When(/^i do not fill the required fields$/, () => {

});


And(/^click on the register button$/, () => {
  RegisterPage.registerButton()
});



Then(/^i have an error_message$/, () => {

  RegisterPage.checkFirstNameErrorMessage()
  RegisterPage.checkLastNameErrorMessage()
  RegisterPage.checkEmailErrorMessage()
  RegisterPage.checkPasswordErrorMessage()
  RegisterPage.checkPasswordErrorMessage()

});

