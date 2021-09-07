package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.Test;

@Test
@CucumberOptions(        
        features =  {"src/test/resources/features"},
        glue=       {"stepDefinitions"},
        monochrome = true,
        tags   = {"@demo"},
        plugin =    {
                    "pretty", "html:target/cucumber-reports/cucumber-html-report",
                    "json:target/cucumber-reports/CucumberTestReport.json",
                    "rerun:target/cucumber-reports/rerun.txt"}
        )

public class TestRunner extends AbstractTestNGCucumberTests {

}