import React, { useState } from 'react'

function App() {
 // 변수 적용
 let name = "A"
 let buttonName = "버튼"
 // useState
 let [num, setNum] = useState(1)
  
 return (
  <div> { name } </div> // {} 안에 변수명을 넣어 대입
  <button onClick = {() => {setNum(num++)}} > { buttonName } </button> // 실행되는 순가 페이지가 다시 랜더링됨
 )
}

/* useState
 let [변수명, ser변수명] = useState(변수값)
 set변수명(변수값)

 상단에 정의
 바로 실행 X
 반복문 / if문에서 정의 X
*/
