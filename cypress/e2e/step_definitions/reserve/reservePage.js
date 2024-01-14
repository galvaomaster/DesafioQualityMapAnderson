
import { emailPhpTravels, passPhpTravels, phpSite } from '../../data/dataFrontEnd';


class ReservePage {

    static visitPageReserve() {
        cy.visit(phpSite)
        cy.title('PHPTRAVELS')
        cy.contains('strong', 'Account').should('be.visible')
            .click()
        cy.contains('a', 'Login').should('be.visible')
            .click()
        cy.visit(phpSite + '/login')
        cy.title('Login')
        cy.get('#email')
            .type(emailPhpTravels)
        cy.get('#password')
            .type(passPhpTravels)
        cy.get('#submitBTN')
            .click()

        ///  Pesquisa Hotel
        // cy.get('#select2-hotels_city-container')
        //     .click({ force: true })
        // cy.get('.select2-search__field').type('Dubai{enter}', { force: true });
        // cy.findByText('Dubai,United Arab Emirates').click();
        // cy.get('.input-box > :nth-child(2) > .dropdown > .dropdown-toggle').click({ force: true });
        // cy.get('#nationality').select('Italy', { force: true });
        // cy.get(':nth-child(2) > .qty-box > .qtyBtn > .qtyInc').click({ force: true });
        // cy.get(':nth-child(3) > .qty-box > .qtyBtn > .qtyInc').dblclick({ force: true });
        // cy.get('#ages1').select('3', { force: true });
        // cy.get('#ages2').select('3', { force: true });
        // cy.get('#submit').click({ force: true });
        // cy.get(':nth-child(5) > .custom-checkbox > .custom-control-label').click({ force: true });
        // cy.wait(2000)
        // cy.xpath('//*[@id="jumeirah beach hotel"]/div/div[1]').click();
        // cy.xpath('//*[@id="availability"]/div[3]/div[2]/div').should('contain', 'Adults 4', '');
        // cy.xpath('//*[@id="availability"]/div[3]/div[2]/div').should('contain', 'Child 2');
        // cy.xpath('//*[@id="availability"]/div[3]/div[2]/div/div[2]/form/div/div[5]/div/button').click({ force: true });








    }



}
export default ReservePage