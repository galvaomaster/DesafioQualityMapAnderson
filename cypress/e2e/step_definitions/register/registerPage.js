import { site, radomEmail, randomDateOfBirthDay, randomDateOfBirthMonth, randomDateOfBirthYear, randomFirtName, randomLastName, randomPass, randonConfirmPassword , randonCompanyName} from "../../data/dataFrontEnd";



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
const firstNameErrorMessage = '#FirstName-error'
const lastNameErrorMessage = '#LastName-error'
const emailErrorMessage = '#Email-error'
const passwordErrorMessage = '#Password-error'







class RegisterPage {
    static visitPageRegister() {
        cy.visit(site)
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
        cy.get(dateOfBirthDay)
            .select(randomDateOfBirthDay)
            //.click()
            //.type(randomDateOfBirthDay)
    }
    static dateOfBirthMonth() {
        cy.get(dateOfBirthMonth)
            .select(randomDateOfBirthMonth)
           // .type(randomDateOfBirthMonth)
    }
    static dateOfBirthYear() {
        cy.get(dateOfBirthYear)
            .select(randomDateOfBirthYear)
    }
    static email() {
        cy.get(email)
            .type(radomEmail)
    }
    static companyName() {
        cy.get(companyName)
            .type(companyName)
    }
    static password() {
        cy.get(password)
            .type(randomPass)
    }
    static ConfirmPassword() {
        cy.get(confirmPassword)
            .type(randonConfirmPassword)
    }
    static registerButton() {
        cy.get(registerButton)
            .click()
    }
    static checkFirstNameErrorMessage (){
        cy.get(firstNameErrorMessage).should('contain.text', 'First name is required.')
    }
    static checkLastNameErrorMessage (){
        cy.get(lastNameErrorMessage).should('contain.text', 'Last name is required.')
    }
    static checkEmailErrorMessage (){
        cy.get(emailErrorMessage).should('contain.text', 'Email is required.')
    }
    static checkPasswordErrorMessage (){
        cy.get(passwordErrorMessage).should('contain.text', 'Password is required.')
    }


}

export default RegisterPage