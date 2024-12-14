/*
  스코프 생명주기
  데이터가 사용될 범위에 따라 선택 사용
  page: JSP 페이지(JSP 페이지가 실행되는 동안에만 존재)
  request: HTTP 요청 기간 동안 존재(서블릿 -> JSP)
  session: 세션 시간 동안 존재
  application: 전체 어플리케이션 공유 
  
  page < request < session < application
*/

@Controller
public class JspController {

    @GetMapping("/scope")
    public String Scopes(HttpServletRequest request, HttpSession session, ServletContext context, Model model) {

        request.setAttribute("requestScope", "리퀘스트"); 
        session.setAttribute("sessionScope", "세션");
        context.setAttribute("applicationScope", "어플리케이션");
        // HttpServletRequest를 사용
        model.addAttribute("model", "모델");
        
        return "jsp";
    }
}

// JSP
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>JSP</title>
</head>
<body>
    <!-- 스코프 -->
    <% pageContext.setAttribute("pageScope", "페이지"); %>

    <!-- Page -->
    <div>페이지:</div>
    <p>${pageScope}</p>
  
    <!-- Request -->
    <div>리퀘스트:</div>
    <p>${requestScope}</p>

    <!-- Session -->
    <div>세션:</div>
    <p>${sessionScope}</p>

    <!-- Application -->
    <div>어플리케이션:</div>
    <p>${applicationScope}</p>

    <!-- Model -->
    <div>모델:</div>
    <p>${modelScope}</p>
</body>
</html>
