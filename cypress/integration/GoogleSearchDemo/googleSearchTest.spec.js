describe("Testing of Google Search Webapp", () => {
    it("Google Search Test Case", () => {
        cy.visit("https://www.google.com/");
        cy.contains('Google');
        cy.url().should("include","google");

        cy.get('.gLFyf').type('pradeep');
        cy.get('.aajZCb > .tfB0Bf > center > .gNO89b').click();
        cy.contains('Pradeep');
    })
})