// describe("Checking if all rooms in first floor are clickable", function() {
//     it("", () => {
//         cy.visit("http://localhost:3000");
//         cy.request("http://127.0.0.1:8000/api/room/floor/1").then((data) => {
//             const x = data.body.map(k => k.room_id);
//             cy.wrap(x).each(j => {
//                 if ([212, 214, 214].includes(+j)) {
//                     return;
//                 }
//                 const el = cy.get(`#${j}`).children().first();
//                 el.click({ force: true }).should("have.class", "selected-room");
//             });
//         });
//     });

// });

describe("Searching items", () => {
    it("Finding item and then clicking", () => {
        cy.visit("http://localhost:3000");
        cy.get("#search-input").click();
        cy.get("#search-input").type("dagmar po");
        cy.get(".results").first().click();
        cy.get(`#205`).children().first().should("have.class", "selected-room");
    });

    it("Searching an item that doesn't exist", () => {
        cy.visit("http://localhost:3000");
        cy.get("#search-input").click();
        cy.get("#search-input").type("This input doesn't work");
        cy.get(".results").should("not.exist")
    });

    it("Checking number of results", () => {
        cy.visit("http://localhost:3000");
        cy.get("#search-input").click();
        cy.get("#search-input").type("Ivana");
        cy.get(".results").children().should("have.length", 5)
    })


})
