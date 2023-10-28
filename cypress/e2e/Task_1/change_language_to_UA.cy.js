describe('EPAM Website Language Change Test', () => {
  it('Should open EPAM.com and change language to Ukraine', () => {
    
    cy.visit('https://www.epam.com');
    cy.get('.location-selector-ui-23.header__control').click({ force: true });
    cy.get('.location-selector__panel').contains('Україна (Українська)').click({ force: true });
    cy.title().should('eq', "EPAM Ukraine - найбільша ІТ-компанія в Україні | Вакансії");

  })
})