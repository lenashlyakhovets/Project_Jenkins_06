/// <reference types="cypress"/>

describe('API testing', () => {
    let token, expires;

    it('Autorization', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/Authorized',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                userName: 'StanP.',
                password: '_StanP.@1_',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.be.equal(200)
            //console.log(response);
        });
    });

    it('Generate token', () => {
        cy.request({
            method: 'POST',
            url: 'https://demoqa.com/Account/v1/GenerateToken',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: {
                userName: 'StanP.',
                password: '_StanP.@1_',
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            token = response.body.token;
            expires = response.body.expires;            
            console.log({token});
        });
    });

    it('Login to the site', () => {
        cy.setCookie('userName', 'StanP.');
        cy.setCookie('token', token);
        cy.setCookie('expires', expires);
        cy.visit('https://demoqa.com/books')
    });

    it('Intercept command', () => {
        cy.intercept('https://example.com/').as('getData');        
        cy.visit('https://demoqa.com');
        cy.wait('@getData').its('response.status').should('be.equal', 200);
        cy.get('element').should('have.text', 'example')
    });
});