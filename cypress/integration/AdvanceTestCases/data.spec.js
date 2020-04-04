describe("Write / Read Data to JSON/Text file", () => {
    it("should write data into JSON", () => {
        cy.writeFile('log.JSON', {name:'Mike', age:25})
    })
    it("should write data to text file", () => {
        cy.writeFile('log.txt', 'Hello World!')
    })

    it("should read and verify data from JSON file", () => {
        cy.readFile('log.json')
        .its('age')
        .should('eq',25);
    })
    it("should read and verify data from text file", () => {
        cy.readFile('log.txt')
        .should('eq','Hello World!')
    })

})