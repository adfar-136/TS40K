import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getHeaderWithProjectId } from '../../utils/config';
import MusicCard from '../Music/MusicCard';
import MusicPlayer from '../Music/MusicPlayer';
import { MusicProvider } from '../../Providers/MusicProvider';

export default function Home() {
    const [musicList,setMusicList] = useState([])
    const [isLoading,setIsloading] = useState(false);
    const config = getHeaderWithProjectId()
    const fetchMusic=async()=>{
     try {
         setIsloading(true);
         const musics = await axios.get(
            "https://academics.newtonschool.co/api/v1/music/song",{
                headers :{
                    projectId:"8nbih316dv01"
                }
            })
            setMusicList(musics.data.data)
            console.log(musicList)
     } catch (error) {
        console.log(error)
     } finally{
        setIsloading(false)
     }
    }
    useEffect(()=>{
        fetchMusic()
    },[])
  return isLoading ?(
    <div> Loading...</div>):(
        musicList && (
            <MusicProvider>
               <section className="musicList-container">
                {musicList.map((music,i)=>(
                    <MusicCard key={i} {...music}/>
                ))}
                <MusicPlayer/>
            </section>
            </MusicProvider>
            
        )
  )
}
