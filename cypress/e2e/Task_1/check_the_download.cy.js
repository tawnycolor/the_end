describe('Download Report Test', () => {
  it('Should download EPAM Corporate Overview 2023 report with correct name and extension', () => {

    cy.visit('https://www.epam.com/about');

    cy.downloadFile('https://www.epam.com/content/dam/epam/free_library/EPAM_Corporate_Overview_2023.pdf',
    'cypress/downloads', 'EPAM_Corporate_Overview_2023.pdf');
    cy.readFile('cypress/downloads/EPAM_Corporate_Overview_2023.pdf').should('exist');
  });
});