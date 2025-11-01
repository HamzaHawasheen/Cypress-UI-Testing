describe('Click Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/click');
  });

  it('Positive: should click the button successfully', () => {
    cy.get('#badButton').click().should('have.class', 'btn-success');
  });

  it('Negative: should fail if button is not clicked', () => {
    cy.get('#badButton').should('not.have.class', 'btn-success');
  });

});
