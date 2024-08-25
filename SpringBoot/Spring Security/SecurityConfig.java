// https://spring.io/guides/gs/securing-web

// package, import 생략

@Configuration
// 
@EnableWebSecurity
// 웹 보안 설정 클래스로 인식
public class WebSecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	// SecurityFilterChain 설정 (요청이 들어올 때 어떤 보안 필터가 적용될지를 정의)
	/*
	   SecurityFilterChain
	   Spring 기반 웹 어플리케이션에서 요청이 생기면 필터(SecurityFilterChain)를 통과함
	   요청이 체인으로 된 여러 필터를 거치며 허용되는 경우 통과하며 보안 규칙을 위반할 경우 프로세스 중지됨
	*/  
		http
			.authorizeHttpRequests((requests) -> requests
     			 // 들어오는 HTTP 요청에 대한 권한을 설정                       
				.requestMatchers("/", "/home").permitAll()
       				// requestMatchers에 정의된 경로로 들어오는 요청 모든 사용자에게 허용 (인증 없이 접근 가능)                    
				.anyRequest().authenticated()
        			// 그 외 모든 요청은 인증된 사용자만 접근 가능 (로그인 등..)                      
			)
			.formLogin((form) -> form
     			// form으로 로그인 될 때 설정           
				.loginPage("/login")
        			// 보호된 페이지에 접근하려 할 때 사용자에게 보여줄 로그인 경로 설정         
				.permitAll()
        			// 로그인 페이지는 모두 허용됨         
			)
			.logout((logout) -> logout.permitAll());
      			// 로그아웃 요청 모든 사용자에게 허용됨
		return http.build();
    		// SecurityFilterChain 객체 생성 후 반환
	}
}
