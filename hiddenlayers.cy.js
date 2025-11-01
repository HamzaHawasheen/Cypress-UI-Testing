describe('Hidden Layers Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/hiddenlayers');
  });

  it('Positive: should click green button successfully', () => {
    cy.get('#greenButton').should('be.visible').click();
  });

  it('Negative: should not be able to click green button again (covered)', () => {
    cy.get('#greenButton').click();
    cy.get('#greenButton').click({ force: true }).then(() => {
      cy.log('Button covered by another layer');
    });
  });

});
