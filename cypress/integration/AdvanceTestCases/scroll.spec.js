describe("scroll on the page", () => {
    it("should scroll down or up on the page", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/");
        cy.wait(5000);
        cy.get('#submit-button').scrollIntoView();
        cy.wait(5000);
        cy.get('header').scrollIntoView();
    })

})