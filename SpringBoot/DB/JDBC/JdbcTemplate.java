/*
연결 관리, 명령문 준비, 결과 처리와 같은 일반적인 작업을 캡슐화해 코드 단순화
DataSource을 통해 DB 연결 처리
Statement 코드 없이 간단한 SQL 쿼리 실행
ResultSet 객체 자동 처리, java 객체 매핑
*/

// DB 연결 속성 설정
// DataSource 빈 생성
application.yml

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/db
    username: username
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver

// 리포지토리
@Repository
public class UserRepository {
    /*
    private final JdbcTemplate jdbcTemplate;

    public UserRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    */ 
    @Autowired
    private JdbcTemplate jdbcTemplate;

    // update()
    public int addUser(String name, String email) {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        return jdbcTemplate.update(sql, name, email);
    }
}

// 서비스
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void createNewUser(String name, String email) {
        userRepository.addUser(name, email);
    }
}

// 컨트롤러
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public String addUser(String name, String email) {
        userService.createNewUser(name, email);
        return "user 생성";
    }
}
