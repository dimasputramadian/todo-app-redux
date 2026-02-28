describe("Todo App", () => {

  it("can add a new todo", () => {
    cy.visit("/");

    cy.get("input").type("Belajar Cypress");
    cy.get("button").contains("Add").click();

    cy.contains("Belajar Cypress").should("exist");
  });

  it("can mark todo as completed", () => {
    cy.visit("/");

    cy.get("input").type("Testing Complete");
    cy.get("button").contains("Add").click();

    cy.contains("Testing Complete")
      .parent()
      .find("input[type='checkbox']")
      .check();
  });

  it("can delete todo", () => {
    cy.visit("/");

    cy.get("input").type("Todo Hapus");
    cy.get("button").contains("Add").click();

    cy.contains("Todo Hapus")
      .parent()
      .find("button")
      .contains("Delete")
      .click();

    cy.contains("Todo Hapus").should("not.exist");
  });

});