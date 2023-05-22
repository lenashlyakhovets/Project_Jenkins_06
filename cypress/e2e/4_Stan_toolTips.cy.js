/// <reference types="cypress" />

describe('Tool tips testing', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);                
    }) 
    
    it('Test #1', () => {
        cy.visit('https://demoqa.com/tool-tips');
        cy.get('#toolTipButton').trigger('focus');        
        cy.get('#buttonToolTip').should('be.visible');
        cy.get('.tooltip-inner').should('have.text', 'You hovered over the Button');
    });       
});