import React from 'react';
import '../styles/VideoSection.css'
function VideoSection() {
  return <div className='videoSection'>
    <div className='vid_inner d-flex'>
        <div className='text_sec d-flex'>
            <h3>Get the Job Done</h3>
            <p>Effective communication is the key to making things happen.</p>
        </div>
        <div className='vid'>
            <img src="https://static.grammarly.com/assets/files/cbb5e43c00df8f49d5c6ce1e8cb618c7/video.png"/>
        </div>
    </div>
  </div>;
}

export default VideoSection;
