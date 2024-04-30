import { errorLog, logVerification } from './logs.core';
import { UIActions } from './UIActions.core';
import { WebControl } from './WebControl.core';

/** 
 * All Verification methods required for test case verification.
 * @author Ketan Pardeshi  
 * */
export class Assertion extends UIActions {
    /**
   * Verify two objects are equals. 
   * If both objects are equal test case gets passed else fails.
   * 
   * @param object1 First object.
   * @param object2 Second object.
   * Example: 
   * 
   * verifyIsEquals("Invalid username", "Invalid username");
   */

    public verifyIsEquals(object1: any, object2: any) {
        try {
            const verificationResult = object1 === object2 ? "PASSED" : "Failed";
            logVerification(`VERIFICATION: ${verificationResult}. Expected: '${object1}' Actual: '${object2}'`);
            expect(object1).equal(object2)
        } catch (error1) {
            errorLog("VERIFICATION: FAILED. Expected: '" + object1 + "' Actual: '" + object2 + "'");
            throw error1;
        }
    }

    /**
   * Verify first value contains substring as second. 
   * If expected value is present in actual value then test case gets passsed else failed.
   * 
   * @param expected First object which has .
   * @param actual Second object.
   * Example: 
   * 
   * verifyIsContains("Invalid username Test", "Invalid username");
   */
    public verifyIsContains(actual: string, expected: string) {
        try {
            const verificationResult = actual.trim().includes(expected.trim())? "PASSED" : "Failed";
            logVerification(`VERIFICATION: ${verificationResult}. Actual:  '${actual}'  contains Expected: '${expected.trim()}'`);
            expect(actual.trim()).contains(expected.trim());
        } catch (error1) {
            errorLog("VERIFICATION: FAILED. Actual: '" + expected + "' contains Expected: '" + actual + "'");
            throw error1;
        }
    }



    /**
   * Verify element's displayed/not displayed status as per expected value
   * If expected element's displayed status is as per expected then test case gets passsed else failed.
   * 
   * @param control Control of which enable or disable status.
   * @param expValue Expected value enabled as true or disabled as false.
   * Example: 
   * 
   * loginBtn = new WebControl(this.page.locator('#login'), 'Login button');
   * 
   * verifyIsEnabled(loginBtn, true);
   */


public verifyIsDisplayed(control: WebControl) {
    
    try {
        try {
            cy.get(control.selector).should('be.visible');
            logVerification(`VERIFICATION: PASSED '${control.controlDescription}' is visible`);  
        } catch (error) {
            errorLog("VERIFICATION: FAILED. '" + control.controlDescription + "' displayed status is: '" + false + "' due to reason: " + error);
        }        
    } catch (error) {
        
    }
}


/**
   * Verify element is not displayed
   * If expected element's displayed status is false the test case gets passed else failed.
   * 
   * @param control Control for which not displayed status need to verify.
   * @param isAlreadyHidden Is control already hidden or need to wait to get hidden.
   * Example: 
   * 
   * loginBtn = new WebControl(this.page.locator('#login'), 'Login button');
   * 
   * verifyIsNotDisplayed(loginBtn, true);
   */


public verifyIsNotDisplayed(control: WebControl, isAlreadyHidden = false) {
    try {
        cy.get(control.selector).should('not.exist');
        logVerification(`VERIFICATION: PASSED '${control.controlDescription}' is NOT visible`);          

    } catch (error) {
        errorLog("VERIFICATION: FAILED. '" + control.controlDescription + "' is Visible.");
    }
}

/**
   * Verify attribute value of the control
   * If elements attribute value is as per expected value then test case gets passed else failed.
   * 
   * @param control Control for which attribute value need to verify.
   * @param attributeName Attribute name.
   * @param attributeValue Expected attribute value
   
   * Example: 
   * 
   * loginBtn = new WebControl(this.page.locator('#login'), 'Login button');
   * 
   * verifyAttributeValue(loginBtn, "value", "Submit");
   */

public  verifyAttributeValue(control: WebControl, attributeName: string, expectedAttributeValue: string) {
    try {
        cy.get(control.selector).should('have.attr', attributeName, expectedAttributeValue);
        logVerification(`VERIFICATION: PASSED. Expected:  '${expectedAttributeValue}' Actual :  '${expectedAttributeValue}'`);
    } catch (error) {
        logVerification(`VERIFICATION: FAILED. Expected:  '${expectedAttributeValue}' does not contains Actual :  '${expectedAttributeValue}'`);
    }
}


/**
   * Verify element's enabled/disabled status as per expected value
   * If expected element's enabled status is as per expected then test case gets passsed else failed.
   * 
   * @param control Control of which enable or disable status.
   * @param expValue Expected value enabled as true or disabled as false.
   * Example: 
   * 
   * loginBtn = new WebControl(this.page.locator('#login'), 'Login button');
   * 
   * verifyIsEnabled(loginBtn, true);
   */


    public  verifyIsEnabled(control: WebControl, expValue: boolean = true) {
        try {
            cy.get(control.selector).should('be.enabled');
            logVerification(`VERIFICATION: PASSED '${control.controlDescription}' is Enabled`);          
    
        } catch (error) {
            errorLog("VERIFICATION: FAILED. '" + control.controlDescription + "' is Not Enabled.");
        }
    }

    public  verifyIsDisabled(control: WebControl, expValue: boolean = true) {
        try {
            cy.get(control.selector).should('be.disabled');
            logVerification(`VERIFICATION: PASSED '${control.controlDescription}' is Disabled`);          
    
        } catch (error) {
            errorLog("VERIFICATION: FAILED '" + control.controlDescription + "' is Not Disabled.");
        }
    }


    /**
   * Verify element's text as per expected value
   * If expected element's text is as per expected value then test case gets passsed else failed.
   * 
   * @param control Control of which text need to verify.
   * @param expectedText Expected value.
   * Example: 
   * 
   * errorMsg = new WebControl(this.page.locator('#error'), 'Login Error message');
   * 
   * verifyDisplayedText(loginBtn, "Invalid Username Test User");
   */

    public  verifyDisplayedText(control: WebControl, expectedText: string) {
                
        try {
            cy.get(control.selector).should('have.text', expectedText);
            logVerification(`VERIFICATION: PASSED. Expected: '${control.controlDescription}' contain text ` + expectedText);
        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${control.controlDescription}' Does not contain text ` + expectedText);
        }
    }


    /**
   * Verify element's text contains partial expected value
   * If expected element's text contains expected value then test case gets passsed else failed.
   * 
   * @param control Control of which text need to verify.
   * @param expectedText Expected partial value.
   * Example: 
   * 
   * errorMsg = new WebControl(this.page.locator('#error'), 'Login Error message');
   * 
   * verifyDisplayedTextContains(loginBtn, "Invalid Username");
   */

    public  verifyDisplayedTextContainsValue(control: WebControl, expectedText: string) {
                
        try {
            cy.get(control.selector).should('contain.text', expectedText);
            logVerification(`VERIFICATION: PASSED. Expected: '${control.controlDescription}' contain value ` + expectedText);
        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${control.controlDescription}' Does not contains value ` + expectedText);
        }
    }

 /**
   * Verify element's text does not contains expected value
   * If expected element's text does not contains expected value then test case gets passsed else failed.
   * 
   * @param control Control of which text need to verify.
   * @param expectedText Expected partial value.
   * Example: 
   * 
   * errorMsg = new WebControl(this.page.locator('#error'), 'Login Error message');
   * 
   * verifyDisplayedTextDoesNotContains(loginBtn, "Enter User");
   */


    public  verifyDisplayedTextDoesNotContains(control: WebControl, expectedText: string) {
        try {
            cy.get(control.selector).should('not.contain.text', expectedText);
            logVerification(`VERIFICATION: PASSED. Expected: '${control.controlDescription}' does not contain value ` + expectedText);
        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${control.controlDescription}' contains value ` + expectedText);
        }
    }


    /**
   * Verify element's textbox is equal to expected value
   * If expected element's textbox value to be expected value then test case gets passsed else failed.
   * 
   * @param control Textbox control.
   * @param expectedText Expected value.
   * Example: 
   * 
   * usernameTxtbx = new WebControl(this.page.locator('#username'), 'Username textbox');
   * 
   * verifyTextboxValue(usernameTxtbx, "Test@Adactin");
   */

    public  verifyTextboxValue(control: WebControl, expectedValue: string) {
        try {
            cy.get(control.selector).should('have.value', expectedValue);
            logVerification(`VERIFICATION: PASSED. Expected: '${control.controlDescription}' value is ` + expectedValue);
        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${control.controlDescription}' does not have value ` + expectedValue);
        }
    }

    /**
   * Verify element's checkbox/radio value is equal to expected value
   * If expected element's checkbox/radio value to be expected value then test case gets passsed else failed.
   * 
   * @param control Checkbox/radio control.
   * @param expectedText Expected checkbox/radio value.
   * Example: 
   * 
   * isMinor = new WebControl(this.page.locator('#isMinor'), 'Is Minor checkbox');
   * 
   * verifyCheckboxValue(isMinor, true);
   */

    public  verifyCheckboxValue(control: WebControl, expectedValue: boolean) {
        try {
            cy.get(control.selector).should('have.value', expectedValue);
            logVerification(`VERIFICATION: PASSED. Expected: '${control.controlDescription}' checkbox value is ` + expectedValue);
        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${control.controlDescription}' does not have value ` + expectedValue);
        }
    }


    /**
   * Verify element's attribute value contains expected value
   * If element's attribute value contains expected value then test case gets passsed else failed.
   * 
   * @param control Control of which attribute value need to verify.
   * @param attributeName Attribute name
   * @param expectedText Expected partial value.
   * 
   * Example: 
   * 
   * loginBtn = new WebControl(this.page.locator('#login'), 'Login button');
   * 
   * verifyAttributeValueContains(loginBtn, "value", "Submit");
   */

    public  verifyAttributeValueContains(locator: WebControl, attributeName: string, attributeValue: string) {
        try {
            cy.get(locator.selector).should('have.attr', attributeName, attributeValue);
            logVerification(`VERIFICATION: PASSED. Expected: '${attributeValue}' contains Actual : '${attributeValue}'`);

        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Expected: '${locator.controlDescription}' does NOT contains Attribute value : '${attributeValue}'`);
        }
    }


    /**
   * Verify Alert text is equal to expected value
   * If alert text is equal to expected value then test case gets passsed else failed.
   * 
   * @param expectedText Expected alert text.
   * Example: 
   * 
   * verifyAlertText("Password should be 8 digit.")
   */

    public  verifyAlertText(expectedText: string) {
        try {
              cy.on('window:alert', (str) => {
                    expect(str).equals(expectedText);
              });
              logVerification(`VERIFICATION: PASSED. Alert Text is Actual : '${expectedText}'`);

        } catch (error) {
            logVerification(`VERIFICATION: FAILED. Alert Text does not have value '${expectedText}'`);

        }
        
    }
}


