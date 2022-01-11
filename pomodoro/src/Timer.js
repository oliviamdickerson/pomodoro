import './App.css';
import React, { useEffect, useState } from "react";
import TimerButton from './TimerButton';

function Timer( props ) {
    const [ time, setTime ] = useState(props.time);
    const [ timerStatus, setTimerStatus ] = useState(props.timerStatus);
    function changeTimerStatus() {
        if (timerStatus === 0) {
            setTimerStatus(1);
        } else {
            setTimerStatus(0);
        }
    }
    useEffect(() => {
        if (timerStatus === 1) {
            const interval = setInterval(() => setTime(time => time-1), 1000);
            return () => {
                clearInterval(interval);
            };
        }
    });
    var mins = Math.trunc(time/60);
    var secs = time%60;
    return <div>
        <h1>
            {mins + ":" + ("00" + secs).slice(-2)}
        </h1>
        <TimerButton
            status={0}
            changeTimerStatus={changeTimerStatus}
        />
    </div>
}
export default Timer;