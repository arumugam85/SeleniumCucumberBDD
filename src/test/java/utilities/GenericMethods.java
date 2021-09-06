//package utilities;
//
//import org.openqa.selenium.Alert;
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.NoAlertPresentException;
//import org.openqa.selenium.NoSuchElementException;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.interactions.Actions;
//import org.openqa.selenium.support.ui.ExpectedConditions;
//import org.openqa.selenium.support.ui.Select;
//import org.openqa.selenium.support.ui.WebDriverWait;
//
//public class GenericMethods {
//
//	public boolean acceptNextAlert = true;
//
//	// Click web element on page
//	public static void clickElement(WebDriver driver, WebElement element) throws InterruptedException {
//		try {
//			element.click();
//
//		} catch (Exception e) {
//			JavascriptExecutor executor = (JavascriptExecutor) driver;
//			executor.executeScript("arguments[0].click();", element);
//		}
//
//	}
//
//	/**
//	 * Enter text values in text field
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//
//	public void enterValue(WebElement element, String value) {
//		element.clear();
//		element.sendKeys(value);
//	}
//
//	/**
//	 * Get text values from element
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//
//	public String getElementText(WebElement element) {
//		return element.getText();
//	}
//
//	public static void doubleClick(WebDriver driver, WebElement locator) throws InterruptedException {
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//		wait.until(ExpectedConditions.visibilityOf(locator));
//		Actions actions = new Actions(driver);
//		actions.doubleClick(locator);
//
//	}
//
//	/**
//	 * Wait for element to appear on the webpage
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//	public static void waitForElementToBeVisible(WebDriver driver, By locatorObject) {
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//		wait.until(ExpectedConditions.visibilityOfElementLocated(locatorObject));
//	}
//
//	/**
//	 * verify element is visible on the webpage
//	 * 
//	 * @param driver
//	 * @param By
//	 */
//
//	public boolean IsElementVisible(WebDriver driver, By by) {
//		boolean value = false;
//		if (driver.findElement(by).isDisplayed()) {
//			value = true;
//		}
//		driver.findElement(By.xpath(""));
//		return value;
//	}
//
//	/**
//	 * Waits for element to become interactive/clickable
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//	public static void waitForElementToBeClickable(WebDriver driver, By locatorObject) {
//		WebDriverWait wait = new WebDriverWait(driver, 30);
//		wait.until(ExpectedConditions.elementToBeClickable(locatorObject));
//	}
//
//	/**
//	 * Select dropdown by value
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//	public Select selectByValue(WebElement element) {
//		Select drop = new Select(element);
//		return drop;
//	}
//
//	/**
//	 * Select dropdown by Index
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//
//	public void selectByIndex(WebElement element, int index) {
//		Select drop = selectByValue(element);
//		drop.selectByIndex(index);
//	}
//
//	/**
//	 * Select dropdown by value
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//
//	public void selectByValue(WebElement element, String value) {
//		Select drop = selectByValue(element);
//		drop.selectByValue(value);
//	}
//
//	/**
//	 * Select dropdown by visible text
//	 * 
//	 * @param driver
//	 * @param locatorObject
//	 */
//
//	public void selectByVisibleText(WebElement element, String text) {
//		if (text != "") {
//			Select drop = selectByValue(element);
//			drop.selectByVisibleText(text);
//		}
//	}
//
//	public boolean isElementPresent(WebDriver driver, By by) {
//		try {
//			driver.findElement(by);
//			return true;
//		} catch (NoSuchElementException e) {
//			return false;
//		}
//	}
//
//	public boolean isAlertPresent(WebDriver driver) {
//		try {
//			driver.switchTo().alert();
//			return true;
//		} catch (NoAlertPresentException e) {
//			return false;
//		}
//	}
//
//	public String closeAlertAndGetItsText(WebDriver driver) {
//		try {
//			Alert alert = driver.switchTo().alert();
//			String alertText = alert.getText();
//			if (acceptNextAlert) {
//				alert.accept();
//			} else {
//				alert.dismiss();
//			}
//			return alertText;
//		} finally {
//			acceptNextAlert = true;
//		}
//	}
//
//	// public WebElement enterValue(By txtUsername) {
//	// // TODO Auto-generated method stub
//	// return null;
//	// }
//	//
//	// public WebElement clickElement(By btnLogin) {
//	// // TODO Auto-generated method stub
//	// return null;
//	// }
//
//}
