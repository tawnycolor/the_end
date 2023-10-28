describe('EPAM Website Theme Switch Test', () => {
  it('Should open EPAM.com and switch theme toggle', () => {
    
    cy.visit('https://www.epam.com');

    cy.get('.theme-switcher')
      .first() 
      .click({force: true});

    cy.wait(2000);
    cy.get('body').should('have.class', 'light-mode');

  });
});