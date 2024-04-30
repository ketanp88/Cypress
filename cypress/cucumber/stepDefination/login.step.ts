import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { LoginPage } from "../../pages/loginPage.pom";

let loginPage = new LoginPage();

Given('User is at the login page', () => {
    cy.visit('https://adactinhotelapp.com/')
})

When('User login with username as {string} and password as {string}', (username: string, password: string) => {
    loginPage.doLogin(username, password);
})

Then('User is able to successfully login to the Website', () => {
    loginPage.verifySuccessfulLogin();
})