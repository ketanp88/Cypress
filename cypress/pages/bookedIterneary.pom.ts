import { UIActions } from "../core/UIActions.core";
import { WebControl } from "../core/WebControl.core";
import { MethodBase } from "./methodBase.pom";

export class BookedIterneryPage extends MethodBase
{

    bookedIternerylink = new WebControl("a[href='BookedItinerary.php']", "booked iternary link");
    orderidTextbx = new WebControl("input[id='order_id_text']", "order id text box");
    bookedIterneryTitle = new WebControl("td[class='login_title']", "booked iternary Title");


    public openBookedIterneryPage()
    {
       this.click(this.bookedIternerylink);
    }

    public verifyBookedIterneryPage()   
    {
       this.verifyIsDisplayed(this.orderidTextbx);
       this.verifyDisplayedText(this.bookedIterneryTitle, "Booked Itinerary");
    }


}