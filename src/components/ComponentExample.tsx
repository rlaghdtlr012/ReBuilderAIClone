import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box, Paper, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { i18nLanguageType } from 'public/translation/enums';
import { ComponentExampleProps, _iLanguageState } from '@/types';

const CommentAndVideo = ({
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={6}>
          {manufactureCaption && (
            <Typography variant="caption" display="block" gutterBottom>
              {translate(manufactureCaption)}
            </Typography>
          )}
          <Typography variant="h4" gutterBottom>
            {translate(manufactureTitle)}
          </Typography>
          <Typography gutterBottom>
            {translate(manufactureContentFirstLine)}
          </Typography>
          <Typography gutterBottom>
            {translate(manufactureContentSecondLine)}
          </Typography>
          {manufactureContentThirdLine && (
            <Typography gutterBottom>
              {translate(manufactureContentThirdLine)}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <Paper elevation={3}>
            <video
              ref={videoRef}
              src={videoSrc}
              width="100%"
              autoPlay
              loop
              muted
              style={{ display: 'block' }}
            />
          </Paper>
          <IconButton
            onClick={handleVideoPlayPause}
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
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
          {imageExplanation && (
            <Typography align="right" gutterBottom>
              {translate(imageExplanation)}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CommentAndVideo;
