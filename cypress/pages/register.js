class registerPage {

    webLocators = {
        firstName : '#input-firstname',
        lastName : '#input-lastname',
        email : '#input-email',
        phone : '#input-telephone',
        password : '#input-password',
        confirmPassword : '#input-confirm',
        policyCheckBox : 'input[type="checkbox"]',
        continue : 'input[type="submit"]'
     }

    openUrl() {
        cy.visit(Cypress.env('URL'))
    } 

    enterFirstName(fName) {
        cy.get(this.webLocators.firstName).type(fName)
    } 

    enterLastName(lName) {
        cy.get(this.webLocators.lastName).type(lName)
    }

    enterEmail(email) {
        cy.get(this.webLocators.email).type(email)
    }

    enterPhoneNumber(pNumber) {
        cy.get(this.webLocators.phone).type(pNumber)
    }

    enterPassword(password) {
        cy.get(this.webLocators.password).type(password)
        cy.get(this.webLocators.confirmPassword).type(password)
    }

    selectCheckBox() {
        cy.get(this.webLocators.policyCheckBox).check()
    }

    clickOnContinue() {
        cy.get(this.webLocators.continue).click()
    }
    
}

export default registerPage;