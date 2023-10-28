describe('EPAM validation Test', () => {
  it('should check the validation of required fields in the contact form', () => {
    
    cy.visit('https://www.epam.com/about/who-we-are/contact');
  
    cy.get('.form-component .button-ui-wrapper').contains('Submit').scrollIntoView();
    cy.get('.form-constructor-ui.form-component--standalone .button-ui-wrapper .button-ui').trigger('mouseover');
    cy.get('.form-constructor-ui.form-component--standalone .button-ui-wrapper .button-ui').click({ force: true });
    cy.get('.form-component .validation-field').contains('This is a required field');

  });
});