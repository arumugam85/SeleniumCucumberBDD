Feature: Login Validation

  @demo
  Scenario Outline: Successful Login with Valid credentials
    Given User launch Chrome Browser
    When User open URL "https://admin-demo.nopcommerce.com/"
    And User enter user id as "<email>" and password as "<password>"
    When Click Login button
    And Page title should be "<title>"
    When Click logout link

    Examples: 
      | email               | password | title                                  |
      | admin@yourstore.com | admin    | Dashboard / nopCommerce administration |

  @demo
  Scenario Outline: Login failed with Invalid credentials
    Given User launch Chrome Browser
    When User open URL "https://admin-demo.nopcommerce.com/"
    And User enter user id as "<email>" and password as "<password>"
    When Click Login button
    Then Verify error message should be "Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect"

    Examples: 
      | email               | password | title                                  |
      | admin@yourstore.com | adm      | Dashboard / nopCommerce administration |
