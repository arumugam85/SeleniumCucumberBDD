package stepDefinitions;
import java.io.IOException;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPage;
import utilities.ConfigFileReader;


public class LoginSteps extends BaseClass {

	ConfigFileReader configFileReader;
	//LoginPage login = PageFactory.initElements(driver, LoginPage.class);
	

    @Before
    @Test
	public void setup() throws IOException {
		// Reading Properties file
		
		configFileReader = new ConfigFileReader();
		// FileInputStream configPropFile = new FileInputStream("config.properties");
		// configProp.load(propertyFilePath);

		logger = Logger.getLogger("nopCommerce");
		PropertyConfigurator.configure("log4j.properties");

		System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());
		String browser = configFileReader.getBrowser();
		System.out.println("Browser is:" + browser);

		if (browser.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", configFileReader.getDriverPath());

			driver = new ChromeDriver();
			logger.info("***********Launch Chrome Browser*************");
		}

		else {
			System.out.println("firefox browser is not found");
		}
	}

	
	@Given("^User launch Chrome Browser$")
	public void user_launch_Chrome_Browser() throws Throwable {

		login = new LoginPage(driver);
		driver.manage().window().maximize();
	}

	
	@When("^User open URL \"([^\"]*)\"$")
	public void user_open_URL(String url) throws Throwable {
		logger.info("***********Launch nopCommerce Application*************");
		driver.get(configFileReader.getApplicationURL());
		System.out.println("Application launched");
	}

	@When("^User enter user id as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void user_enter_user_id_as_and_password_as(String email, String password) throws Throwable {
		logger.info("***********Enter Login Details*************");
		login.setUserName(email);
		login.setPassWord(password);
	}

	@When("^Click Login button$")
	public void click_Login_button() throws Throwable {
		logger.info("***********Click Login button*************");
		login.clickLogin();
		Thread.sleep(3000);
	}

	@SuppressWarnings("deprecation")
	@When("^Page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) throws Throwable {
		logger.info("***********Verify Page Title*************");
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Assert.assertEquals(title, driver.getTitle());
	}

	@When("^Click logout link$")
	public void click_logout_link() throws Throwable {
		logger.info("***********Click Logout*************");
		try {
			Thread.sleep(3000);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		login.clickLogout();
	}

	@When("^Close your browser$")
	public void close_your_browser() throws Throwable {
		logger.info("***********Closing Browser*************");
		driver.close();
		System.out.println("Browser closed");
	}
	
	@Then("^Verify error message should be \"([^\"]*)\"$")
	public void verify_error_message_should_be(String message) throws Throwable {
		logger.info("***********Verify error message*************");
		try {
			String strError=driver.findElement(By.xpath("//div[@class='message-error validation-summary-errors']")).getText();
			System.out.println(strError);
			Thread.sleep(3000);
			Assert.assertEquals(strError, message);
		} catch (Exception e) {
			System.out.println("Error message is not found");
		}
		
	}

	@After
	public void tearDown() {
		driver.quit();
	}

}
