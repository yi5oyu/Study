import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class LlamaAPIService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String chatWithAI() throws JsonProcessingException {
        // API URL 설정
        String url = "http://127.0.0.1:1234/v1/chat/completions";

        // Header 설정
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Request Body 설정
        String requestBody = """
            {
              "model": "QuantFactory/llama-3.2-Korean-Bllossom-3B-GGUF/llama-3.2-Korean-Bllossom-3B.Q8_0.gguf",
              "messages": [
                { "role": "system", "content": "Always answer in natural and formal Korean" },
                { "role": "system", "content": "모든 대답은 3개의 문장으로 구성되어야 합니다." },
                { "role": "user", "content": "여행지 추천" }
              ],
              "temperature": 0
            }
            """;
            // system: 모델이 어떻게 응답해야 하는지에 대한 지침 제공
            // user: 질문 / 요청

        // Request를 엔티티로 묶음
        HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);

        // API 호출
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

        JsonNode root = objectMapper.readTree(response.getBody());  // JSON 파싱
        JsonNode content = root.path("choices").get(0).path("message").path("content");

        // 응답 반환
        return content.asText();
    }
}
