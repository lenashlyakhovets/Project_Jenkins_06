/// <reference types="cypress" />

describe('iFrame testing', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);                
    }) 
    
    it('Test #1', () => {
        cy.visit('https://play1.automationcamp.ir/frames.html');
        cy.get('#frame1')
          .its('0.contentDocument')
          .its('body')        
          .find('#click_me_1')
          .should('contain', 'Click Me 1')
          .click()
          .should('contain', 'Clicked')
    });

    it('Captcha testing', () => {
        cy.visit('https://home.openweathermap.org/users/sign_up');
        cy.get('iframe[title=reCAPTCHA]')
          .its('0.contentDocument')
          .its('body')        
          .find('#rc-anchor-alert')          
          .click({ force: true });
        cy.get('iframe[title="recaptcha challenge expires in two minutes"]')
          .should('be.visible');
    });
});