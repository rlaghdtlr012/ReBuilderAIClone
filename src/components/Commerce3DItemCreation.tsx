import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Stack, useMediaQuery } from '@mui/material';
import flyingCarPerson from '@/assets/img/flyingCarPerson.png';
import people from '@/assets/img/people.png';
import pomadePerson from '@/assets/img/pomadePerson.png';
import pinkHairPerson from '@/assets/img/pinkHairPerson.png';

const Commerce3DItemCreation = () => {
  const { t: translate } = useTranslation();
  const [isNarrowWidth, setIsNarrowWidth] = useState(window.innerWidth <= 768);
  const matches = useMediaQuery('(max-width: 768px)');

  const images = [flyingCarPerson, people, pomadePerson, pinkHairPerson];

  useEffect(() => {
    setIsNarrowWidth(matches);
  }, [matches]);

  return (
    <div id="sdk" className="jKGyTm">
      <Grid
        className="eyPTAv"
        style={{ paddingTop: '9%', paddingBottom: '12%' }}
      >
        <Stack display="flex" flexDirection="column" whiteSpace="pre-wrap">
          <Stack maxWidth="280px">
            <span className="hOJyEv">
              {translate('service.eCommerceMarketing')}
            </span>
            <span className="jsGokG">
              {translate('service.eCommerceMarketingTitle')}
            </span>
            <span className="htnOkJ">
              {translate('service.eCommerceMarketingContentFirstLine')}
            </span>
          </Stack>
          <span className="htnOkJ">
            {translate('service.eCommerceMarketingContentSecondLine')}
          </span>
        </Stack>
        {!isNarrowWidth ? (
          <Grid className="fShRfI">
            <div className="slider">
              <div className="slide-track">
                {[...images, ...images].map((src, index) => (
                  <div className="slide" key={index}>
                    <img src={src} height="auto" alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        ) : (
          <Stack className="bFIKxl">
            {images.map((src, index) => (
              <div style={{ position: 'relative' }} key={index}>
                <img src={src} width="100%" height="auto" />
              </div>
            ))}
          </Stack>
        )}
      </Grid>
    </div>
  );
};

export default Commerce3DItemCreation;
