/// <reference types="cypress" />

describe('DemoQA Menu-titles', () => {

    beforeEach(function() {
        cy.viewport(1920, 1080);
        cy.visit('https://demoqa.com');
        cy.fixture('formData').then((data) => {          //data - временная переменая
            this.formData = data;
        })
    })    

    it('Form filling', function() {
        cy.get('.card:nth-child(2)').click();
        cy.get('.element-group:nth-child(2)>div').click();
        cy.get('#firstName')
          .should('have.text', '')
          .type(`${this.formData.firstName}{enter}`)         //кнопка ВВОД
          .should('have.value', this.formData.firstName)     //проверяем что информация есть        
          .should('have.css', 'border-color', 'rgb(40, 167, 69)')     //проверяем что цвет стал зеленым (RGB вставляем)
        cy.get('#userEmail')
          .should('have.text', '')
          .type(`${this.formData.userEmail}{enter}`)
          .should('have.value', this.formData.userEmail)
          .should('have.css', 'border-color', 'rgb(40, 167, 69)')

    });
});