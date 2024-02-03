// 메소드 이름으로 쿼리 생성 (적절한 JPQL쿼리 생성해줌)
// 메소드 이름으로 JPA NamedQuery 호출
// @Query 사용해 Repository Interface에 쿼리 직접 정의

public interface MemberRepository extends Repository<Member, Long>{
  List<Member> findByEmailAndName (String email, String name);
  // select m 
  // from Member m 
  // where m.email = ? and m.name = ?
}

// 쿼리 메소드 
// 키워드 : https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
// JPA가 메소드 이름 분석. JPQL 생성, 실행

// JPA NamedQuery
// @NamedQuery 어노테이션을 이용한 쿼리 정의
@Entity
@NamedQuery(
  name="Member.findByUsername",
  query="select m from Member m where m.username = :username")
// XML 쿼리 정의 (orm.xml)
<named-query name="Member.findByUsername">
    <query>
      <CDATA[ select m from Member m where m.username = :username ]>
    </query>
</named-query>
  
// @Query
public interface MemberRepository extends Repository<Member, Long>{
  // JPQL 쿼리
  @query("select m from Member m where m.username = ?1")
  Member findByUsername(String username);

  // 네이티브 SQL
  @query("select * from Member where username = ?0")
  Member findByUsername(String username);

  // 파라미터 바인딩
  // import org.springframework. data. repository.query.Param 필요
  // select m from Member m where m.username = :name 이름 기반
  // select m from Member m where m.username = ?1"   위치 기반
  @query("select m from Member m where m.username = :name")
  Member findByUsername(@Param("name") String username);
}

// 벌크성 수정 쿼리
