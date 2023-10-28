describe('Sort Items Test', () => {
  it('Should navigate to Desktops and sort by Low to High', () => {
   
    cy.visit('https://demowebshop.tricentis.com/desktops');

    cy.get('.product-sorting').click();
    cy.get('select[name="products-orderby"]').select('Price: Low to High');
    cy.wait(2000);

    const priceSelectors = '.product-item .prices';
    cy.get(priceSelectors).should('have.length.above', 1);
    cy.get(priceSelectors).then((elements) => {
      let previousPrice = Number.MIN_SAFE_INTEGER;
      for (let i = 0; i < elements.length; i++) {
        const price = parseFloat(elements[i].textContent.replace('$', '').replace(',', ''));
        expect(price).to.be.at.least(previousPrice);
        previousPrice = price;
      }
    });
  });
  it('Should navigate to Desktops and sort by High to Low', () => {
    cy.visit('https://demowebshop.tricentis.com/desktops');
    cy.get('.product-sorting ').click();
    cy.get('select[name="products-orderby"]').select('Price: High to Low');
    cy.wait(2000);

    const priceSelectors = '.product-item .prices';
    cy.get(priceSelectors).should('have.length.above', 1);
    cy.get(priceSelectors).then((elements) => {
      let previousPrice = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < elements.length; i++) {
        const price = parseFloat(elements[i].textContent.replace('$', '').replace(',', ''));
        expect(price).to.be.at.most(previousPrice);
        previousPrice = price;
      }
    });
  });
});