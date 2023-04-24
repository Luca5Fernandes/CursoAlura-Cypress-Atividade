describe("Login de Usuarios", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it("Fazer Login de Usuario Invalido", () => {
    cy.login("flavio", "123");
    cy.contains("a", "(Logout)").should("be.visible");
  });

  it("Fazer Login de Usuario Invalido", () => {
    cy.login("jacqueline", "1234");
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Invalid user name or password");
    });
  });
});
