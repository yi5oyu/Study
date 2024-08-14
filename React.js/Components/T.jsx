// useRef()
// useState와 달리 다시 렌더링 되지 않음

import React, {useState, useEffect, useRef} from 'react';

function T(){

//     let [number, setNumber] = useState(0);
    const ref = useRef(0);
    const inputRef = useRef(null);

    function handleClick(){
//         setNumber(n => n + 1);

        // 랜더링되지 않고 value가 변함
        ref.current++;
        console.log(ref)
        console.log(ref.current)

        inputRef.current.focus();
        inputRef.current.style.background = "yellow";
    }

    useEffect(() => {
        console.log("다시 랜더링됨");
        console.log(inputRef);
    })

    return(
        <div>
            <button onClick={handleClick}>클릭</button>
            <input ref={inputRef}/>
        </div>
    );
}

export default T
