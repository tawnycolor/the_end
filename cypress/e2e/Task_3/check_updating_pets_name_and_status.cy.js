describe('Swagger Updating Name And Status Test', () => {
  it('Check Updating Name And Status of Pet', () => {
   
    const pet = {
      id: 4,
      category: {
        id: 4,
        name: 'Mars'
      },
      name: 'Dug1',
      photoUrls: ['4'],
      tags: [
        {
          id: 4,
          name: 'tag'
        }
      ],
      status: 'sold'
    };

    cy.request({
      method: 'PUT',
      url: 'https://petstore.swagger.io/v2/pet',
      body: pet,
    }).as('updatePet');

    cy.get('@updatePet').its('status').should('eq', 200);

  });
});