
import { user, userDeleted } from "../../data/dataBackEnd";


Given(/^I access serverrest.de using POST method$/, () => {

});

Then(/^the user should be create successfully$/, () => {

    cy.postUser(user)
        .then(response => {
            expect(response.status)
                .to.eq(201)
        })


});

Given(/^I access serverrest.de using DELETE method$/, () => {

});

// Then(/^the user should be deleted successfully$/, () => { 
// });

Then(/^the user should be shown bad request$/, () => {
    cy.postUser(user)
        .then(response => {
            expect(response.status).to.eq(400)
            expect(response.body.message).to.eql('Este email já está sendo usado')

        })
});

Given(/^I access serverrest.de using GET method$/, () => {
    return true;
});

Then(/^all the users should be listed$/, () => {
    cy.getAll(user)
        .then(response => {
            expect(response.status).to.eq(200)

        })
        .its('body.quantidade')
        .should('be.gt', 0)

});


Then(/^the user should be deleted successfully$/, () => {

    cy.deleteUser(userDeleted)
        // .then(response => {
        //     expect(response.body.message).to.eq("Registro excluído com sucesso")

        // })

});
