package testRunner;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@Test
@RunWith(ExtendedCucumber.class)
@CucumberOptions(        
        features =  {"src/test/resources/features"},
        glue=       {"stepDefinitions"},
        monochrome = true,
        tags   = {"@demo"},
        plugin = { "pretty","html:target/site/cucumber-pretty", "json:target/cucumber/cucumber.json" })
        

public class TestRunner extends AbstractTestNGCucumberTests {

}