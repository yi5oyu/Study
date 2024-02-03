public class Member {
	private Long m_id;
	private String userid;
  private String userpw;
}

@Enttity
@Table(name="MEMBER")
public class Member{
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_seq")
    @SequenceGenerator(name = "id_seq", sequenceName = "M_SEQ", allocationSize = 1)
    private Long m_id;

  	private String userid;
    private String userpw;

    // 생성자, 게터, 세터 등 필요한 메서드 추가
}
