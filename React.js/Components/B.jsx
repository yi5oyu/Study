// JSX 규칙

// 하나의 루트 엘리먼트 반환해야됨
// Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? 오류발생
// 모든 태그 닫아줘야함
// Unterminated JSX contents 오류

// ""를 {}로 바꿔써 동적으로 사용할 수 있음

function B(){
    const nothing1 = "SBeesdf";
    const nothing2 = "gdgeDgE";

    return(
        <>
            <div className="bb">
                <h2> { new Date().getFullYear() } : {nothing1}, {nothing2}</h2>
            </div>
            <div>
            </div>
        </>
    );
}

export default B
