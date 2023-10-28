describe('Company Logo Redirect Test', () => {
  it('Should click the company logo and open the main page', () => {
    
    cy.visit('https://www.epam.com/about');

    cy.get('.header-ui-23 .header__logo-light')
    .first()
    .click({ force: true }); 
    cy.url().should('eq', 'https://www.epam.com/');

  });
});