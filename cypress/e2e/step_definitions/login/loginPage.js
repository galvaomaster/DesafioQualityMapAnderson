//import { faker } from '@faker-js/faker';
import { loginEmail, radomEmail, randomPass } from "../../data/data";
// const radomEmail =  faker.internet.email()
// const randomPass = faker.internet.password()
const EMAIL_INPUT = '#Email'
const PASSWORD_INPUT = '#Password'
const SUBMIT_BUTTON = '.login-button'




class LoginPage {
    static visitPage() {
        cy.visit('/')
    }
    static fillEmail(email) {
        cy.get(EMAIL_INPUT)
            .type(loginEmail)
    }
    static fillPassword(password) {
        cy.get(PASSWORD_INPUT)
            .type(randomPass)
    }
    static submitButton() {
        cy.get(SUBMIT_BUTTON)
            .click()
    }
    static successLogin(){

    }

}


export default LoginPage