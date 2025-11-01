describe('Verify Text Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/verifytext');
  });

  it('Positive: should verify the text inside the element correctly', () => {
    cy.get('.bg-primary')
      .should('contain.text', 'Welcome UserName!');
  });

  it('Negative: should fail when verifying wrong text', () => {
    cy.get('.bg-primary')
      .should('not.contain.text', 'Hello Admin!');
  });

});
