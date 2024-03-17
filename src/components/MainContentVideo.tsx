const MainContentVideo = () => {
  return (
    <div className="main-content-video">
      <video
        id="main-video"
        loop
        playsInline
        autoPlay
        src="/src/assets/videos/main_video.mp4"
        className="main-video"
      ></video>
      <div className="overlay">
        <span className="title">3D Digital Transformation</span>
      </div>
    </div>
  );
};

export default MainContentVideo;
