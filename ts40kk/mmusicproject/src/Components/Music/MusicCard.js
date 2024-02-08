import React from 'react'
import mystyle from "./musiccard.module.css"
import { useMusic } from '../../Providers/MusicProvider'
export default function MusicCard(props) {
    const {title,thumbnail,artist} = props
    const {setSelectedMusic,setCondition} =useMusic()
  return (
    <section className={mystyle.musicCard} 
    onClick={()=>{
        setCondition(true);
        setSelectedMusic(props)
    }}>
        <img src={thumbnail} alt={title} className={mystyle.bannerImg} />
        <div>{title}</div>
        <div className={mystyle.artist}>{artist[0].name}</div>

    </section>
  )
}
