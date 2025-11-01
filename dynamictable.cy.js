describe('Dynamic Table Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/dynamictable');
  });

  it('Positive: should find Chrome CPU value and match the label', () => {
    cy.wait(3000);

    cy.contains('[role="row"]', 'Chrome').within(() => {
      cy.get('[role="cell"]').eq(3).invoke('text').then((cpuValue) => {
        cy.log('Chrome CPU is:', cpuValue);
        cy.get('.bg-warning').should('contain.text', cpuValue.trim());
      });
    });
  });

  it('Negative: should fail if Chrome row not found', () => {
    cy.get('[role="row"]').should('contain.text', 'Chrome');
  });

});
