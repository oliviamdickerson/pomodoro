import './App.css';
import React, { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlinePauseCircle } from 'react-icons/ai';

function TimerButton( props ) {
    const [ status, setStatus ] = useState(props.status);
    function changeStatus() {
        if (status === 0) {
            setStatus(1);
            props.changeTimerStatus();
        } else {
            setStatus(0);
            props.changeTimerStatus();
        }
    }
    if (status === 0) {
        return <div>
            <AiOutlinePlayCircle className="timerbutton" onClick={changeStatus} size={75}/>
        </div>
    }
    else {
        return <div>
            <AiOutlinePauseCircle className="timerbutton" onClick={changeStatus} size={75}/>
        </div>
    }
}
export default TimerButton;