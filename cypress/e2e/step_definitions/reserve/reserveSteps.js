/// <reference types="Cypress"/>
require('cypress-xpath');
import ReservePage from './reservePage'
import { adult1FirstName, adult1LastName, adult2FirstName, adult2LastName, adult3FirstName, adult3LastName, emailPhpTravels, passPhpTravels, phpSite } from '../../data/dataFrontEnd';




Given(/^I am logged in to the reservation page$/, () => {
	ReservePage.visitPageReserve()
});

When(/^I search for a trip to Dubai$/, () => {
	cy.visit(phpSite + '/dashboard')
	cy.contains('span', 'Welcome Back').should('be.visible')
	cy.contains('a', 'Hotels').should('be.visible')
		.click()

});

And(/^I find a five-star hotel$/, () => {
	cy.visit(phpSite + '/hotels')
	cy.contains('strong', 'Search for best hotels')
	cy.contains('small', 'United Arab Emirates')
	// cy.get('.form-group > .dropdown > .dropdown-toggle')
	// 	.click()
	cy.get('b')
		.click()
	cy.get('.most--popular-hotels > :nth-child(2)')
		.click()
	cy.get('.form-group > .dropdown > .dropdown-toggle')
		.click()

	cy.get('#hotels_adults')
		.click()
		.clear()
		.type(3)
	cy.get('#nationality').select('Italy')
	cy.get('.form-group > .dropdown > .dropdown-toggle')
		.click()

	cy.get('button[type="submit"]')
		.click()
	//cy.wait(6000)

	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
	})

	cy.get('.pb-5 > .container')

	//cy.get(':nth-child(2) > .card > .card-body > .text-nowrap > strong')
	// cy.xpath('//p//strong[contains(text(),"Grand Mercure Hotel and Residences Dubai Airport")]')
	// .as('grandMercureHotel')
	//cy.xpath('//*[@id="fadein"]/div[5]/div/div/div[28]/div/div[2]/a')
	cy.wait(5000)
	cy.xpath('//p//strong[contains(text(),"Grand Mercure Hotel and Residences Dubai Airport")]')
	//cy.xpath('//*[@id="fadein"]/div[5]/div/div/div[26]/div/div[2]/a')
	// .should('have.length', 5)
	//cy.contains('strong', 'Saffron Boutique Hotel ')
	// .should('be.visible')
	//cy.get('#fadein > div.pb-5 > div > div > div:nth-child(28) > div > div.card-body.p-1.overflow-hidden > a')
	cy.contains('a', 'View More ')
		.click()

	//noco codigo

	cy.get('.justify-content-end > .d-none')

	cy.get(':nth-child(6) > .col-xl-10 > .mt-sm-3 > form > .row > .order-2 > .d-lg-flex > .col-xl-5 > div > .btn')
		.click()
	cy.get(':nth-child(1) > .card-body > .row > :nth-child(2) > .form-floating > .form-control')
		.type(adult1FirstName)
	cy.get(':nth-child(1) > .card-body > .row > :nth-child(3) > .form-floating > .form-control')  //lastname
		.type(adult1LastName)
	cy.get(':nth-child(2) > .card-body > .row > :nth-child(2) > .form-floating > .form-control')
		.type(adult2FirstName)
	cy.get(':nth-child(2) > .card-body > .row > :nth-child(3) > .form-floating > .form-control')
		.type(adult2LastName)

	cy.get(':nth-child(3) > .card-body > .row > :nth-child(2) > .form-floating > .form-control')
		.type(adult3FirstName)
	cy.get(':nth-child(3) > .card-body > .row > :nth-child(3) > .form-floating > .form-control')
		.type(adult3LastName)


});//

And(/^I pay for the reservation with Pay Later$/, () => {

	cy.get('#gateway_pay_later')
		.check()
	cy.get('#agreechb')
		.check()

	cy.get('#booking')
		.click({force: true})

});

Then(/^the hotel must be booked successfully$/, () => {

	cy.contains('strong', 'Pay With')
		.should('be.visible')

});
