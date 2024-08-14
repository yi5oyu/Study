import React, {useState, useEffect} from 'react';

function Q(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // 한번 사용한뒤 삭제 (메모리 누수 방지, 성능 최적화...)
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("이벤트 리스터 추가")

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("이벤트 리스터 삭제")
        }
    }, []);

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window 길이: {width}px</p>
            <p>Window 높이: {height}px</p>
        </div>
    );
}

export default Q
