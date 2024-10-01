public class SeleniumTest {

    @Test
    public void testGoogleTitle() {
        ChromeOptions options = new ChromeOptions();

        options.setBinary("C:/tools/chrome-headless-shell-win64/chrome-headless-shell.exe");

        options.addArguments("--headless");
        options.addArguments("--disable-gpu");
        options.addArguments("--no-sandbox"); 
        options.addArguments("--disable-dev-shm-usage"); 

        WebDriver driver = new ChromeDriver(options);

        try {
            driver.get("https://www.google.com");

            String pageTitle = driver.getTitle();

            System.out.println("타이틀: " + pageTitle);
          
            assertEquals("Google", pageTitle, "구글나와야함");
        } finally {
            driver.quit();
        }
    }

}
