import { UIActions } from "../core/UIActions.core";
import { WebControl } from "../core/WebControl.core";
import { MethodBase } from "./methodBase.pom";

export class LoginPage extends MethodBase
{
   username = new WebControl("input[name='username']","Username textbox");
   password = new WebControl("input[name='password']","Password textbox");
   loginBtn = new WebControl("input[type='Submit']","Login button");
   welcomeMsg = new WebControl("input[id='username_show']", "Welcome username message");

   public doLogin(username: string, password: string)
   {
      this.type(this.username, username);
      this.type(this.password, password);
      this.click(this.loginBtn);
   }
   
   public verifySuccessfulLogin()   
   {
      this.verifyIsDisplayed(this.welcomeMsg);
   }


}


