describe("Dashboard E2E Test", () => {
  it("should allow user to log in, view dashboard, and log out with loading state", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456");

    cy.get("button").contains("Login").click();

    // Verify redirect to dashboard
    cy.url({ timeout: 10000 }).should("eq", "http://localhost:5173/");

    // Check for Sidebar and Header
    cy.get("nav", { timeout: 10000 }).should("be.visible");    
    cy.get("header", { timeout: 10000 }).should("be.visible");
    
    // Check for Cards
    cy.contains("Goals").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");

    // Test Logout
    cy.contains("Logout").click();

    // Check for loading state during logout
    cy.get('.MuiCircularProgress-root').should('be.visible');

    // Verify redirect back to login
    cy.url({ timeout: 10000 }).should("include", "/login");
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("http://localhost:5173/");
    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.get("div").contains("Wrong Password");
  }); 
});