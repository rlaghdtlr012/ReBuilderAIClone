import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const MainContentVideo = ({ scrollPosition }) => {
  // Navbar 스타일 변경을 위한 상태
  const [className, setClassName] = useState<string>('init');
  const [videoClassName, setVideoClassName] = useState<string>('video-init');
  const [matrix, setMatrix] = useState(1);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    if (scrollPosition > 7) {
      setMatrix(12.5);
      setBlur(0.5);
      setClassName('end');
      setVideoClassName('video-end');
    } else if (scrollPosition === 0) {
      setMatrix(1);
      setBlur(0);
      setClassName('init');
      setVideoClassName('video-init');
    } else if (scrollPosition > 5.64) {
      setMatrix(20);
      setBlur(0.5);
    } else {
      setMatrix(scrollPosition * 1.75);
      setBlur(scrollPosition * 1.75);
    }
  }, [scrollPosition]);

  return (
    <div id="main" className={`${className} bwBPni`}>
      <Navbar scrollPosition={scrollPosition} />
      <div className={`${videoClassName} grphoj`}>
        <video
          id="main-video"
          loop
          playsInline
          autoPlay
          muted
          src="/src/assets/videos/main_video.mp4"
          style={{
            transform: `matrix(${matrix}, 0, 0, ${matrix}, 0, 0)`,
            filter: `blur(${blur}rem)`,
          }}
        ></video>
        {videoClassName === 'video-end' ? (
          <div
            className="sc-dhKdcB"
            style={{ opacity: `${Math.min(scrollPosition / 2, 1)}` }}
          >
            <div className="dLAJqj">
              <span className="kCTpGr">3D Digital Transformation</span>
              <span className="iTAcYI">
                The Next Generation of <br /> Digital Transformation
              </span>
            </div>
          </div>
        ) : (
          <div
            className="haNhZk"
            style={{ opacity: `${Math.max(1 - scrollPosition / 5, 0)}` }}
          >
            <span className="tXYRK">3D Digital Transformation</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContentVideo;
