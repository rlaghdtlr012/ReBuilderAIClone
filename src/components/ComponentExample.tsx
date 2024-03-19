import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { i18nLanguageType } from 'public/translation/enums';
import { ComponentExampleProps, _iLanguageState } from '@/types';

const CommentAndVideo = ({
  style,
  manufactureCaption,
  manufactureTitle,
  manufactureContentFirstLine,
  manufactureContentSecondLine,
  manufactureContentThirdLine,
  videoSrcEn,
  videoSrcKo,
  imageExplanation,
}: ComponentExampleProps) => {
  const { t: translate } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const selectedLanguage = useSelector(
    (state: _iLanguageState) => state.language.selectedLanguage,
  );

  const handleVideoPlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const videoSrc =
    selectedLanguage === i18nLanguageType.EN ? videoSrcEn : videoSrcKo;

  return (
    <Stack className="css-1mvb0xs" style={style}>
      <Stack className="eyPTAv">
        {manufactureCaption && (
          <span className="hOJyEv">{translate(manufactureCaption)}</span>
        )}
        <span className="jsGokG">{translate(manufactureTitle)}</span>
        <span className="htnOkJ">
          {translate(manufactureContentFirstLine)}
          <br />
          {translate(manufactureContentSecondLine)}
        </span>
        {manufactureContentThirdLine && (
          <span className="htnOkJ">
            {translate(manufactureContentThirdLine)}
          </span>
        )}
      </Stack>
      <Stack>
        <Stack className="bTuFkA">
          <video
            ref={videoRef}
            src={videoSrc}
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
          />
          <div className="fnOrPq" onClick={handleVideoPlayPause}>
            {isPlaying ? (
              <img src="/src/assets/img/pauseBtn.svg" alt="Pause" />
            ) : (
              <img src="/src/assets/img/playBtn.svg" alt="Play" />
            )}
          </div>
        </Stack>
        {imageExplanation && (
          <span className="eoJALG">{translate(imageExplanation)}</span>
        )}
      </Stack>
    </Stack>
  );
};

export default CommentAndVideo;
