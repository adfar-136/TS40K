import React, { useEffect, useRef, useState } from 'react'
import { useMusic } from '../../Providers/MusicProvider'
import {ReactComponent as PauseIcon} from "../../assets/pause.svg"
import {ReactComponent as PlayIcon} from "../../assets/play.svg"

export default function MusicPlayer() {
    const {selectedMusic,condition}=useMusic();
    const audioRef = useRef()

    const [isPlaying,setIsplaying] = useState(false);
    const [start,setStart] = useState("0")
    const [end,setEnd] = useState("0")
    const {thumbnail,title,artist,audio_url,_id} = selectedMusic;
    const getTime = (duration) =>{
        const endTime = Math.ceil(duration);
        let min = Math.floor(endTime/60)
        let sec  = Math.floor(endTime%60)
        sec = sec<10?`0${sec}`:`${sec}`;
        return `${min}:${sec}`
    }
    useEffect(()=>{
        if(audioRef.current){
            const endTime = getTime(audioRef.current.duration)
            setEnd(endTime)
            const handleTimeUpdate=()=>{
                const currentTime = getTime(audioRef.current.currentTime)
                setStart(currentTime)
            }
            audioRef.current.addEventListener("timeupdate",handleTimeUpdate)
            if(isPlaying){
                audioRef.current.play()
            } else{
                audioRef.current.pause()
            }
        }
    },[isPlaying])
    const handleVolumeChange =(e)=>{
        audioRef.current.volume = e.target.value/100
    }
  return (
   <>
    {condition && <section className='music-player'>
     <img src={thumbnail} alt={title} width='50' height="50" />
     <>
       <div className='song-info'>
        <div>{title}</div>
        <div className='artist-List'>
            {artist[0].name}
        </div>
       </div>
       <button onClick={()=>setIsplaying(!isPlaying)} className='play-pause'>
            {isPlaying ? <PauseIcon/> :<PlayIcon/>}
        </button>
        <div>{start}</div>
        <div>{end}</div>
        <input type="range" value={audioRef.current? audioRef.current.volume*100:0} 
        onChange={handleVolumeChange}
        max={100}
        />
        <audio src={audio_url} ref={audioRef}/>
    </>
    </section>}
    
   </>
    
  )
}
