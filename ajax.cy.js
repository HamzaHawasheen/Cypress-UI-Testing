describe('AJAX Data Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/ajax');
  });

  it('Positive: should wait for AJAX data to load', () => {
    cy.get('#ajaxButton').click();
    cy.get('.bg-success', { timeout: 30000 })
      .should('contain.text', 'Data loaded with AJAX get request.');
  });

  it('Negative: should not show data before button click', () => {
    cy.get('.bg-success').should('not.exist');
  });

});
