describe('Swagger Update Pet Image Test', () => {
  it('Check Updating Pet Image', () => {
   
    const pet = {
      id: 4,
      category: {
        id: 4,
        name: 'Mars'
      },
      name: 'mars1',
      photoUrls: ['2'],
      tags: [
        {
          id: 4,
          name: 'tag'
        }
      ],
      status: 'available'
    };

    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: pet,
    }).as('createPet');

    cy.get('@createPet').its('status').should('eq', 200);

  });
});