import React, {useState} from 'react';

function J(){

    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="j-color">
            <h1>색 선택</h1>
            <div>
                <p>선택된 색: {color}</p>
                <div style={{backgroundColor: color, width:"50px", height:"20px"}}></div>
            </div>
            <label>색 선택:</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default J
