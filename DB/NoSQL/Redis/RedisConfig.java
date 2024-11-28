@Configuration
public class RedisConfig {

    // @Value("${spring.redis.host}")
    // private String redisHost;
    
    // @Value("${spring.redis.port}")
    // private String redisPort;
    
    // @Value("${spring.redis.password}")
    // private String redisPassword;
    
    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory) {
        // RedisTemplate: Redis에 데이터를 저장하고 읽기 위한 클래스 (Redis 명령을 실행할 수 있는 메서드 제공)
        // 키(String), 값(Object - 저장하는 데이터 타입)
        RedisTemplate<String, Object> template = new RedisTemplate<>();
        // RedisConnectionFactory: Spring이 Redis 서버와 연결 관리
        template.setConnectionFactory(connectionFactory);
        // Redis에 저장되는 데이터 키를 직렬화
        template.setKeySerializer(new StringRedisSerializer());
        // 값을 문자열로 직렬화
        template.setValueSerializer(new StringRedisSerializer());
        return template;
    }

}
