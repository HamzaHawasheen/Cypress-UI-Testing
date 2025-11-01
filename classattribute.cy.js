describe('Class Attribute Page Tests', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/classattr');
  });

  it('should click the button using class selector', () => {
    cy.get('.btn-primary',  { timeout: 2000 })
      .should('be.visible')  
      .click();           
  });

  it('should fail if searching for non-existent class', () => {
    cy.get('.nonExistentClass', { timeout: 2000 }).should('not.exist');
  });

});
