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

describe("School navigation app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Search item, click on it, show it on map", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("dagmar po");
		cy.get(".results").first().click();
		cy.get(`#205`).children().first().should("have.class", "selected-room");
	});

	it("No results for item that doesn't exist", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("This input doesn't work");
		cy.get(".results").should("not.exist");
	});

	it("Number of results is correct", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("Ivana");
		cy.get(".results").children().its("length").then(size => {
			cy.request("http://localhost:8000/api/search/?query=Ivana").then(data => {
				cy.wrap(data.body.result).should("have.length", size);
			});
		});
	});


	it("Gender is correct", () => {
		cy.request("http://localhost:8000/api/employee/").then(data => {
			cy.wrap(data.body).as("employees").its("length").then(size => {
				const idx = Math.floor(Math.random() * size);
				cy.get("@employees").then(employees => {
					const employee = employees[idx];
					cy.get("#search-input").click();
					cy.get("#search-input").type(`${employee.first_name} ${employee.last_name}`);
					cy.get(".results")
						.children()
						.first()
						.children()
						.first()
						.children()
						.first().should("have.class", employee.gender === "F" ? "female" : "male");
				});

			});
		});
	});

	it("Clicking on return back arrow will redirect to main page", () => {
		cy.get("#search-input").click();
		cy.get(".back-icon").click();
		cy.url().should("eq", "http://localhost:3000/");
	});

});
