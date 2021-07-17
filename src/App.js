

import React, { useEffect, useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './Firebase'; 
function App() {
  const [reels, setReels] = useState([])
  useEffect(()=>{
      db.collection('reels').orderBy('num').onSnapshot(snapshot=>
    
        setReels(snapshot.docs.map(
          doc=> doc.data()
        )));
      
  },[])
  return (
    <div className="app">
   

    <div className="app__top">
        <img alt='insta logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="app__logo"/>
         <h1> Reels </h1>
    </div>
          
    <div className="app__videos">
 {   
   reels.map( ({channel, avatarSrc, url, likes, shares, song})=> 
                <VideoCard channel={channel} avatarSrc={avatarSrc} likes={likes} shares={shares} song={song} url={url}            
                />)
}

  
   
    </div>
   
   <div className="app__footer">
   <a href="https://www.facebook.com/anul.rajeev"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a>
                    Developed by Anul Rajeev    
        <a href="https://www.linkedin.com/in/anulrajeev/"><img src="https://img.icons8.com/color/48/000000/linkedin.png"/></a>
        </div>
    </div>
  );
}

export default App;
