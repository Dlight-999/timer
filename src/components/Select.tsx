import React, { ChangeEvent, useState } from 'react'

function Select() {
    const [hours,setHours]= useState(0);
    const [minute,setMinute]= useState(0);
    const [seconds,setSeconds]= useState(0);
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
            <div className='container'><input type="number" name="" id="" min="0" max="23" value="0" disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value="0" disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value="0"disabled/></div>


            <div className='container'>
                <input type="number" name="" id="" min="0" max="23" value={hours} onChange={handleHours} />
            </div><h1>:</h1>
            <div className='container'>
                <input type="number" name="" id="" min="0" max="59" value={minute} onChange={handleMinute}/>
            </div><h1>:</h1>
            <div className='container'>
                <input type="number" name="" id="" min="0" max="59" value={seconds} onChange={handleSeconds} />
            </div>



            <div className='container'><input type="number" name="" id="" min="0" max="23" value="0" disabled/></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value="0" disabled /></div><h1>&nbsp; </h1>
            <div className='container'><input type="number" name="" id="" min="0" max="59"  value="0" disabled/></div>

        </div>
    </>
  )
}

export default Select