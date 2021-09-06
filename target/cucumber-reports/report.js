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
formatter.step({
  "line": 11,
  "name": "Close your browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
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
      "line": 14,
      "id": "login-validation;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin",
        "Dashboard / nopCommerce administration"
      ],
      "line": 15,
      "id": "login-validation;successful-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6331057300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
formatter.step({
  "line": 11,
  "name": "Close your browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_Browser()"
});
formatter.result({
  "duration": 689092100,
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
  "duration": 3163324200,
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
  "duration": 1039340500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_Login_button()"
});
formatter.result({
  "duration": 10881183400,
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
  "duration": 3066980500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.click_logout_link()"
});
formatter.result({
  "duration": 4329286500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.close_your_browser()"
});
formatter.result({
  "duration": 464032300,
  "status": "passed"
});
formatter.after({
  "duration": 2304163800,
  "status": "passed"
});
});