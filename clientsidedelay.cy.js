describe('Client Side Delay Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/clientdelay');
  });

  it('Positive: should load message after delay', () => {
    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 30000 })
      .should('contain.text', 'Data calculated on the client side.');
  });

  it('Negative: should not see message before click', () => {
    cy.get('.bg-success').should('not.exist');
  });

});
