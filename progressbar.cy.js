describe('Progress Bar Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/progressbar');
  });

  it('Positive: should stop progress bar near 75%', () => {
    cy.get('#startButton').click();

    cy.get('#progressBar', { timeout: 20000 })
      .should(($bar) => {
        const val = parseInt($bar.attr('aria-valuenow'));
        expect(val).to.be.greaterThan(70);
      });

    cy.get('#stopButton').click();

    cy.get('#progressBar')
      .invoke('attr', 'aria-valuenow')
      .then((val) => {
        const progress = parseInt(val);
        expect(progress).to.be.within(70, 99);
      });
  });

  it('Negative: should not show complete before start', () => {
    cy.get('#progressBar')
      .invoke('attr', 'aria-valuenow')
      .then((val) => {
        const progress = parseInt(val);
        expect(progress).to.be.lessThan(100);
      });
  });

});
