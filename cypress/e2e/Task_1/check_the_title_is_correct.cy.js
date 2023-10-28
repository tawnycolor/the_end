describe('EPAM Website Title Test', () => {
    it('Should open EPAM.com and verify the title', () => {
     
      cy.visit('https://www.epam.com');
      cy.title().should('eq', "EPAM | Software Engineering & Product Development Services");

    })
  })