//App.js
import React, { useState } from 'react'

function App() {
 // 변수 적용
 let name = "A"
 let buttonName = "버튼"
 // useState
 let [num, setNum] = useState(1)
  
 return (
  // {} 안에 변수명을 넣어 대입
  // style 인라인 방식 { } 사용. - : js에서 마이너스로 인식됨. 캐멀케이스로 사용
  <div style={{ backgroundColor : "red" }}> { name } </div>
  // 실행되는 순간 변수값이 변경되어 페이지가 다시 랜더링됨
  // style 클래스 이름
  <button className="number" onClick = {() => {setNum(num++)}} > { buttonName } </button> 
 )
}

//App.css
.number {
  background-color : red;
}

/* useState
 let [변수명, ser변수명] = useState(변수값)
 set변수명(변수값)

 일반 변수는 새로고침되야 랜더링되는 반면 useState는 값이 변경되면 자동으로 랜더링됨

 상단에 정의
 바로 실행 X (랜더링이 반복됨)
 반복문 / if문에서 정의 X
*/
