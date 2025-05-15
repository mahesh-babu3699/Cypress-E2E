import RegisterPage from '../../pages/register'
import registerPageData from '../../fixtures/register.json'

const registerPage = new RegisterPage()

describe('Register user', () => {
    it('User registration', () => {
        registerPage.openUrl()
        registerPage.enterFirstName(registerPageData.fName)
        registerPage.enterLastName(registerPageData.lName)
        registerPage.enterEmail(registerPageData.email)
        registerPage.enterPhoneNumber(registerPageData.phone)
        registerPage.enterPassword(registerPageData.password)
        registerPage.selectCheckBox()
        registerPage.clickOnContinue()
    })
})