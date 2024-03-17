import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box, Paper, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { i18nLanguageType } from 'public/translation/enums';

const ComponentExample = () => {
  const { t: translate } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage,
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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="caption" display="block" gutterBottom>
            {translate('service.manufacture')}
          </Typography>
          <Typography variant="h4" gutterBottom>
            {translate('service.manufactureTitle')}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {translate('service.manufactureContentFirstLine')}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {translate('service.manufactureContentSecondLine')}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <Paper elevation={3}>
            <video
              ref={videoRef}
              src={
                selectedLanguage === i18nLanguageType.EN
                  ? '/src/assets/videos/explore_video_en.mp4'
                  : '/src/assets/videos/explore_video_ko.mp4'
              }
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComponentExample;
