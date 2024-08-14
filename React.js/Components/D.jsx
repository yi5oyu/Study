// props
// props를 사용한 값 전달
// 상위 컴포넌트: <D4 name="props test" nothing={15} check={true}/> 전달
// 속성을 정의하지 않았을 경우 propTypes을 사용해 디폴트 값 설정
// <D4 nothing={10}/>
// prop-types 를 사용해 prop의 타입을 설정할 수 있음

/*
컴포넌트도 일반 태그 처럼 중첩해서 사용 수 있음
<A>
    <D/>
</A>
*/

import PropTypes from 'prop-types'
// node_modules에 prop-types 패키지 존재해야함

function D(props){
    return(
        <div>
            <p>props TEST: {props.name}</p>
            {props.nothing} | Bollean: {props.check ? "^ture^" : "^false^"}
        </div>
    );
}

D.propTypes = {
    name: PropTypes.string,
    nothing: PropTypes.number,
    check: PropTypes.bool
}
D.defaultProps = {
    name: "D",
    nothing: 0,
    check: false
}

// 타입이 맞지 않으면 window console 창에 오류
// <Component key=value /> 로 사용됨
export default D
