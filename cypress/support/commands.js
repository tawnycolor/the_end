Cypress.Commands.add('login', () => {
    cy.visit('https://demowebshop.tricentis.com/login');
    cy.get('#Email').type('2323@sd.sdfs');
    cy.get('#Password').type('password123');
    cy.get('.login-page .returning-wrapper .buttons').contains('Log in');
    cy.get('.button-1.login-button').trigger('mouseover').click({ force: true });
  });
  
1
require('cypress-downloadfile/lib/downloadFileCommand')