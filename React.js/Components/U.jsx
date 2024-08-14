import React, {useState, useEffect, useRef} from 'react';

function U(){

    const [isRun, setIsRun] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRun){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRun]);

    function start(){
        setIsRun(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRun(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRun(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div>
            <div>{formatTime()}</div>
            <div>
                <button onClick={start}>시작</button>
                <button onClick={stop}>중지</button>
                <button onClick={reset}>리셋</button>
            </div>
        </div>
    );
}

export default U
