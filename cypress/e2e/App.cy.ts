import 'cypress-axe';

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('says hello', () => {
    cy.get('h1').contains('hello').should('exist');
  });
  
  it('page is accessible', () => {
    cy.injectAxe();
    cy.checkA11y();
  });
});
