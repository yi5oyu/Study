@RestController
@RequestMapping("/api")
public class KakaoSearchController {

    @Value("${kakao.api.key}")
    private String kakaoApiKey;

    @GetMapping(value = "/kakao", produces = "application/json; charset=UTF-8")
    public ResponseEntity<String> kakaoSearchList() {

        URI uri = UriComponentsBuilder
                .fromUriString("https://dapi.kakao.com")
                .path("/v2/local/search/category.json")
                .queryParam("category_group_code", "FD6")
                .queryParam("x", 126.978652)
                .queryParam("y", 37.566826)
                .queryParam("radius", 5000)
                .queryParam("size", 15)
                .queryParam("page", 2)
                .queryParam("sort", "distance")
                .build()
                .toUri();

        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("Authorization", "KakaoAK " + kakaoApiKey)
                .header("Content-Type", "application/json; charset=UTF-8")
                .build();

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.exchange(req, String.class);

        String responseBody = responseEntity.getBody();

        return ResponseEntity.ok(responseBody);
    }
}
