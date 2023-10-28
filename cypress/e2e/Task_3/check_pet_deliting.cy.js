describe('Swagger Pet Deletion Test', () => {
  it('Check deleting a Pet', () => {
    
    const petIdToDelete = 4;
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/pet/4`,
    }).as('deletePet');

    cy.get('@deletePet').its('status').should('eq', 200);
  });
});