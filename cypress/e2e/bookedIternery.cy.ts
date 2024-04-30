import { BookedIterneryPage } from "../pages/bookedIterneary.pom";
import { LoginPage } from "../pages/loginPage.pom";

describe('Booked Iternery page test cases', () => {

    beforeEach(() => {
      cy.visit('https://adactinhotelapp.com/');
    });

  it('Verify Booked Iternery Page', () => {
      let loginPage = new LoginPage();
      let bookedIterneryPage = new BookedIterneryPage();
      loginPage.doLogin("KetanPardeshi", "Adactin@123");
      bookedIterneryPage.openBookedIterneryPage();
      bookedIterneryPage.verifyBookedIterneryPage();
  });



});