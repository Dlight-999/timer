import React, { ChangeEvent, useState } from 'react'

function Select() {
    const [hours,setHours]= useState(1);
    const [minute,setMinute]= useState(1);
    const [seconds,setSeconds]= useState(1);
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

  return (
    <>
        <div className='main-content-container'>
            <div className='container'><input type="number" name="" id="" min="0" max="23" value={Math.min(hours + 1, 23)} disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value={Math.min(minute + 1, 59)} disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value={Math.min(seconds + 1, 59)}disabled/></div>


            <div className='container'>
                <input type="number" name="" id="" min="0" max="23" value={hours}  maxLength={2}  onKeyDown={()=>false} onChange={handleHours} />
            </div><h1>:</h1>
            <div className='container'>
                <input type="number" name="" id="" min="0" max="59" value={minute}  maxLength={2} onKeyDown={()=>false}  onChange={handleMinute}/>
            </div><h1>:</h1>
            <div className='container'>
                <input type="number" name="" id="" min="0" max="59" value={seconds}  maxLength={2} onKeyDown={()=>false} onChange={handleSeconds} />
            </div>



            <div className='container'><input type="number" name="" id="" min="0" max="23" value={Math.max(hours - 1, 0)} disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value={Math.max(minute - 1, 0)} disabled /></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value={Math.max(seconds - 1, 0)} disabled/></div>

        </div>
        <div className='nav'>
    <div className='header'>Timer</div>
    <div className='menuBt'><i className="fa-sharp fa-solid fa-plus fa-2x"></i></div>
    </div>
    <div className='ae'>
    <i className="fa-sharp fa-solid fa-circle-play fa-4x"></i>
    </div>
    </>
  )
}

export default Select