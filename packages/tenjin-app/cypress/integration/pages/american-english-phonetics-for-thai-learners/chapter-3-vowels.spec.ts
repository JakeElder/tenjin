const URL = "/american-english-phonetics-for-thai-learners/chapter-3-vowels";

describe("Chapter 3", () => {
  it("Has the correct title", () => {
    cy.visit(URL);
    cy.get("h1").contains("American English Phonetics for Thai Learners");
  });
});

export {};
