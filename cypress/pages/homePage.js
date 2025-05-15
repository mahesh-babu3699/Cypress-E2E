class homePage {


    weblocators = {
        searchBox :'input[placeholder="Search"]',
        searchButton: '.input-group-btn',
        addToCartButton: '.button-group i',
        successMessage: '.alert-success'
    }

    searchProduct(productName) {
        cy.get(this.weblocators.searchBox).type(productName)
        cy.get(this.weblocators.searchButton).click()
    }

    addToCart() {
        cy.get(this.weblocators.addToCartButton).first().click()
    }

    verifySuccessMessage() {
        return cy.get(this.weblocators.successMessage)
    }
}

export default homePage