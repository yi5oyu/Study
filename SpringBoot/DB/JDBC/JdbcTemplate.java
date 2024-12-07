/*
연결 관리, 명령문 준비, 결과 처리와 같은 일반적인 작업을 캡슐화해 코드 단순화
DataSource 
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

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // 삽입
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
