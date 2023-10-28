describe('Swagger Login Test', () => {
  it('Check User log In', () => {

    const user = {
      username: 'user1234',
      password: 'user123',
    };

    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/login',
      body: user,
    }).as('loginUser');

    cy.get('@loginUser').its('status').should('eq', 200);

  });
});
