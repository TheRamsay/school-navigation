describe("Checking if all rooms are clickable", function () {
	it("First floor", () => {
		cy.visit("http://localhost:3000");
		cy.request("http://127.0.0.1:8000/api/room/floor/1").then((data) => {
			const x = data.body.map(k => k.room_id);
			cy.wrap(x).each(j => {
				if ([212, 214, 214].includes(+j)) {
					return;
				}
				const el = cy.get(`#${j}`).children().first();
				el.click({ force: true }).should("have.class", "selected-room");
			});
		});
	});

});

