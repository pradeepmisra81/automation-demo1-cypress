describe("fake the network response", () => {
    it("Test to fake the network response", () => {
        let message = 'wow,now we are able to change the nw response';
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

        // we have code that puts a comment when
        // the button is clicked in scripts.js
        cy.get('.network-put').click();

        cy.wait('@UpdateComment');

        // our 404 statusCode logic in scripts.js executed
        cy.get('.network-put-comment').should('contain', message);
    })
})