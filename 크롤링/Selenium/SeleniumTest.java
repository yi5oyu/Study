public class SeleniumTest {

    @Test
    public void testGoogleTitle() {
        ChromeOptions options = new ChromeOptions();

        options.setBinary("C:/tools/chrome-headless-shell-win64/chrome-headless-shell.exe");

        // GPU 하드웨어 가속 비활성화
        options.addArguments("--disable-gpu");
        // Chrome 보안 샌드박스 비활성화 (권한 문제를 방지, 보안 약화됨)
        options.addArguments("--no-sandbox"); 
        // 공유 메모리를 사용하지 못하도록 방지 (Docker 컨테이너에서 실행될때 발생할 수 있는 메모리 부족 및 충돌 발생 방지)
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
