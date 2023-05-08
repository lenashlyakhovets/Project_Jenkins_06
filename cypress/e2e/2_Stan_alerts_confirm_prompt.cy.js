/// <reference types="cypress" />

describe('DemoQA Alert window', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/alerts');        
    })    

    it('Verification of the alert window', () => {
        cy.get('#alertButton').click();        
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button');
        })
    });

    it('Verification of the confirm window (click Ok)', () => {
        cy.get('#confirmButton').click();        
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?');
        });
        cy.get('#confirmResult')
          .should('contain', 'Ok')
          .and('contain', 'You selected');
    });

    it('Verification of the confirm window (click Cancel)', () => {
        cy.get('#confirmButton').click();        
        cy.on('window:confirm', () => false);                   //variant 1                        
        // cy.on('window:confirm', (str) => {
        //     expect(str).to.equal('Do you confirm action?')   //variant 2
        //     return false;
        // });
        cy.get('#confirmResult')
          .should('contain', 'Cancel')
          .and('contain', 'You selected');
    });

    it('Verification of the prompt window', () => {                
        cy.window().then((inputData) => {
            cy.get('#promtButton').click();
            cy.stub(inputData, 'prompt').returns('JavaScript');
            cy.get('#promptResult')
              .should('contain', 'JavaScript')
              .and('contain', 'You entered ');
        });
    });
});