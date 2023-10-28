describe('Removing Item Test', () => {
  it('Adding item to the cart test', () => {
   
    cy.visit('https://demowebshop.tricentis.com/desktops');
    
    cy.get('[data-productid="72"]').as('productID'); 
    cy.get('@productID').click();
    cy.get('.add-to-cart-button').trigger('mouseover').click({ force: true });
    cy.get('.header .ico-cart').click({ force: true });
    cy.get('.shopping-cart-page').find('.cart .cart-item-row').should('have.length', 1);
    cy.get('.cart-item-row td.product').contains('Build your own cheap computer'); 
    cy.get('input[type="checkbox"').check();
    cy.contains('input[type="submit"][value="Update shopping cart"]', 'Update shopping cart').click();
    cy.get('.shopping-cart-page').find('.cart .cart-item-row').should('have.length', 0);
   
  });
})
