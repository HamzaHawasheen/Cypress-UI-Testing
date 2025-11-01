describe('Dynamic ID Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/dynamicid');
  });

  it('Positive: should click the dynamic button', () => {
    cy.get('button.btn-primary')
      .should('be.visible')
      .click();
  });

  it('Negative: should not find a fixed ID button', () => {
    cy.get('#nonExistentButton', { timeout: 2000 }).should('not.exist');
  });

});
