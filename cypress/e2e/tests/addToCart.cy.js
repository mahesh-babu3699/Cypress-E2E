import HomePage from '../../pages/homePage'
import testData from '../../fixtures/testData.json'

const homePage = new HomePage()

describe('Test Automation', () => {

    before(() => {
        cy.login(testData.user.userName, testData.user.password)
    })

    it('Add to cart', () => {
        homePage.searchProduct(testData.product.productName)
        homePage.addToCart()
        homePage.verifySuccessMessage().should('contain', testData.successMessage.message)
    })
})