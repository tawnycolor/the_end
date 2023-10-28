describe('Computers Group Sub-Groups Test', () => {
  it('Should verify the existence of 3 sub-groups with correct names under the "Computers" group', () => {
   
    cy.visit('https://demowebshop.tricentis.com');

    cy.get('.header-menu .top-menu').contains('Computers').click();
    cy.get('.sub-category-grid').contains('Desktops').should('be.visible');
    cy.get('.sub-category-grid').contains('Notebooks').should('be.visible');
    cy.get('.sub-category-grid').contains('Accessories').should('be.visible');
    
  });
});