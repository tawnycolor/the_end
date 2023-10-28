describe('Regions check', () => {
  it('should allow to switch location list by region', () => {
    cy.visit('https://www.epam.com/');
  
    cy.get('.header-ui-23 .header__content>.cta-button-ui-23').click({force: true});
    cy.get('.tabs-ui-23').scrollIntoView();
    cy.get('.tabs-ui-23').should('be.visible');

    cy.get('.tabs-ui-23 .tabs-23__link').contains('AMERICAS');
    cy.get('.tabs-ui-23 .tabs-23__link').contains('EMEA');
    cy.get('.tabs-ui-23 .tabs-23__link').contains('APAC');
    
    cy.get('.tabs-ui-23 .tabs-23__link').contains('APAC').click({force: true});
    cy.get('.locations-viewer-23__country-title').contains('Australia');

  });
});