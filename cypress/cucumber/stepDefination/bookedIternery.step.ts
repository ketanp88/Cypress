import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import { BookedIterneryPage } from "../../pages/bookedIterneary.pom";


let bookedIterneryPage = new BookedIterneryPage();

When('User click on Booked Iternery link', () => {
    bookedIterneryPage.openBookedIterneryPage();
})

Then('Verify Booked Iternery Page', () => {
    bookedIterneryPage.verifyBookedIterneryPage();
})