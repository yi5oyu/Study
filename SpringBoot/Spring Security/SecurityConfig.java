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
			.csrf().disable()
			// CSRF(Cross-Site Request Forgery) 보호 기능을 비활성화 (토큰 없이도 요청 가능)
			.cors().disable()
			// CORS(Cross-Origin Resource Sharing) 보호 기능을 비활성화 (다른 도메인에서 오는 요청)
			.authorizeHttpRequests((requests) -> requests
     			// 들어오는 HTTP 요청에 대한 권한을 설정                       
				.requestMatchers("/", "/home").permitAll()
       				// requestMatchers에 정의된 경로로 들어오는 요청 모든 사용자에게 허용 (인증 없이 접근 가능)
				/*
    				   .requestMatchers(): URL 경로에 따라 보안 설정
	   			    
    				   .dispatcherTypeMatchers(): 요청 유형에 따라 보안 설정
	   			    - REQUEST: 클라이언트에서 오는 요청
	                            - FORWARD: 요청이 서버안에서 포워딩 될 때 (servlet(Controller 등..)에서 다른 servlet or servlet에서 JSP)
			            - INCLUDE, ERROR, ASYNC
				*/
				.anyRequest().authenticated()
        			// 그 외 모든 요청은 인증된 사용자만 접근 가능 (로그인 등..)                      
			)
			.formLogin((form) -> form
     			// form으로 로그인 될 때 설정           
				.loginPage("/login")
        			// 보호된 페이지에 접근하려 할 때 리디렉션됨. 그때 사용자에게 보여줄 로그인 경로 설정
				.defaultSuccessUrl("/home", true)
				// 사용자가 성공적으로 로그인한 후 리디렉션되는 URL 정의
				// true: 항상 이 URL 사용. false: 보호된 URL(/page1)에 엑세스하려다 login 페이지로 리디렉션된 경우는 이 URL로 가지않고 로그인 후 /page1으로 돌아감  
				.permitAll()
        			// 로그인 페이지는 모두 허용됨

				/*
    				   그 외 formLogin에서 사용되는 다른 메소드
	   			   .loginProcessingUrl("/주소")
	  			    - 로그인 form 양식의 action 속성이 이 URL로 설정되어 있어야함
                        	   .usernameParameter("변수")	
                        	   .passwordParameter("변수")	
				*/
			)
			.logout((logout) -> logout.permitAll());
      			// 로그아웃 요청 모든 사용자에게 허용됨
			// .logout(withDefaults())
		return http.build();
    		// SecurityFilterChain 객체 생성 후 반환
	}
}
