import imgURL from '/assets/reactLOGO.svg';

function G(){

    const handleClick1 = () => console.log("!")
    const handleClick2 = (name) => console.log(`${name} no!`)
    let count = 0;
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name}: ${count}수`);
        } else {
            console.log(`${name}: 클릭`);
        }
    }
    // event 파라미터 값 받음
    const handleClick4 = (e) => console.log(e)
    // e 값의 파라미터 값 변경
    const handleClick5 = (e) => e.target.textContent = "nono!";
    const handleClick6 = (e) => e.target.style.display = "none";

    return(
//         <button onClick={handleClick1}>Click</button>
//         <button onClick={() => handleClick2("cccc")}>Click</button>
//         <button onClick={() => handleClick3("h")}>Click</button>
//         <button onClick={(e) => handleClick4(e)}>Click</button>
//         <button onClick={(e) => handleClick5(e)}>Click</button>
         <img onClick={(e) => handleClick6(e)} src={imgURL} style={{width:"50px", height:"50px"}} />
    );

}

export default G
