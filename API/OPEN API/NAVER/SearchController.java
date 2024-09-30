// https://developers.naver.com/docs/serviceapi/search/blog/blog.md#java
// local.json

@RestController
@RequestMapping("/api/search")
public class NaverSearchController {
    @Value("${naver.client.id}")
    private String clientId;

    @Value("${naver.client.secret}")
    private String clientSecret;

    @GetMapping(value = "/search", produces = "application/json; charset=UTF-8")
    public ResponseEntity<String> naverSearchList() {

        URI uri = UriComponentsBuilder
                .fromUriString("https://openapi.naver.com")
                .path("/v1/search/local.json")
                .queryParam("query", "용인")
                .queryParam("display", 5)
                .queryParam("sort", "comment")
                .encode(Charset.forName("UTF-8"))
                .build()
                .toUri();

        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("X-Naver-Client-Id", clientId)
                .header("X-Naver-Client-Secret", clientSecret)
                .header("Content-Type", "application/json; charset=UTF-8")
                .build();

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.exchange(req, String.class);

        String responseBody = responseEntity.getBody();

        return ResponseEntity.ok(responseBody);
    }

}
