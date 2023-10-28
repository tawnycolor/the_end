describe('Swagger Create User Tests', () => {
  it('Check User Creation', () => {
  
    const user = {
      id: 2,
      username: 'user1234',
      firstName: 'test1',
      lastName: 'testik',
      email: 'test@gmail.com',
      phone: '11111111',
      password: 'user123',
    };

    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: user,
    }).as('createUser');

    cy.get('@createUser').its('status').should('eq', 200);

  });
});
