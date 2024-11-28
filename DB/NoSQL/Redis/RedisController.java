@RestController
public class RedisController {

    @Autowired
    private RedisService redisService;
    // 저장 /save?key=이름&value=데이터
    @PostMapping("/save")
    public void save(String key, String value) {
        redisService.saveData(key, value);
    }
    // 조회 /get?key=이름
    @GetMapping("/get")
    public String get(String key) {
        return redisService.getData(key);
    }
    // 삭제 /delete?key=이름
    @DeleteMapping("/delete")
    public void delete(String key) {
        redisService.deleteData(key);
    }
}
