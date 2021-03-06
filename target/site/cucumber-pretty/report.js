$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Validation",
  "description": "",
  "id": "login-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful Login with Valid credentials",
  "description": "",
  "id": "login-validation;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter user id as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Page title should be \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click logout link",
  "keyword": "When "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-validation;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "title"
      ],
      "line": 13,
      "id": "login-validation;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin",
        "Dashboard / nopCommerce administration"
      ],
      "line": 14,
      "id": "login-validation;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14691687600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login with Valid credentials",
  "description": "",
  "id": "login-validation;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enter user id as \"admin@yourstore.com\" and password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_Browser()"
});
formatter.result({
  "duration": 2682287500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 15
    }
  ],
  "location": "LoginSteps.user_open_URL(String)"
});
formatter.result({
  "duration": 5517386401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 23
    },
    {
      "val": "admin",
      "offset": 61
    }
  ],
  "location": "LoginSteps.user_enter_user_id_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 2797948400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Login_button()"
});
formatter.result({
  "duration": 13990381900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 3074331900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_logout_link()"
});
formatter.result({
  "duration": 5334723900,
  "status": "passed"
});
formatter.after({
  "duration": 1897524500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Login failed with Invalid credentials",
  "description": "",
  "id": "login-validation;login-failed-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter user id as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify error message should be \"Login was unsuccessful. Please correct the errors and try again.\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-validation;login-failed-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "title"
      ],
      "line": 25,
      "id": "login-validation;login-failed-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "adm",
        "Dashboard / nopCommerce administration"
      ],
      "line": 26,
      "id": "login-validation;login-failed-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6937479000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login failed with Invalid credentials",
  "description": "",
  "id": "login-validation;login-failed-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User enter user id as \"admin@yourstore.com\" and password as \"adm\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Click Login button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Verify error message should be \"Login was unsuccessful. Please correct the errors and try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_Browser()"
});
formatter.result({
  "duration": 440985400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/",
      "offset": 15
    }
  ],
  "location": "LoginSteps.user_open_URL(String)"
});
formatter.result({
  "duration": 6125794201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 23
    },
    {
      "val": "adm",
      "offset": 61
    }
  ],
  "location": "LoginSteps.user_enter_user_id_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 1939791700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Login_button()"
});
formatter.result({
  "duration": 4839662599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.",
      "offset": 32
    }
  ],
  "location": "LoginSteps.verify_error_message_should_be(String)"
});
formatter.result({
  "duration": 3441711700,
  "error_message": "java.lang.AssertionError: expected [Login was unsuccessful. Please correct the errors and try again.] but found [Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect]\r\n\tat org.testng.Assert.fail(Assert.java:93)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:512)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:134)\r\n\tat org.testng.Assert.assertEquals(Assert.java:115)\r\n\tat org.testng.Assert.assertEquals(Assert.java:189)\r\n\tat org.testng.Assert.assertEquals(Assert.java:199)\r\n\tat stepDefinitions.LoginSteps.verify_error_message_should_be(LoginSteps.java:123)\r\n\tat ???.Then Verify error message should be \"Login was unsuccessful. Please correct the errors and try again.\"(AdminLogin.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1737458400,
  "status": "passed"
});
});