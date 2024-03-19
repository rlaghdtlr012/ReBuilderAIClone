import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VRIN = ({ scrollPosition }) => {
  const { t: translate } = useTranslation();

  return (
    <div className="vrin">
      <Container className="vrin-content">
        <Stack className="vrin-text">
          <Stack display="flex" flexDirection="row" gap="20px">
            <Box
              component="img"
              sx={{
                width: '90px',
                height: '90px',
                fill: 'none',
              }}
              src="/src/assets/img/VRINLogo.svg"
            />
            <Stack>
              <span className="kxJuDs">
                {translate('service.aiMake3DTitle')}
              </span>
              <span className="kkXACW">
                {translate('service.aiMake3DSubTitle')}
              </span>
            </Stack>
          </Stack>
          <span className="iODoTS">
            <div>{translate('service.aiMake3DContentFirstLine')}</div>
            <div>{translate('service.aiMake3DContentSecondLine')}</div>
            <div>{translate('service.aiMake3DContentThirdLine')}</div>
          </span>
          <Button
            className="kIWrRP"
            endIcon={<ArrowForwardIosIcon />}
            href="https://vrin.co.kr"
            target="_blank"
          >
            {translate('service.exploreMore')}
          </Button>
        </Stack>
      </Container>
      <div
        className="vrinBg"
        style={{ backgroundPosition: `0% ${scrollPosition - 20}%` }}
      ></div>
    </div>
  );
};

export default VRIN;
