// object 객체 업데이트

import React, {useState} from 'react';

function L(){

    const [human, setHuman] = useState({name: "Young", age: 10});
    function handleNameChange(event){
        // ... 연산자
        //...human === name: "Young", age: 10 (가지고 있는 값)
        // name: "Young", age: 10, name: "Lee" (중복되면 나중에 들어온 값이 사용됨)
        // setHuman({...human, name: event.target.value}); (이것도 동작됨)
        // Arrow 함수와 같이 사용
        setHuman(h => ({...human, name: event.target.value}));
    }
    function handleAgeChange(event){
        setHuman(h => ({...h, age: event.target.value}));
    }

    return(
        <div>
            <p>사람: {human.name} | {human.age}</p>
            <input type="text" value={human.name} onChange={handleNameChange}/><br/>
            <input type="number" value={human.age} onChange={handleAgeChange}/><br/>
        </div>
    );
}

export default L
