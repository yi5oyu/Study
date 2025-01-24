// https://spring.io/guides/gs/securing-web

// package, import 생략

@Configuration
// 
@EnableWebSecurity
// 웹 보안 설정 클래스로 인식
public class WebSecurityConfig {
	@Bean
    	public WebSecurityCustomizer webSecurityCustomizer() {
        	return web -> web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
		/* 
  		   .ignoring(): 필터 체인에서 어떤 요청을 무시해야 하는지 지정할 수 있음 (모든 보안 검사 우회)
  		   .requestMatchers("/css/**", "/js/**", "/images/**", "/public/**", "/favicon.ico") 등 수동으로 지정
                   PathRequest.toStaticResources(): 일반적인 정적 리소스 위치에 대한 요청 자동으로 지정 (유틸리티 메서드)
             	   .atCommonLocations(): 공통 위치(/css/**, /js/**, /images/**, /webjars/**, /favicon.ico)

   		   정적 자원을 포함 시키지 않아 성능 향상시킬 수 있음
  		*/
    	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		// CorsConfiguration: CORS 관련 설정 지정 (허용되는 출처, 메서드, 헤더 등..)
		configuration.addAllowedOrigin("https://example.com");
		// 특정 도메인 허용
		configuration.addAllowedMethod("GET"); 
    		configuration.addAllowedMethod("POST");
		// GET, POST 메소드 허용
    		configuration.addAllowedHeader("*");

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		// UrlBasedCorsConfigurationSource: CORS 구성을 특정 경로와 연결 (/** : 모든 경로)
    		source.registerCorsConfiguration("/**", configuration);

		return source;
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	// SecurityFilterChain 설정 (요청이 들어올 때 어떤 보안 필터가 적용될지를 정의)
	/*
	   SecurityFilterChain
	   Spring 기반 웹 어플리케이션에서 요청이 생기면 필터(SecurityFilterChain)를 통과함
	   요청이 체인으로 된 여러 필터를 거치며 허용되는 경우 통과하며 보안 규칙을 위반할 경우 프로세스 중지됨
	*/  
		http
			.cors(cors -> cors.configurationSource(corsConfigurationSource()))
			// 사용자 정의 configurationSource 사용
			// .cors(withDefaults()): 디폴트 값을 가짐
			/*
   			Spring Security 6.1 이상 버전에서 사용되지않음
			.csrf().disable()
			// CSRF(Cross-Site Request Forgery) 보호 기능을 비활성화 (토큰 없이도 요청 가능)
			.cors().disable()
			// CORS(Cross-Origin Resource Sharing) 보호 기능을 비활성화 (다른 도메인에서 오는 요청)
   			*/
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
				.requestMatchers("/h2-console/**").authenticated()	       
				// 인증된 사용자 권한	       
				.anyRequest().authenticated()
        			// 그 외 모든 요청은 인증된 사용자만 접근 가능 (로그인 등..)                      
			)
			// oauth2 설정
			.oauth2Login(oauth2 -> oauth2
	                    .loginPage("/oauth2/authorization/github")
	                    .defaultSuccessUrl("http://localhost:8080", true)
	                )
			.logout(logout -> logout
	                    // 로그아웃 URL(POST)
			    .logoutUrl("/logout")
			    // 성공 후 리다이렉트될 URL
	                    .logoutSuccessUrl("http://localhost:8080")
			    // 로그아웃 HTTP 세션 무효화(제거)
	                    .invalidateHttpSession(true)
			    // Spring Security의 인증 객체와 관련된 모든 데이터가 제거
	                    .clearAuthentication(true)
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
