import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const MainContentVideo = () => {
  // Navbar 스타일 변경을 위한 상태
  const [className, setClassName] = useState('init');

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 250) {
        setClassName('middle');
      } else {
        setClassName('init');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="main" className={className}>
      <Navbar />
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
