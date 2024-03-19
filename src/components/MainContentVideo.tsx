import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const MainContentVideo = ({ scrollPosition }) => {
  // Navbar 스타일 변경을 위한 상태
  const [className, setClassName] = useState('init');

  useEffect(() => {
    if (scrollPosition > 5) {
      setClassName('middle');
    } else {
      setClassName('init');
    }
  }, [scrollPosition]);

  return (
    <div id="main" className={className}>
      <Navbar scrollPosition={scrollPosition} />
      <div className={`main-content-video`}>
        <video
          id="main-video"
          loop
          playsInline
          autoPlay
          muted
          src="/src/assets/videos/main_video.mp4"
          className="main-video"
        ></video>
        <div className="overlay">
          <span className="title">3D Digital Transformation</span>
        </div>
      </div>
    </div>
  );
};

export default MainContentVideo;
