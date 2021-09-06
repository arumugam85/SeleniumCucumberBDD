package stepDefinitions;

import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import pageObjects.LoginPage;

public class BaseClass {
	
	public WebDriver driver;
	public LoginPage login;
	//public AddCustomerPage addCust;
	//public SearchCustomerPage searchCust;
	public static Logger logger;
	public Properties configProp;
	
//	public static String randomGenerateString() {
//		String generateString=RandomStringUtils.randomAlphabetic(5);
//		return (generateString);
//	}
	

}
