import com.example.springboottest.entity.User;
import com.example.springboottest.controller.UserController;
import com.example.springboottest.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.restdocs.payload.JsonFieldType;

import java.util.Arrays;

import static org.mockito.Mockito.when;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

// UserController 테스트
@WebMvcTest(UserController.class)
// spring security 보안 필터 적용하지 않음
@AutoConfigureMockMvc(addFilters = false)
// REST Docs 설정 자동 구성, 테스트 결과 문서화 수행
@AutoConfigureRestDocs
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void testGetAllUsers() throws Exception {
        // 가상(mock)의 userService에서 결과를 가져옴(DB없이 테스트 가능)
        when(userService.getAllUsers()).thenReturn(Arrays.asList(
            new User(1L, "lee", "lee@google.com"),
            new User(2L, "aaaa", "bbbb@naver.com")
        ));
        // 엔드포인트 users GET 요청
        mockMvc.perform(get("/users"))
            // 상태코드 200 검증
            .andExpect(status().isOk())
            // get-all-users snippet 생성
            .andDo(document("get-all-users",
                responseFields(
                    // JSON 배열([]) 필드 타입, 설명 문서화
                    fieldWithPath("[].id").type(JsonFieldType.NUMBER).description("ID"),
                    fieldWithPath("[].name").type(JsonFieldType.STRING).description("이름"),
                    fieldWithPath("[].email").type(JsonFieldType.STRING).description("이메일")
                )
            ));
    }
    @Test
    public void testGetUserById() throws Exception {
        when(userService.getUserById(1L)).thenReturn(new User(1L, "lee", "lee@google.com"));

        mockMvc.perform(get("/users/{id}", 1L))
            .andExpect(status().isOk())
            .andDo(document("get-user-by-id",
                pathParameters(
                    parameterWithName("id").description("검색할 유저 ID")
                ),
                responseFields(
                    fieldWithPath("id").type(JsonFieldType.NUMBER).description("ID"),
                    fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                    fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                )
            ));
    }
    @Test
    public void testAddUser() throws Exception {
        // JSON 문자열 정의
        String userJson = "{\"name\": \"lee\", \"email\": \"lee@google.com\"}";

        mockMvc.perform(post("/users")
                // contene-type: application/json
                .contentType(MediaType.APPLICATION_JSON)
                // body에 JSON 문자열 전송
                .content(userJson))
            .andExpect(status().isOk())
            .andDo(document("add-user",
                requestFields(
                    fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                    fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                )
            ));
    }
    @Test
    public void testUpdateUser() throws Exception {
        String userJson = "{\"name\": \"abcd\", \"email\": \"abcd@google.com\"}";

        mockMvc.perform(put("/users/{id}", 1L)
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
            .andExpect(status().isOk())
            .andDo(document("update-user",
                pathParameters(
                    parameterWithName("id").description("업데이트할 ID")
                ),
                requestFields(
                    fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                    fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                )
            ));
    }
    @Test
    public void testDeleteUser() throws Exception {
        mockMvc.perform(delete("/users/{id}", 1L))
            .andExpect(status().isOk())
            .andDo(document("delete-user",
                pathParameters(
                    parameterWithName("id").description("삭제할 ID")
                )
            ));
    }
}
