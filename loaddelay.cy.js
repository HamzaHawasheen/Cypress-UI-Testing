describe('Load Delay Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/loaddelay');
  });

  it('Positive: should wait for button to load and click it', () => {
    cy.get('.btn-primary', { timeout: 30000 }).should('be.visible').click();
  });

  it('Negative: should fail if button not loaded in short timeout', () => {
    cy.get('.btn-primary', { timeout: 30000 }).should('not.exist');
  });

});
