import { loginEmail, radomEmail, randomPass } from "../../data/data";




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
    static successLogin() {

    }

}


export default LoginPage