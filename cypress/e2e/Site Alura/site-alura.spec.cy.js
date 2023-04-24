describe("Testando Pagina Inicial", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });

  it("Verificar o Nome com Letra Minuscula", () => {
    cy.contains("a", "Register now").click();
    cy.contains("button", "Register").click();
    cy.get('input[formcontrolname="userName"]').type("Lucas");
    cy.contains("button", "Register").click();
    cy.contains("ap-vmessage", "Must be lower case").should("be.visible");
  });

  it("Verificar Mensagens - Tela Inicial", () => {
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("Verificar Botão Habilitado - Tela Inicial", () => {
    cy.get('input[formcontrolname="userName"]').type("Jacqueline");
    cy.get('input[formcontrolname="password"]').type("123");
    cy.get('button[type="submit"]').should("be.enabled");
  });

  it("Verificar Nome da Aplicação - Tela Inicial", () => {
    cy.contains("a", " ALURAPIC ").should("be.visible");
  });

  it("Verificar Menu Clicavel - Tela Inicial", () => {
    cy.get(".navbar-brand > .fa").click();
    cy.get(".menu-bar > .fa").should("be.visible");
  });
});
