describe("Movies search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/search");
  });

  it("should display a home page with 12 movies", () => {
    cy.get("h1").should("have.text", "Find your favourite movie");
    cy.get("[data-testid=movie-list] > div").should("have.length", 12);
  });

  it("should display movies based on search query", () => {
    cy.get("[data-testid=search-form] input").type("Flash");
    cy.get("[data-testid=search-form] button").click();
    cy.get("[data-testid=movie-list] > div").should("contain", "Flash");
    cy.get("[data-testid=movie-list] > div").should("have.length", 3);
  });

  it("should preview movie when clicking on it", async () => {
    const name = cy.get("[data-testid=movie-title]:first").invoke("text");
    cy.get("[data-testid=movie-list] > div:first").click();
    cy.get("[data-testid=movie-detail]").should("be.visible");
    cy.get("[data-testid=movie-detail]").should("contain", name);
  });
});
