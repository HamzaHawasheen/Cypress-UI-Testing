describe('Text Input Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/textinput');
  });

  it('Positive: should change button text', () => {
    cy.get('#newButtonName').type('Hamza Test');
    cy.get('#updatingButton').click().should('have.text', 'Hamza Test');
  });

  it('Negative: should not change button if input empty', () => {
    cy.get('#newButtonName').clear();
    cy.get('#updatingButton').click().should('not.have.text', '');
  });

});
