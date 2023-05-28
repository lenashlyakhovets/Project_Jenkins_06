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

Cypress.Commands.add('getTable', () => {
    let keysArr;
    let table = [];
    cy.get('div.rt-table').within(() => {
        cy.get('div.rt-th').then(($els) => {
            keysArr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
        });
        cy.get('div.rt-tr-group').each((_, row) => {
            cy.get('div.rt-tr-group')
              .eq(row)
              .find('div.rt-td')
              .then(($els) => {
                let dataArr = Cypress.$.makeArray($els).map(($el) => $el.innerText);
                let tempObj = dataArr.reduce((obj, el, idx) => {
                    return { ...obj, [keysArr[idx]]: el };
                }, {});
                if (tempObj['First Name'].trim() != '') {
                    table.push(tempObj);
                }
              });
        });
    });
    return cy.wrap(table);
});