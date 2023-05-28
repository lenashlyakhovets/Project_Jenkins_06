/// <reference types="cypress" />

describe('testing tables', () => {
    
    beforeEach(() => {
        cy.viewport(1920, 1080);                
    })

    it('Sort a table alphabetically', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:first-child').then(($els) => {
            let actualStates = Cypress.$.makeArray($els).map(($el) => $el.innerText);
            let expectedStates = actualStates.slice().sort();
            //expect(actualStates).to.deep.equal(expectedStates);
            //expect(actualStates).to.include.members(expectedStates);
            expect(actualStates).to.have.ordered.members(expectedStates);
        });
    }); 
    
    it('Sort a table alphabetically', () => {
        cy.visit('https://openweathermap.org/api/history-data-state');
        cy.get('table.material-table td:last-child').then(($els) => {
            let arr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
            let sum = arr
              .map((el) => +el.replace(/\D/g, ''))
              .reduce((sum, el) => sum + el, 0);
        });
    });

    it('Sort a table by keys', () => {
        cy.visit('https://demoqa.com/webtables');
        cy.getTable().then(arr => {
            cy.get('div.rt-th:first-child').click();
            cy.getTable().then(actArr => {
                let expArr = arr.sort((a, b) => a['First Name'].localeCompare(b['First Name']));
                expect(actArr).to.deep.equal(expArr)
            });            
        });
    });
});