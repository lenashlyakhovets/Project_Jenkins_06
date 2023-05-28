/// <reference types="cypress" />

import {endPointUrl, sidePanelItems} from '../fixtures/homePage.json';

describe('Header Searh Box', () => {
    beforeEach(function () {
        cy.visit(`http://localhost:8080/login`);
        cy.get('#j_username').type('admin');
        cy.get('input[name="j_password"]').type('admin');
        cy.get('button[name="Submit"]').click();
        cy.get('#side-panel #tasks a').as('sideMenuLinks');
    });
    
    sidePanelItems.forEach((pageName, ind) => {
        it(`verify searchBox is on ${pageName} page`, function () {
            cy.wrap(this.sideMenuLinks[ind]).click();
            //cy.get('@sideMenuLinks').eq(ind).click();
            cy.url().should('contain', endPointUrl[ind]);

            cy.get('#searchform input').should('be.visible');
        });
    });
});
