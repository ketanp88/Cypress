Feature: Login Page Test Cases


Background: Open webpage
    Given User is at the login page


@Regression 
Scenario Outline: Login to Adactin Hotel App and Verify landing page.
    When User login with username as '<username>' and password as '<password>'
    Then User is able to successfully login to the Website
        Examples:
            | username         | password    |
            | KetanPardeshi    | Adactin@123 |

@Regression 
Scenario Outline: Login to Adactin Hotel App.
    When User login with username as '<username>' and password as '<password>'
    Then User is able to successfully login to the Website
        Examples:
            | username         | password    |
            | KetanPardeshi    | Adactin@ |