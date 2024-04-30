Feature: Booked Iternery Page Test Cases


Background: Open webpage
    Given User is at the login page


@Regression 
Scenario Outline: Verify Booked Iternery page for controls
    When User login with username as '<username>' and password as '<password>'
    When User click on Booked Iternery link
    Then Verify Booked Iternery Page
    Examples:
        | username         | password    |
        | KetanPardeshi    | Adactin@123 |