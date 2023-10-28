describe('Swagger Pet Creation Test', () => {
  it('Check Creating Pet', () => {
    
    const pet = {
      id: 4,
      category: {
        id: 4,
        name: 'Mars'
      },
      name: 'mars1',
      photoUrls: ['4'],
      tags: [
        {
          id: 4,
          name: 'tag'
        }
      ],
      status: 'available'
    };

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: pet,
    }).as('createPet');

    cy.get('@createPet').its('status').should('eq', 200);

  });
});