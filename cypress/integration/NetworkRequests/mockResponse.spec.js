describe("mock the network response", () => {
    it("Test to mock the network response", () => {
        let message = 'wow, now we are able to mock the network response';
        cy.visit("https://example.cypress.io/commands/network-requests");
        cy.server();

        cy.route(
            {
                method: 'PUT',
                url: 'comments/*',
                status: 404,
                response: {
                    error: message
                },
                delay: 1000
            }).as('UpdateComment');

        cy.get('.network-put').click();

        cy.wait('@UpdateComment');

        cy.get('.network-put-comment').should('contain', message);
    })
})