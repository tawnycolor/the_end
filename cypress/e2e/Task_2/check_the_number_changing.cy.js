describe('Items Changing Test', () => {
  it('Should to change numbers of the utems per page', () => {

  cy.visit('https://demowebshop.tricentis.com/desktops');

   cy.get('.master-wrapper-main').click({force: true} );
   cy.get('select[name="products-pagesize"]').select('4');
   cy.get('.product-grid').find('.product-item').should('have.length', 4);

  });
});