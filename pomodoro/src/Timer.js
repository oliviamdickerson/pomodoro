import './App.css';
import React, { useEffect, useState } from "react";

function Timer( props ) {
    const [ time, setTime ] = useState(props.time);
    useEffect(() => {
        const interval = setInterval(() => setTime(time => time-1), 1000);
        return () => {
            clearInterval(interval);
        };
    });
    var mins = Math.trunc(time/60);
    var secs = time%60;
    return <p>
        {mins + ":" + ("00" + secs).slice(-2)}
    </p>
}
export default Timer;