import React, { useEffect, useState } from 'react'

function Pomodoro() {
    const [workDuration,setWorkDuration] = useState(25);
    const [breakDuration,setBreakDuration] = useState(5);
    const [worksecond,setWorkSecond] = useState(1500);
    const [breakSecond,setBreakSecond] = useState(300);
    const [type,setType] = useState("Work");
    const [resetFlag,setResetFlag] = useState(true)
    const [flag,setFlag] =useState(false);
    useEffect(()=>{
       
        if(flag && type==="Work"){
            if(worksecond > 0){
                setTimeout(()=>setWorkSecond(worksecond-1),1000)
            }
            if(worksecond===0){
                alert('work duration is over')
                setType("Break");
                setWorkSecond(workDuration*60)
            }
            
        }
        if(flag && type==="Break"){
            if(breakSecond > 0){
                setTimeout(()=>setBreakSecond(breakSecond-1),1000)
            }
            if(breakSecond===0){
                alert('Break duration is over')
                setType("Work");
                setBreakSecond(breakDuration*60)
            }
            
        }
    },[type,flag,worksecond,breakDuration,breakSecond,workDuration])
    const convertor=(sec)=>{
       let m = parseInt(sec/60).toString()
       let s = parseInt(sec%60).toString();
       if(m.length === 1) m="0"+m
       if(s.length === 1) s="0"+s
       return m+":"+s
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setWorkSecond(workDuration*60)
        setBreakSecond(breakDuration*60)
        setType("Work")
    }
    const handleReset=()=>{
        setResetFlag(true);
        setFlag(false)
        setBreakDuration(5);
        setWorkDuration(25);
        setWorkSecond(1500);
        setBreakSecond(300)
    }
  return (
    <div>
        <div>
            <h1>{type==="Work"?convertor(worksecond):convertor(breakSecond)}</h1>
            <h1>{type==="Work"?"Work":"Break"}-Time</h1>
        </div>
        <div>
            <button onClick={()=>{setFlag(true);setResetFlag(false)}} disabled={flag}>Start</button>
            <button onClick={()=>{setFlag(false);setResetFlag(false)}} disabled={!flag}>Stop</button>
            <button onClick={handleReset} disabled={resetFlag}>Reset</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={workDuration}
                onChange={(e)=>setWorkDuration(e.target.value)} disabled={flag}/>
                <input type="number" value={breakDuration} 
                onChange={(e)=>setBreakDuration(e.target.value)} disabled={flag}/>
                <input type="submit" value="set" disabled={flag}/>
            </form>
        </div>
    </div>
  )
}

export default Pomodoro