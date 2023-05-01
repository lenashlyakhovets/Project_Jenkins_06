/// <reference types="cypress" />

describe('DemoQA Menu-titles', () => {
    const expectedMenuItemNames = [
        'Elements',
        'Forms',
        'Alerts, Frame & Windows',
        'Widgets',
        'Interactions',
        'Book Store Application',
    ];

    it('Verification menu item names', function() {
        cy.visit('https://demoqa.com');
        cy.get('.card').should('have.length', expectedMenuItemNames.length).each(($el, idx) => {
            expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);        
        });
    });
})