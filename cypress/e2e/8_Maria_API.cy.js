/// <reference types="cypress"/>

describe('apiTests', () => {

    beforeEach(() => {
        cy.viewport(1366, 768);                
    })
    
    const BASE_URL = "https://reqres.in/api";
    const getListUsers = () => cy.api(`${BASE_URL}/users`);
    const postCreate = () =>
        cy.api({
            method: 'POST',
            url: `${BASE_URL}/users`,
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        })

    it('Get list users - verify status code', () => {
        getListUsers()
            .then(response => {
                console.log('response = ', response)
            })
            .its('status')
            .should('be.eq', 200)

    })

    it('Get list users', () => {
        getListUsers()
            .its('body')
            .then(responseBody => {
                console.log('responseBody = ', responseBody)
                expect(responseBody).to.have.any.keys('data');
            })
    })

    it('Post create - verify status code', () => {
        postCreate()
            .its('status')
            .should('be.eq', 201)
    })

    it('Post create - verify response has a key as "name"', () => {
        postCreate()
            .its('body')
            .should('have.any.keys', 'name')
    })

    it('Post create - verify key "name" has value as "string"', () => {
        postCreate()
            .its('body.name')
            .should('be.a', 'string')
    })
})
