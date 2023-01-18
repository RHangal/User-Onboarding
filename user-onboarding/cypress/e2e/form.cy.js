describe("Onboarding App", () => {
    beforeEach(() => {
       cy.visit("http://localhost:3000"); 
    })

//GETTERS
const first_nameInput = () => cy.get("input[name=first_name]");
const last_nameInput = () => cy.get("input[name=last_name]");
const emailInput = () => cy.get("input[name=email]");
const passwordInput = () => cy.get("input[name=password]");
const tosInput = () => cy.get("input[name=tos]");
const civilInput = () => cy.get("input[name=civil]");
const submitButton = () => cy.get(`button[id="submit"]`);
const foobarInput = () => cy.get("input[name=foobar");

it("Sanity check to make sure tests work", () => {
    expect(1+2).to.equal(3);
    expect(2+2).not.equal(5);
    expect({}).not.to.equal({});
})
























})