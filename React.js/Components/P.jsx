// useEffect()
// component가 다시 랜더링, 새로운 DOM 마운트(첫번째 렌더링), 값 변경
// useEffect(function, [dependencies])

// component가 랜더링될 때마다 발생하는 작업에 유용
// 1. useEffect(() => {})

// 초기 렌더링 한 번만 실행 (API에서 데이터 가져오거나 이벤트 리스너 설정)
// 2. useEffect(() => {}, [])

// component가 랜더링될때와 값이 변경될 때마다 실행
// 3. useEffect(() => {}, [value])

// 이벤트리스너, DOM ,실시간 업데이트, API 데이터 fetching, component 클린업

import React, {useState, useEffect} from 'react';

function P() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    /*
    버튼을 눌러 count가 올라갈때마다 TAB 창에 있는 타이틀 변경됨
    useEffect(() => {
        document.title = `타이틀 : ${count} ${color}`;
    });
    */

    /*
    새로고침하고 최초의 title 값이 실행되어 고정됨
    useEffect(() => {
        document.title = `타이틀 : ${count} ${color}`;
    }, []);
    */

    /*
    원하는 값만 변화 시킬 수 있음 (count는 랜더링되지만 color는 랜더링 안됨)
    useEffect(() => {
        document.title = `타이틀 : ${count} ${color}`;
    }, [count]);
    */

    function addCount(){
        setCount(c => c+1);
    }
    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <div>
            <p style={{color: color}}>수: {count}</p>
            <button onClick={addCount}>추가</button>
            <button onClick={changeColor}>색변경</button>
        </div>
    );

}

export default P
