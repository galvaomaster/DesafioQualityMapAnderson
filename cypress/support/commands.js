// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import { Faker } from "@faker-js/faker";


Cypress.Commands.add('postUser', function (user) {

    cy.api({
        url: '/usuarios',
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: user,
        failOnStatusCode: false

    }).then(response => {
        return response

    })



})



Cypress.Commands.add('getAll', function (method, url, body, headers) {


    cy.api({
        url: '/usuarios',
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body,
        failOnStatusCode: false

    }).then(response => {
        return response
        //expect(response.status).to.eq(201)
        //cy.log(JSON.stringify(response.body))
    })
})


Cypress.Commands.add('deleteUser', function (body) {


    cy.api({
        url: '/usuarios',
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body,
        failOnStatusCode: false

    }).then(response => {
        const userId = response.body._id


        cy.api({
            url: '/usuarios/' + userId,
            method: 'DELETE',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body,
            failOnStatusCode: false

        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Registro excluído com sucesso")

        })


    })



})

