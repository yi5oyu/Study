// props

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
