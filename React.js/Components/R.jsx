import React, {useState, useEffect} from 'react';

function R(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // 다른 페이지 이동 / 랜더링 제거 되는 경우 중지 시킴
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div>
            <span>{formatTime()}</span>
        </div>
    );
}

export default R
