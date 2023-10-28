describe('Addiing Items To The Wishlist Test', () => {
  it('Should to add items to the wishlist', () => {

    cy.visit('https://demowebshop.tricentis.com/music-2');

    cy.get('.add-to-wishlist-button').click();
    cy.get('.header .ico-wishlist').click({ force: true });
    cy.get('.wishlist-content .cart').find('.cart-item-row').should('have.length', 1);

  });
});