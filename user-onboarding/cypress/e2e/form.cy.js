describe("Onboarding App", () => {
    //return state to default by re-visiting page before each test
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

//CI/CD -> Continuous Integration / Continuous Delivery
it("The proper elements are showing", () => {
    first_nameInput().should("exist");
    last_nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    tosInput().should("exist");
    civilInput().should("exist");
    submitButton().should("exist");
    foobarInput().should("not.exist");

    cy.contains(/submit/i).should("exist");
})

describe("Filling out the inputs", () => {
    it("can navigate to the site", () => {
        cy.url().should("include", "localhost");
    })

    it("submit button starts out disabled", () => {
        submitButton().should("be.disabled");
    })

    it("can type in the inputs", () => {
        first_nameInput()
            .should("have.value","")
            .type("Rohan")
            .should("have.value","Rohan");
        last_nameInput()
            .should("have.value","")
            .type("Hangal")
            .should("have.value","Hangal");
        emailInput()
            .should("have.value","")
            .type("rohanhangal@gmail.com")
            .should("have.value","rohanhangal@gmail.com");
        passwordInput()
            .should("have.value","")
            .type("bestpasswordispassword")
            .should("have.value","bestpasswordispassword");
        tosInput()
            .should("not.have.checked")
            .check()
            .should("have.checked");
        civilInput()
            .should("not.have.checked")
            .check("single")
            .should("have.checked.value", "single");
        civilInput()
            .check("married")
            .should("have.checked.value", "married")  ;
    })

    it("the submit button enables when all fields are filled out", () => {
        first_nameInput().type("Deesha");
        last_nameInput().type("Tripathy");
        emailInput().type("tdeesha@gmail.com");
        passwordInput().type("passwordlength");
        tosInput().check();
        civilInput().check("married");
        submitButton().should("not.be.disabled");
    })
})

describe("Error messages", () => {
    it("displays the correct error messages", () => {
        first_nameInput().type("Deesha{selectAll}{backspace}");
        cy.contains("first name is required!");

        last_nameInput().type("T{backspace}");
        cy.contains("last name is required!");
        
        emailInput().type("t@g.com {selectAll}{backspace}");
        cy.contains("You've gotta have an email");

        passwordInput().type("passwordlength{selectAll}{backspace}");
        cy.contains("You must have a password")

        cy.contains("agree to the Terms of Service")
        tosInput().check()
        cy.contains("agree to the Terms of Service").should("not.exist")
        
    })
})

describe("Adding a new member", () => {
    it("can submit and add a new member", () => {
        first_nameInput().type("Deesha");
        last_nameInput().type("Tripathy");
        emailInput().type("tdeesha@gmail.com");
        passwordInput().type("passwordlength");
        tosInput().check();
        civilInput().check("married");
        submitButton().click();

        cy.contains("Deesha Tripathy")
    })
})



})