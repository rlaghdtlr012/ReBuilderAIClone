import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container, Stack, Typography, Box, Grid } from '@mui/material';
import { i18nLanguageType } from 'public/translation/enums';

const OptimizationSection = () => {
  const { t: translate } = useTranslation();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage,
  );
  return (
    <Container maxWidth="lg" id="management">
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            display: 'grid',
            fontSize: '2rem',
            top: '0px',
            height: 'fit-content',
            position: 'sticky',
            marginBottom: '40px',
            padding: '120px 0px 190px',
          }}
        >
          <Typography variant="h5" component="span">
            {translate('service.3DModel')}
          </Typography>
          <Typography variant="h4" component="span" sx={{ fontWeight: 600 }}>
            {translate('service.optimization')}
          </Typography>
          <Typography
            variant="body1"
            component="span"
            sx={{ color: 'rgb(189, 193, 199)', fontWeight: 500 }}
          >
            {translate('service.usage')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid sx={{ paddingTop: '120px' }}>
            <Typography variant="body1" sx={{ mb: '40px' }}>
              {translate('service.optimizationContentFirst')}
              <br />
              {translate('service.optimizationContentSecond')}
            </Typography>
            <Box
              component="img"
              sx={{ width: '100%', maxWidth: '1134px' }}
              src="/src/assets/img/shoes.png"
              alt="Optimized 3D model"
            />
          </Grid>
          <Grid>
            <Typography variant="body1">
              {translate('service.usageContentFirst')}
              <br />
              {translate('service.usageContentSecond')}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Box>
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  playsInline
                  src={
                    selectedLanguage === i18nLanguageType.EN
                      ? '/src/assets/videos/service_video_pc_en.mp4'
                      : '/src/assets/videos/service_video_pc_ko.mp4'
                  }
                  style={{ maxWidth: '556px' }}
                ></video>
              </Box>
              <Box>
                <video
                  width="100%"
                  height="auto"
                  autoPlay
                  loop
                  playsInline
                  src={
                    selectedLanguage === i18nLanguageType.EN
                      ? '/src/assets/videos/service_video2_pc_en.mp4'
                      : '/src/assets/videos/service_video2_pc_ko.mp4'
                  }
                  style={{ maxWidth: '556px' }}
                ></video>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OptimizationSection;
