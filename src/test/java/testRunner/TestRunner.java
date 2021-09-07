package testRunner;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

@Test
@RunWith(ExtendedCucumber.class)
@ExtendedCucumberOptions(
        jsonReport = "target/cucumber-reports/CucumberTestReport.json",
        retryCount = 1,
        detailedReport = true,
        detailedAggregatedReport = true,
        overviewReport = true,
        coverageReport = true,
        jsonUsageReport = "target/cucumber-reports/cucumber-usage.json",
        usageReport = false,
        toPDF = true,
        excludeCoverageTags = {"@flaky" },
        includeCoverageTags = {"@passed" },
        outputFolder = "target/cucumber-reports/extended-report")

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