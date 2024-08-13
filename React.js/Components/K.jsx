// updater function
// 기존에 쓰던 count + 1 대신 updater function을 사용함

import React, {useState} from 'react';

function K(){

    const [count, setCount] = useState(0);
    function increment(){
        /*
        3개를 정의해도 실제로 하나만 실행됨
        비동식 상태로 대기 했다 여러 상태 업데이트를 일괄 처리(batch)
        React는 여러 번의 setCount 호출을 하나의 업데이트로 병합
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */
        // 이런 경우 함수형 업데이트 사용
        // Arrow: prev변수 or 변수의 앞글자(c) 사용
        setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
    }
    function reset(){
        setCount(c => c = 0)
    }

    return(
    <>
        <p>수: {count}</p>
        <button onClick={increment}> + </button>
        <button onClick={reset}> 0 </button>
    </>
    );
}

export default K
