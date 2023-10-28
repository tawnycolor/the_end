describe('Swagger Create List of Users Test', () => {
  it('Check Creation of User List', () => {

    const user_list = [
    {
      id: 20,  
      username: 'user1234',
      firstName: 'test1',
      lastName: 'testik',
      email: 'test@gmail.com',
      phone: '11111111',
      password: 'user123',
    
    },
   {
      id: 21,
      username: 'user123774',
      firstName: 'test1',
      lastName: 'testik',
      email: 'test@gmail.com',
      phone: '11111111',
      password: 'user123',

    }
    ];
  
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user/createWithList',
      body: user_list,
    }).as('createUser');

    cy.get('@createUser').its('status').should('eq', 200);

  });
});