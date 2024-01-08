import { radomEmail, randomDateOfBirthDay, randomDateOfBirthMonth, randomDateOfBirthYear, randomFirtName, randomLastName, randomPass } from "../../data/data";



const maleGender = '#gender-male'
const firstName = '#FirstName'
const lastName = '#LastName'
const dateOfBirthDay = '[name="DateOfBirthDay"]'
const dateOfBirthMonth = '[name="DateOfBirthMonth"]'
const dateOfBirthYear = '[name="DateOfBirthYear"]'
const email = '#Email'
const companyName = '#Company'
const password = '#Password'
const confirmPassword = '#ConfirmPassword'
const registerButton = '#register-button'




class RegisterPage {
    static visitPageRegister() {
        cy.visit('/')
        cy.contains('a', 'Register')
            .click()


    }
    static maleGender() {
        cy.get(maleGender)
            .click()
    }
    static firstName() {
        cy.get(firstName)
            .type(randomFirtName)

    }
    static lastName() {
        cy.get(lastName)
            .type(randomLastName)
    }
    static dateOfBirthDay() {
        cy.get('[name="DateOfBirthDay"]')
            .select(randomDateOfBirthDay)
            //.click()
            //.type(randomDateOfBirthDay)
    }
    static dateOfBirthMonth() {
        cy.get('[name="DateOfBirthMonth"]')
            .select(randomDateOfBirthMonth)
           // .type(randomDateOfBirthMonth)
    }
    static dateOfBirthYear() {
        cy.get('[name="DateOfBirthYear"]')
            .select(randomDateOfBirthYear)
    }
    static email() {
        cy.get('#Email')
            .type(radomEmail)
    }
    static companyName() {
        cy.get('#Company')
            .type(companyName)
    }
    static password() {
        cy.get('#Password')
            .type(randomPass)
    }
    static ConfirmPassword() {
        cy.get('#ConfirmPassword')
            .type(confirmPassword)
    }
    static registerButton() {
        cy.get('#register-button')
            .click()
    }


}

export default RegisterPage