import { LoginPage } from "../pages/loginPage.pom";

describe('Login page test cases', () => {

  beforeEach(() => {
    cy.visit('https://adactinhotelapp.com/');
  });
  it('Verify landing page for valid credentials', () => {
      let loginPage = new LoginPage();
      loginPage.doLogin("KetanPardeshi", "Adactin@123");
      loginPage.verifySuccessfulLogin();
  });

  it('Verify Login for valid credentials', () => {
    let loginPage = new LoginPage();
    loginPage.doLogin("KetanPardeshi", "Adac@123");
    loginPage.verifySuccessfulLogin();
  });

});