import { loginEmail, loginPhpTravels, passPhpTravels, radomEmail, randomPass, site } from "../../data/dataFrontEnd";
const EMAIL_INPUT = '#Email'
const PASSWORD_INPUT = '#Password'
const LOGIN_BUTTON = '.login-button'




class LoginPage {
    static visitPage() {
        cy.visit(site)
        cy.contains('a', 'Log in')
            .click()
    }
    static fillEmail() {
        cy.get(EMAIL_INPUT)
            .type(loginEmail)
    }
    static fillPassword() {
        cy.get(PASSWORD_INPUT)
            .type(randomPass)
    }
    static submitButton() {
        cy.get(LOGIN_BUTTON)
            .click()
    }
    static successLogin() {
        cy.get('.ico-account')
            .should('be.visible')

    }

}


export default LoginPage