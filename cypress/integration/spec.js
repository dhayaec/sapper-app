describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Great success!");
  });

  it("navigates to /about", () => {
    cy.get("nav a")
      .contains("about")
      .click();
    cy.url().should("include", "/about");
  });

  it("navigates to /blog", () => {
    cy.get("nav a")
      .contains("blog")
      .click();
    cy.url().should("include", "/blog");
  });
});

describe("test_name", function() {
  it("what_it_does", function() {
    cy.viewport(1680, 948);

    cy.visit("http://localhost:3000/about");

    cy.get(" .container > .input > #input-name").click();

    cy.get(" .container > .input > #input-name").type("Full name");

    cy.get(" .container > .input > #input-email").click();

    cy.get(" .container > .input > #input-email").type("email address");

    cy.get("#sapper >  .container > .input > .svelte-152n822").click();

    cy.get("#sapper >  .container > .input > .svelte-152n822").select(
      "[object Object]"
    );

    cy.get(" .container > .input > .svelte-mzuz2j > #checkbox").click();

    cy.get(" .container > .input > .svelte-mzuz2j > #checkbox").check("on");

    cy.get(
      ".container > .input > .radio-group > .svelte-zfz31k > #radio-Male"
    ).click();

    cy.get(
      ".container > .input > .radio-group > .svelte-zfz31k > #radio-Male"
    ).type("Male");

    cy.get("#sapper >  .container > .input > .svelte-qadlz0").click();

    cy.get("#sapper >  .container > .input > .blue").click();

    cy.get("body > #sapper >  .container > div:nth-child(10)").click();
  });
});
