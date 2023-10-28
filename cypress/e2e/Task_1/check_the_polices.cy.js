describe('polices check', () => {

  it('should check the policies list', () => {
    cy.visit('https://www.epam.com/');
    cy.scrollTo('bottom');
  
    cy.get('.policies').contains('INVESTORS');
    cy.get('.policies').contains('COOKIE POLICY');
    cy.get('.policies').contains('OPEN SOURCE');
    cy.get('.policies').contains('APPLICANT PRIVACY NOTICE');
    cy.get('.policies').contains('PRIVACY POLICY');
    cy.get('.policies').contains('WEB ACCESSIBILITY');

  });
});