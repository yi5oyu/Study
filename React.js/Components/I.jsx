// onChange
// event handler | <input> radio, <textarea>, <select> option

import react, {useState} from 'react';

function I(){

    const [name, setName] = useState("");
    function handleNameChange(event){
        setName(event.target.value);
    }
    const [quantity, setQuantity] = useState(0);
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    const [comment, setComment] = useState("-");
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    const [pay, setPay] = useState("선택하세요");
    function handlePayChange(event){
        setPay(event.target.value);
    }
    const [pick, setPick] = useState();
    function handlePickChange(event){
        setPick(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>이름: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>수: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="입력해주세요."/>
            <p>설명: {comment}</p>

            <select value={pay} onChange={handlePayChange}>
                <option value="">선택하세요</option>
                <option value="Visa">비자</option>
                <option value="Master">마스터</option>
                <option value="Gift">기프트</option>
            </select>
            <p>결제: {pay}</p>

            <label>
                <input type="radio" value="자동차" checked={pick === "자동차"} onChange={handlePickChange}/>
                자동차
            </label>
            <label>
                <input type="radio" value="배" checked={pick === "배"} onChange={handlePickChange}/>
                배
            </label>
            <p>선택: {pick}</p>
        </div>
    );
}

export default I
