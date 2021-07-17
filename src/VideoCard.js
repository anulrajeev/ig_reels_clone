import React, { useRef, useState } from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
export default function VideoCard({ url, likes, shares, song, channel, avatarSrc}) {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const onVideoPress=()=>{
        if(isVideoPlaying)
        {
             videoRef.current.pause();
             setIsVideoPlaying(false);
        }
        else
        {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }

    }
    return (
        <div className="videoCard">
            <VideoHeader/>
            <video  ref={videoRef}  className="videoCard__player" onClick={onVideoPress}
             src={url}
             alt='IG Reels' loop/>
            <VideoFooter
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares}
            />
        </div>
    )
}



