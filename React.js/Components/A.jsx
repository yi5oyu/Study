// import export
// 1. default export
function B(){
    return(
        <div>
            <h1>hello world!</h1>
        </div>
    );
}
// export default C (function 함수명 과 export 이름은 같아야함)
export default B
// 아무 이름이나 사용 가능
// import Dwesd from './components/A'

// 2. named export

export function B(){
    return(
        <div>
            <h1>hello world!</h1>
        </div>
    );
}
// 정해진 이름만 사용가능
// import { B } from './components/A'
