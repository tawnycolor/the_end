describe('Petstore Log Out Test', () => {
  it('Logs Out a User', () => {

    const loginData = {
      username: 'user1234',
      password: 'user123',
    };

    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/login',
      body: loginData,
    }).as('loginUser');

    cy.get('@loginUser').its('status').should('eq', 200);
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/user/logout',
    }).as('logoutUser');
    cy.get('@logoutUser').its('status').should('eq', 200);

  });
});
