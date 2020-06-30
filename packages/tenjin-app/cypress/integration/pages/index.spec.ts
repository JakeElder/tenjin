/// <reference types="Cypress" />

describe("Home Page", () => {
  it("Has the correct title", () => {
    cy.server();
    cy.route("POST", "/graphql", "fixture:works.json");
    cy.visit("/");
    cy.get("h1").contains("cmu.works");
    cy.get("h2").contains("Works");
  });
});

export {};
