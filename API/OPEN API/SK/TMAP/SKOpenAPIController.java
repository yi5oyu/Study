@RestController
public class SKOpenAPIController {

    @Value("${skopenapi.api.key}")
    private String apiKey;

    @GetMapping("/sk")
    public ResponseEntity<String> getRoute() {
        URI uri = UriComponentsBuilder
                .fromUriString("https://apis.openapi.sk.com")
                .path("/tmap/routes/pedestrian")
                .queryParam("version", "1")
                .queryParam("startX", 126.9246033)
                .queryParam("startY", 33.45241976)
                .queryParam("endX", 126.9041895)
                .queryParam("endY", 33.4048969)
                .queryParam("startName", "%EA%B4%91%EC%B9%98%EA%B8%B0%ED%95%B4%EB%B3%80")
                .queryParam("endName", "%EC%98%A8%ED%8F%89%ED%8F%AC%EA%B5%AC")
                .encode(Charset.forName("UTF-8"))
                .build()
                .toUri();

        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("appKey", apiKey)
                .header("Content-Type", "application/json; charset=UTF-8")
                .build();

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.exchange(req, String.class);

        return ResponseEntity.ok(responseEntity.getBody());
    }
}
