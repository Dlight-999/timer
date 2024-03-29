import React, { ChangeEvent, useEffect, useState } from 'react';

function Select() {
    const [hours,setHours]= useState(1);
    const [minute,setMinute]= useState(1);
    const [seconds,setSeconds]= useState(1);
    const [timerRunning, setTimerRunning] = useState(false); // State to track whether the timer is running

    const handleHours = (e: ChangeEvent<HTMLInputElement>) =>{
        const newHours = parseInt(e.target.value);
        setHours(newHours);
    }
    const handleMinute = (e: ChangeEvent<HTMLInputElement>) =>{
        const newMinute = parseInt(e.target.value);
        setMinute(newMinute);
    }
    const handleSeconds = (e: ChangeEvent<HTMLInputElement>) =>{
        const newSeconds = parseInt(e.target.value);
        setSeconds(newSeconds);
    }

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (timerRunning) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minute === 0) {
                        if (hours === 0) {
                            clearInterval(interval);
                            setTimerRunning(false); // Stop the timer when it reaches 0
                        } else {
                            setHours(prevHours => prevHours - 1);
                            setMinute(59);
                            setSeconds(59);
                        }
                    } else {
                        setMinute(prevMinute => prevMinute - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(prevSeconds => prevSeconds - 1);
                }
            }, 1000);
        }

        // Clean up the interval when the component unmounts or when timerRunning becomes false
        return () => clearInterval(interval);
    }, [hours, minute, seconds, timerRunning]);

    const toggleTimer = () => {
        setTimerRunning(prevState => !prevState); // Toggle the timerRunning state
    }

    return (
        <>
            <div className='main-content-container'>
                {/* Input fields for hours, minutes, and seconds */}
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="23" value={Math.min(hours + 1, 23)} disabled/>
                </div><h1>&nbsp; </h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59"  value={Math.min(minute + 1, 59)} disabled/>
                </div><h1>&nbsp; </h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59"  value={Math.min(seconds + 1, 59)}disabled/>
                </div>

                <div className='container'>
                    <input type="number" name="" id="" min="0" max="23" value={hours}  maxLength={2}  onKeyDown={()=>false} onChange={handleHours} />
                </div><h1>:</h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59" value={minute}  maxLength={2} onKeyDown={()=>false}  onChange={handleMinute}/>
                </div><h1>:</h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59" value={seconds}  maxLength={2} onKeyDown={()=>false} onChange={handleSeconds} />
                </div>

                <div className='container'>
                    <input type="number" name="" id="" min="0" max="23" value={Math.max(hours - 1, 0)} disabled/>
                </div><h1>&nbsp; </h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59"  value={Math.max(minute - 1, 0)} disabled />
                </div><h1>&nbsp; </h1>
                <div className='container'>
                    <input type="number" name="" id="" min="0" max="59"  value={Math.max(seconds - 1, 0)} disabled/>
                </div>
            </div>
            
                <div className='ae'>
                    {/* Conditionally render play or pause icon based on timerRunning state */}
                    {timerRunning ?
                        <i className="fa-solid fa-circle-pause fa-4x" onClick={toggleTimer}></i> :
                        <i className="fa-sharp fa-solid fa-circle-play fa-4x" onClick={toggleTimer}></i>
                    }
                </div>

        </>
    )
}

export default Select;