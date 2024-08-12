// import export

// 1. default export
function B(){
    return(
        <h1>hello world!</h1>
    );
};
// export default C (function 함수명 과 export 이름은 같아야함)
export default B;
// 아무 이름이나 사용 가능
// import Uwesd from './components/A'

// 2. named export
export function B(){
    return(
        <h1>hello world!</h1>
    );
};
// 정해진 이름만 사용가능
// import { B } from './components/A'

// 3. 여러 함수
export function B(){
    return(
        <h1>B</h1>
    );
};
export function C(){
    return(
        <h1>B</h1>
    );
};
export function D(){
    return(
        <h1>B</h1>
    );
};
// 하나의 파일에 named export 여러 개 사용
// import { B, C, D } from './components/A';

// 4. 혼합 사용
function B(){
    return(
        <h1>B</h1>
    );
};
export function C(){
    return(
        <h1>B</h1>
    );
};
export function D(){
    return(
        <h1>B</h1>
    );
};
export default B;
// 하나의 default export와 여러 named exports 사용
// import Dsdbe, { C, D } from './components/A';

// 5. 여러 named export 함수
function B(){
    return(
        <h1>B</h1>
    );
};
function C(){
    return(
        <h1>C</h1>
    );
};
function D(){
    return(
        <h1>D</h1>
    );
};

export default {
  B, C, D
};
// default export 묶어서 사용
// import * as Ffen from './components/A';
// Ffen.B(), Ffen.C(), Ffen.D() 으로 사용
