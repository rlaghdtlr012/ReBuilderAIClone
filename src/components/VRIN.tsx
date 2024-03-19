import { useTranslation } from 'react-i18next';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VRINLogo from '@/assets/img/VRINLogo.svg';

const VRIN = ({ scrollPosition }) => {
  const { t: translate } = useTranslation();
  const matches = useMediaQuery('(max-width: 600px)');

  /**
   * 브라우저 너비(max-width: 600px)를 기준으로 다르게 렌더링
   */
  return matches ? (
    <a href="https://vrin.co.kr" target="_blank">
      <div className="hglerF">
        <Stack className="dZCKOG">
          <Stack
            className="ctbuo"
            display="flex"
            flexDirection="row"
            gap="20px"
          >
            <Stack>
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
            href="https://vrin.co.kr"
            endIcon={<ArrowForwardIosIcon />}
            target="_blank"
          >
            <span className="jdawOk">{translate('service.exploreMore')}</span>
          </Button>
        </Stack>
        <div
          className="vrinBg"
          style={{ backgroundPosition: `0% ${scrollPosition * 5 - 230}%` }}
        ></div>
      </div>
    </a>
  ) : (
    <div className="hglerF">
      <Stack className="jfHAHA css-1qsxih2">
        <Stack className="dZCKOG">
          <Stack
            className="ctbuo"
            display="flex"
            flexDirection="row"
            gap="20px"
          >
            <Box component="img" className="" src={VRINLogo} />
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
            href="https://vrin.co.kr"
            endIcon={<ArrowForwardIosIcon />}
            target="_blank"
          >
            <span className="jdawOk">{translate('service.exploreMore')}</span>
          </Button>
        </Stack>
      </Stack>
      <div
        className="vrinBg"
        style={{ backgroundPosition: `0% ${scrollPosition * 5 - 230}%` }}
      ></div>
    </div>
  );
};

export default VRIN;
