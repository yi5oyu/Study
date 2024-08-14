import React, {useState} from 'react';

function M(){

    const [food, setFood] = useState(["Apple","Orange","Banana"]);
    function handleAddFood(){
        const newFood = document.querySelector("#foodInput").value;
        document.querySelector("#foodInput").value = "";

        setFood(f => [...f, newFood]);
    }
    function handleRemoveFood(index){
        // 두 가지로 사용가능
        // food 배열을 순회하면서 i가 index 아닌 것만 필터링됨
        // element: 지정되었지만 사용되지 않음
        // food.filter((element, i) => i !== index)
        // _(언더스코어): 이 매개변수가 함수 내에서 사용되지 않음(첫 번째 매개변수를 무시)
        // food.filter((_, i) => i !== index)
        setFood(food.filter((_, i) => i !== index))
    }
    function handleDeleteFood(){
        setFood(f => f = [])
    }

    return(
        <div>
            <h2>List</h2>
            <ul>
                {food.map((food, index) =>
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="음식 입력"/>
            <button onClick={handleAddFood}>음식 등록</button>
            <button onClick={handleDeleteFood}>전체 삭제</button>
        </div>
    );
}

export default M
