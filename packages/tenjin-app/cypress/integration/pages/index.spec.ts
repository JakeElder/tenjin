describe("Home Page", () => {
  it("has the correct title", () => {
    cy.server();
    cy.route("POST", "/graphql", "fixture:works.json");
    cy.visit("/");
    cy.get("h1").contains("cmu.works");
    cy.get("h2").contains("Works");
  });

  it("links to each work", () => {
    cy.server();
    cy.route("POST", "/graphql", "fixture:works.json");
    cy.visit("/");
    cy.get("a").contains("Example Work").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/example-work");
  });
});

export {};
