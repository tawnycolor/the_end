describe('EPAM Website Search Test', () => {
  it('Should open EPAM.com, search for "AI", and verify search results', () => {
  
    cy.visit('https://www.epam.com');
    cy.get('.search-icon').click({force: true}); 
    cy.get('.header-search-ui-23 .header-search__input').type('AI{enter}'); 
    cy.wait(5000);
    cy.get('.search-ui-23 .search-results__counter').should('be.visible');

  });
});