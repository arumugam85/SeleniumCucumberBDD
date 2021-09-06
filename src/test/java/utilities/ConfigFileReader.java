package utilities;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileReader {

	private Properties configProp;
	private final String propertyFilePath = "configs//config.properties";

	public ConfigFileReader() throws IOException {
		BufferedReader reader;

		reader = new BufferedReader(new FileReader(propertyFilePath));
		configProp = new Properties();
		configProp.load(reader);
		reader.close();
	}

	public String getDriverPath() {
		String driverPath = configProp.getProperty("driverPath");
		if (driverPath != null)
			return driverPath;
		else
			throw new RuntimeException("driverPath not specified in the Configuration.properties file.");
	}

	public String getApplicationURL() {
		String url = configProp.getProperty("url");
		return url;
	}
	
	public String getBrowser() {
		String browser = configProp.getProperty("browser");
		return browser;
	}
	
	
}
