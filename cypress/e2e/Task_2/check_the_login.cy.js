describe('User Login Test', () => {
  it('Should log in as an existing user', () => {

    cy.visit('https://demowebshop.tricentis.com/login');

    cy.get('#Email').type('johnddoe@example.com');
    cy.get('#Password').type('password123');
    cy.get('.login-page .returning-wrapper .buttons').contains('Log in');
    cy.get('.button-1.login-button').trigger('mouseover').click({ force: true });
    cy.contains('Welcome to our store').should('be.visible');

  });
});