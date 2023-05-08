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

    it('Verification menu item names - Variant 1', function() {        //простой способ
        cy.visit('https://demoqa.com');
        cy.get('.card').should('have.length', expectedMenuItemNames.length).each(($el, idx) => {
            expect($el.text()).to.be.equal(expectedMenuItemNames[idx]);
            //актуальный рез-т ожидаемый рез-т         
        });
    });

    it('Verification menu item names - Variant 2', function() {
        cy.visit('https://demoqa.com');
        cy.get('.card')
        .should('have.length', expectedMenuItemNames.length)
        .then(($els) => {
            let actual = Cypress.$.makeArray($els).map($el => $el.innerText)   //var.1    //работаем с библиотекой jQuery
            expect(actual).to.be.deep.equal(expectedMenuItemNames)             //var.1
            //return Cypress.$.makeArray($els).map($el => $el.innerText)       //var.2
        });
        //.should('deep.equal', expectedMenuItemNames)                         //var.2
    });

    it('Verification menu item names - Variant 3', function() {
        cy.visit('https://demoqa.com');
        cy.get('.card')
        .should('have.length', expectedMenuItemNames.length)
        .then(($els) => {
            return Cypress._.map($els, 'innerText')              //работаем с библиотекой Lodash
        })
        .should('deep.equal', expectedMenuItemNames)                             
    });

    it.only('Form filling', () => {
        cy.visit('https://demoqa.com');
        cy.get('.card:nth-child(2)').click();
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type('Stan{enter}')   //кнопка ВВОД
          .should('have.value', 'Stan')  //проверяем что информация есть        
          .should('have.css', 'border-color', 'rgb(40, 167, 69)')     //проверяем что цвет стал зеленым (RGB вставляем)
    });
});