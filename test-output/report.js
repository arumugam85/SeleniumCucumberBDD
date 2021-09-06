$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AdminLogin.feature");
formatter.feature({
  "name": "Login Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with Valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.step({
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter user id as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click Login button",
  "keyword": "When "
});
formatter.step({
  "name": "Page title should be \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click logout link",
  "keyword": "When "
});
formatter.step({
  "name": "Close your browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "title"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin",
        "Dashboard / nopCommerce administration"
      ]
    },
    {
      "cells": [
        "admin123",
        "admin",
        "Dashboard / nopCommerce administration"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with Valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user id as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enter_user_id_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click logout link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close your browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.close_your_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Login with Valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@demo"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_open_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user id as \"admin123\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.user_enter_user_id_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Login button",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.page_title_should_be(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Dashboard / nopCommerce administratio]n\u003e but was:\u003c[Your store. Logi]n\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinitions.LoginSteps.page_title_should_be(LoginSteps.java:86)\r\n\tat ✽.Page title should be \"Dashboard / nopCommerce administration\"(file:///C:/Users/Arumugam/eclipse-workspace/DemoTourSele_Cucumber/src/test/resources/features/AdminLogin.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click logout link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.click_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close your browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.LoginSteps.close_your_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});