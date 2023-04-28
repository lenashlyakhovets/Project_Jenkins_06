/// <reference types="cypress" />


describe('first test', () => {
    beforeEach(() => {
        cy.visit('https://openweathermap.org/')
    })

    it.skip('verify link1', () => {
        cy.get('div.category-cards .card-body h5').contains('Elements').click()
        cy.get('#item-0 span').contains('Text Box').click()
        cy.get('#userName').type('Maria')
    })
    
    it('verify link1', () => {
        cy.get('div.category-cards .card-body h5').contains('Elements').click()
        cy.get('#item-0 span').contains('Text Box').click()
        cy.get('#userName').type('Maria')
    })
})
