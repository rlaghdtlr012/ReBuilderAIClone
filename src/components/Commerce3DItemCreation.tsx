import { useTranslation } from 'react-i18next';
import { Grid, Stack } from '@mui/material';

const Commerce3DItemCreation = () => {
  const { t: translate } = useTranslation();

  const images = [
    '/src/assets/img/flyingCarPerson.png',
    '/src/assets/img/people.png',
    '/src/assets/img/pomadePerson.png',
    '/src/assets/img/pinkHairPerson.png',
  ];

  return (
    <div id="sdk" className="jTYySx">
      <Grid className="qsxih2" item xs={12} md={6}>
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
        <Grid className="fShRfI" item xs={12} md={6}>
          <div className="slider">
            <div className="slide-track">
              {[...images, ...images].map((src, index) => (
                <div className="slide" key={index}>
                  <img src={src} alt={`Slide ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Commerce3DItemCreation;
