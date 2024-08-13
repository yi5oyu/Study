// React hook
// userstate, userEffect, useContext, useReducer, useCallback ...

// useState() [name, setName]

import React, {useState} from 'react';

function H(){

    // useState 인자값 넣으면 name 초기값 설정됨
    const [name, setName] = useState("un");
    const updateName = () => {
        setName("young")
    }
    const [age, setAge] = useState(0);
    const updateAge = () => {
        setAge(age+1);
    }
    const [isCheck, setIsCheck] = useState(false);
    const toggle = () => {
        setIsCheck(!isCheck);
    }

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
    }

    return(
        <div>
            <p>name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>age: {age}</p>
            <button onClick={updateAge}>age+-</button>

            <p>check: {isCheck ? "Y" : "N"}</p>
            <button onClick={toggle}>Boolean</button>

            <p>횟수: {count}</p>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default H
