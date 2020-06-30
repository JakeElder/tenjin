const URL = "/american-english-phonetics-for-thai-learners/chapter-3-vowels";

describe("Chapter 3", () => {
  it("Has the correct titles", () => {
    cy.server();
    cy.route("POST", "/graphql", "fixture:chapters.json").as("chapter");
    cy.visit(URL);
    cy.wait("@chapter");
    cy.get("h1").contains("American English Phonetics for Thai Learners");
    cy.get("h2").contains("Chapter 3: Vowels");
  });
});

export {};
