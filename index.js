const chrome = require("selenium-webdriver/chrome");
const { Builder, By, Key, WebDriver } = require("selenium-webdriver");

chrome.setDefaultService(new chrome.ServiceBuilder("C:/Users/USUARIO/Desktop/chromedriver.exe").build());

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  try {
    let driver = new Builder().forBrowser("chrome").build();

    await driver.get(
      "https://www.linkedin.com/jobs/search/?f_TPR=r86400&geoId=106373116&keywords=marketing&location=ecuador"
    );

    await sleep(3000);

    console.log(await driver.getAllWindowHandles());

    await driver.getAllWindowHandles();
  } catch (e) {
    console.log(e);
  }
})();
