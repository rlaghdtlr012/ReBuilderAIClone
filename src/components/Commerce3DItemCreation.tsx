import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, Box } from '@mui/material';

const Commerce3DItemCreation = () => {
  const { t: translate } = useTranslation();

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
        marginLeft: 'auto',
        backgroundColor: '#fff',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ padding: '2rem' }}>
          <Typography variant="h6" color="textPrimary">
            {translate('service.eCommerceMarketing')}
          </Typography>
          <Typography variant="h4" color="textPrimary">
            {translate('service.eCommerceMarketingTitle')}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            {translate('service.eCommerceMarketingContentFirstLine')}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            {translate('service.eCommerceMarketingContentSecondLine')}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="slider">
            <div className="slide-track">
              {/* 이미지를 여러 번 복사하여 연속적인 효과를 만듭니다. */}
              {[...Array(3)].map((_, index) => (
                <React.Fragment key={index}>
                  <div className="slide">
                    <img
                      src="/src/assets/img/flyingCarPerson.png"
                      alt="First 3D Item"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/src/assets/img/people.png"
                      alt="Second 3D Item"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/src/assets/img/pomadePerson.png"
                      alt="Third 3D Item"
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="/src/assets/img/pinkHairPerson.png"
                      alt="Fourth 3D Item"
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Commerce3DItemCreation;
