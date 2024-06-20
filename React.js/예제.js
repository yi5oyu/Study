//App.js
import React, { useState } from 'react'
import './App.css'

function App() {
 // 변수 적용
 let name = "A"
 let buttonName = "버튼"
 // useState
 const [num, setNum] = useState(1)
 const [numList, setNumList] = useState([])
 function numRecording(){
  // ... : 배열에 있던 기존 데이터 넣어줌 (js6 문법), 끝 부분에 현재 숫자 num을 넣어줌
  setNumList([...numList, num])
  // num 초기화
  setNum(0)
 }
 
 return (
  // {} 안에 변수명을 넣어 대입
  // style 인라인 방식 { } 사용. - : js에서 마이너스로 인식됨. 캐멀케이스로 사용
  <div style={{ backgroundColor : "red" }}> { name } </div>

  // style 클래스 이름
  <div className="buttonBox">
    // 실행되는 순간 변수값이 변경되어 페이지가 다시 랜더링됨
    <button onClick = {() => {setNum(++num)}}> { buttonName } </button>

    <div>현재 숫자 : {num}</div>
    <button onClick = {() => {setNum(++num)}}> 숫자 증가 </button>
    <button onClick = {() => {setNum(--num)}}> 숫자 감소 </button>
    <button onClick = {{numRecording}}> 숫자 기록 </button>
    <h1>저장된 숫자</h1>
    <ul>
     // numList 배열의 값을 num변수이름으로 가져옴
     {numList.map((num) => (
       <il>{num}</il>
     ))}
    </ul>
  </div>
 )
}

//App.css
.buttonBox {
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
