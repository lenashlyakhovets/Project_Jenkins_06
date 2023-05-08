/// <reference types="cypress" />

describe('my_test1', () => {    
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/automation-practice-form');
    })

    it('filling the form', () => {        
        cy.get('#firstName').type('Tom')
        cy.get('#lastName').type('Peterson')
        cy.get('#userEmail').type('test@gmail.com')
        cy.get('#gender-radio-1').check({force: true})
        cy.get('#userNumber').type('0123456789')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').select('June')
        cy.get('.react-datepicker__year-select').select('2002')
        cy.get('[class$=day--011]').click()
        cy.get('#subjectsContainer').type('Math{enter}')
        cy.get('#hobbies-checkbox-1').check({force: true})
        cy.get('#currentAddress').type('1212 River Way')
        cy.contains('Select State').click()
        cy.contains('Haryana').click({force: true})
        cy.contains('Select City').click()         //тест падает
        cy.contains('Panipat').click()                               //тест падает
        
        cy.get('#submit').click({force: true})
        cy.contains('Thanks for submitting the form').should('be.visible')
    })
})

describe.only('my_test2', () => {    
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com/webtables');
    })

    it('add new user', () => {
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Nik')
        cy.get('#lastName').type('Berg')
        cy.get('#userEmail').type('test@gmail.com')
        cy.get('#age').type('22')
        cy.get('#salary').type('2000')
        cy.get('#department').type('RedRover')

        cy.get('#submit').click()
        cy.contains('Nik').should('be.visible')
        
        //ищем пользователя
        cy.get('#searchBox').type('Nik')
        //убеждаемся что одна строка
        cy.get('.rt-tbody div.rt-tr[role="row"]:not(.-padRow)').should('have.length', 1)   
        //удаляем пользователя
        cy.get('span[title="Delete"]').click()
        //убеждаемся что пользователя не существует
        //cy.get('.rt-noData').should('have.text', 'No rows found')                     //variant 1  
        cy.get('.rt-tbody div.rt-tr[role="row"]:not(.-padRow)').should('not.exist')     //variant 2
    })
})


