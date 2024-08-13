// 조건에 따라 달라지는 rendering

import PropTypes from 'prop-types';

function E(props){
    const ok = <h3 style={{ color:"red" }}> PW: {props.pw} </h3>
    const no = <div> no </div>

    return(props.ck ? ok : no);

//     return(props.ck ? <h3 style={{ color:"red" }}> PW: {props.pw} </h3> : <div> no </div>);
}

E.propTypes = {
    ck: PropTypes.bool,
    pw: PropTypes.string
}
E.defaultProps = {
    ck: false,
    pw: "g"
}
export default E
