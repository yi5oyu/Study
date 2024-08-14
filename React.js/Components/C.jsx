// JSX에서 객체전달은 {{ ... }}를 사용해야함(JSX 중괄호 안에 있는 JS객체)
// ex) 인라인 css
// 대부분 속성은 캐멀케이스
// ex) background-color =>backgroundColor

import pic from '/assets/reactLOGO.svg';

function C(){

    const person = {
        name: "C",
        age: 1,
        physical: {
            weight: 10,
            height: 20
        }
    }

    return(
        <div className="ccc" style={{backgroundColor:"green"}}>
            <img style={{width:"200px", height:"200px"}} src={pic} alt="default"></img>
        </div>
    )
}

export default C
