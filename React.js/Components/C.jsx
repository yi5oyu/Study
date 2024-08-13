// 이미지 파일을 import로 가져와 사용
// CSS를 인라인으로 작성
// style={{ ... }}

import pic from '/assets/reactLOGO.svg';

function C(){
    return(
        <div className="ccc">
            <img style={{width:"200px", height:"200px"}} src={pic} alt="default"></img>
        </div>
    )
}

export default C
