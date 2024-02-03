@Controller
public class MemberController{
  @Autowired
  MemberRepository memberRepository;

  @RequestMapping("/주소")
  public String MemberUpdateForm(@RequestParam("id") Long id){
    Member m = memberRepository.findOne(id);
    return "주소";
  }
}

-> 컨버터 적용
@Controller
public class MemberController{
  @RequestMapping("/주소")
  public String MemberUpdateForm(@RequestParam("id") Member m){
    return "주소";
  }
}
