import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Container, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VRIN = () => {
  const { t: translate } = useTranslation();

  return (
    <div className="hero-section" style={{}}>
      <Container className="hero-content">
        // TODO 여기부터 해야함
        <Stack className="hero-text">
          <h1>{translate('service.aiMake3DTitle')}</h1>
          <p>{translate('service.aiMake3DSubTitle')}</p>
          <p>{translate('service.aiMake3DContentFirstLine')}</p>
          <p>{translate('service.aiMake3DContentSecondLine')}</p>
          <p>{translate('service.aiMake3DContentThirdLine')}</p>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            href="https://vrin.co.kr"
            target="_blank"
          >
            {translate('service.exploreMore')}
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default VRIN;
