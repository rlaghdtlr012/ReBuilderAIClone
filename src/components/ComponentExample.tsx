import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Stack } from '@mui/material';
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
      <Stack
        display="flex"
        flexDirection="column"
        width="100%"
        whiteSpace="pre-wrap"
      >
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
      <Stack display="flex" flexDirection="column" margin="0 0 0 40px">
        <div className="bTuFkA">
          <video
            ref={videoRef}
            src={videoSrc}
            width="100%"
            height="auto"
            loop
            muted
            autoPlay
          />
          <IconButton
            onClick={handleVideoPlayPause}
            sx={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              backgroundColor: 'rgba(255,255,255,0.7)',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.9)',
              },
            }}
          >
            {isPlaying ? (
              <img src="/src/assets/img/pauseBtn.svg" alt="Pause" />
            ) : (
              <img src="/src/assets/img/playBtn.svg" alt="Play" />
            )}
          </IconButton>
        </div>
        {imageExplanation && (
          <span className="eoJALG">{translate(imageExplanation)}</span>
        )}
      </Stack>
    </Stack>
  );
};

export default CommentAndVideo;
