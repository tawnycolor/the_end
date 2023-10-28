describe('User Registration Test', () => {
  it('Should register a new user', () => {
    
    cy.visit('https://demowebshop.tricentis.com/register');

    cy.get('#FirstName').type('tawny');
    cy.get('#LastName').type('color');
    cy.get('#Email').type('taw.colo@gmail.com');
    cy.get('#Password').type('password123');
    cy.get('#ConfirmPassword').type('password123');

    cy.get('.registration-page .buttons').contains('Register');
    cy.get('#register-button').trigger('mouseover').click({ force: true });
    cy.get('.registration-result-page').contains('Your registration completed');

  });
});