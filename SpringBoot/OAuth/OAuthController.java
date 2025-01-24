@RestController
public class OAuthController {

    @Autowired
    private OAuth2AuthorizedClientService authorizedClientService;

    @GetMapping("/api/user")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        // response 생성/사용자 정보 저장
        Map<String, Object> response = new HashMap<>();
        response.put("user", principal.getAttributes());
        // accessToken 조회
        OAuth2AuthorizedClient authorizedClient =
            authorizedClientService.loadAuthorizedClient("github", principal.getName());
        // accessToken 저장
        if (authorizedClient != null) {
            response.put("accessToken", authorizedClient.getAccessToken().getTokenValue());
        } else {
            response.put("accessToken", "토큰x");
        }
        return response;
    }
}
