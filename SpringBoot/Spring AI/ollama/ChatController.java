import org.springframework.ai.chat.client.ChatClient;

@RestController
public class ChatController {

  private final ChatClient chatClient;

  public ChatController(ChatClient.Builder chatClientBuilder) {
      this.chatClient = chatClientBuilder.build();
  }

  @PostMapping
  public String getResponseFromAI(@RequestBody String userMessage) {
      return response = chatClient.prompt().user(userMessage).call().content();
  }
}
