describe('Addiing Items To The Cart  Test', () => {
  it('Should to add items to the cart', () => {

    cy.visit('https://demowebshop.tricentis.com/desktops');

    cy.get('[data-productid="72"]').as('productID'); 
    cy.get('@productID').click();
    cy.get('.add-to-cart-button').trigger('mouseover').click({ force: true });
    cy.get('.header .ico-cart').click({ force: true });
    cy.get('.shopping-cart-page').find('.cart .cart-item-row').should('have.length', 1);
    
  });
});