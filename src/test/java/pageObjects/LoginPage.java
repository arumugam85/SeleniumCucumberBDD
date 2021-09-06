package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

//import utilities.GenericMethods;

public class LoginPage {

	public static WebDriver driver;

	// GenericMethods actions = new GenericMethods();

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "Email")
	WebElement txtUsername;
	//
	@FindBy(id = "Password")
	WebElement txtPassword;
	//
	@FindBy(css = "button[type='submit']")
	WebElement btnLogin;
	//
	@FindBy(linkText = "Logout")
	WebElement btnLogOut;

	public void setUserName(String uname) {
		txtUsername.clear();
		txtUsername.sendKeys(uname);

	}

	public void setPassWord(String password) {
		txtPassword.clear();
		txtPassword.sendKeys(password);

	}

	public void clickLogin() {
		btnLogin.click();

	}

	public void clickLogout() {
		btnLogOut.click();

	}

}
