describe('Scrollbars Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/scrollbars');
  });

  it('Positive: should scroll to button and click it', () => {
    cy.get('#hidingButton')
      .scrollIntoView()
      .should('be.visible')
      .click();
  });

  it('Negative: should not find button before scrolling', () => {
    cy.get('#hidingButton')
      .should('not.be.visible');
  });

});
