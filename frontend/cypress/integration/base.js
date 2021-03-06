describe("Base tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("Search employee, click on it, show it on map", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("dagmar po");
		cy.get(".results").first().click();
		cy.get(`#205`).children().first().should("have.class", "selected-room");
	});

	it("Search room, click on it, show it on map", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("204");
		cy.get(".results").first().click();
		cy.get(`#204`).children().first().should("have.class", "selected-room");
	});

	it("No results for employee that doesn't exist", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("This input doesn't work");
		cy.get(".results").should("not.exist");
	});

	it("Number of results is correct", () => {
		cy.get("#search-input").click();
		cy.get("#search-input").type("dag");
		cy.get(".results").children().its("length").then(size => {
			cy.request("http://localhost:8000/api/search/?query=dag").then(data => {
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
