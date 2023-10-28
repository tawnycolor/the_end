describe('Checkout Item Test', () => {
  it('Checkout item test', () => {
    cy.login();
   
    cy.visit('https://demowebshop.tricentis.com/desktops');
    
    cy.get('[data-productid="72"]').as('productID'); 
    cy.get('@productID').click();
    cy.get('.add-to-cart-button').trigger('mouseover').click({ force: true });
    cy.get('.header .ico-cart').click({ force: true });
    cy.get('.terms-of-service');
    cy.get('input[type="checkbox"').check();
    cy.get('.checkout-button').click({ force: true });
    cy.get('.step-title').contains('Billing address');
    cy.get('input[type="button"][title="Continue"].new-address-next-step-button').click({ multiple: true });
    cy.get('input[type="button"][value="Continue"].button-1.shipping-method-next-step-button').click({ multiple: true });
    cy.get('input[type="button"][value="Continue"].button-1.payment-method-next-step-button').click({ multiple: true });
    cy.get('input[type="button"][value="Continue"].button-1.payment-info-next-step-button').click({ multiple: true });
    cy.get('input[type="button"][value="Confirm"].button-1.confirm-order-next-step-button').click({ multiple: true });
    cy.get('.checkout-page').contains('Thank you');

  });
})
