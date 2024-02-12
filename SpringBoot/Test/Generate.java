//테스트 하고 싶은 메서드에 test 생성 JUnit5
//test 폴더에 생성

@SpringBootTest // 스프링 부트와 연동해 테스트
class ServiceTest {
  @Autowired
  Service service; //service 객체 주입
  
  @test // 이 메서드가 테스트 코드임을 선언
  void test(){
    // 예상 데이터
    Member a = new Memeber(1L, "A", "1");
    Member b = new Memeber(2L, "B", "2");
    Member c = new Memeber(3L, "C", "3");
      // Arrays.asList : 정적 리스트. 동일한 타입 데이터 고정 크기(add(), remove() 사용할 수 없음)
    List<Member> l = Arrays.asList(a, b, c); 
      // 새로운 객체를 생성해 정적 리스트를 일반 리스트로 만듬
    List<Member> m = new ArrayList<Member>(l);

    // 실제 데이터
    List<Member> ms = service.test(); // 실제 Member 타입 데이터를 조회해서 가져옴

    // 비교 검증
      // assertEquals(x,y) : JUnit에서 제공하는 메서드. x: 예상 데이터, y: 실제 데이터
    assertEquals(m.toString(), ms.toString());
      // 값이 null일 경우. toString() 메서드 호출 할 수 없음 이경우 그냥 객체로 비교
  }
}

// Run ServiceTest.test ~
