describe("Tickeds", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it("fill all the text input fields", () => {
        //Preenhcemos todos os campos com o type
        const FistName = "Lucas"
        const LastName = "Henrique"
        cy.get("#first-name").type(FistName)
        cy.get("#last-name").type(LastName)
        cy.get("#email").type("l@l.gmail.com")
        cy.get("#requests").type("Vegetariano")
        cy.get("#signature").type(`${FistName} ${LastName}`)
    })

    it("select two tickets", () => {
        //Selecionamos um dos options
        cy.get("#ticket-quantity").select("2")
    })

    it("select 'vip' ticket type", () => {
        //
        cy.get('#vip').check()
    })

    it("Selects 'friend', and 'prubliction', then uncheck 'friend'", () => {
        //selecionamos os checkbox e desmarcamos com uncheck
        cy.get("#friend").check()
        cy.get("#publication").check()
        cy.get("#friend").uncheck()
    })

    it("has 'TICKETBOX' headers's heading", () => {
        //validamos o testo da Home Page
        cy.get("header h1").should("contain", "TICKETBOX")
    })

    it("alerts on invalid email", () => {
        //preenchemos um email invalido
        cy.get("#email")
            .as("email")
            .type("l-gemail.com")
        //validamos se deu o erro 
        cy.get("#email.invalid")
            .as("invalidEmail")
            .should("exist")
        //preenchemos o email valido 
        cy.get("@email")
            .clear()
            .type("l@.gmail.com")
        //validamos sem nao deu erro 
        cy.get("#email.invalid").should("not.exist")
    })

    it("Fills and reset the form", () => {
        //testes E2E
        const FistName = "Lucas"
        const LastName = "Henrique"
        const FullName = `${FistName} ${LastName}`


        cy.get("#first-name").type(FistName)
        cy.get("#last-name").type(LastName)
        cy.get("#email").type("l@l.gmail.com")
        cy.get("#requests").type("Vegetariano")

        cy.get("#friend").check()
        cy.get('#vip').check()

        cy.get(".agreement p").should("contain",
            `I, ${FullName}, wish to buy 1 VIP ticket.`)

        cy.get("#agree").check()
        cy.get("#signature").type(FullName)

        cy.get('[type="submit"]')
            .as("submitButton")
            .should("not.be.disabled")

        cy.get(".reset").click()

        

    })

    it("fill mandatory fields using support command", () => {
        //Usamos os commands que está em suport para simplificar nossa automação.
        const customer = {
            FistName: "Lucas",
            LastName: "Henrique",
            email: "l@l.gmail.com"

        }

        cy.fillMandatoryFields(customer)

        cy.get('[type="submit"]')
            .as("submitButton")
            .should("not.be.disabled")

        cy.get("#agree").click()

        cy.get("@submitButton").should("be.disabled")

    })



})