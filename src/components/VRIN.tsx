import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VRIN = () => {
  const { t: translate } = useTranslation();
  const [backgroundPositionY, setBackgroundPositionY] = useState('-230%');

  useEffect(() => {
    const handleScroll = () => {
      // 전체 문서 높이에서 윈도우 높이를 빼서 실제 스크롤 가능한 높이를 구함
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // 현재 스크롤 위치가 스크롤 가능한 높이의 몇 퍼센트 지점인지 계산
      const currentPositionPercent = (window.scrollY / scrollableHeight) * 100;
      // 배경 이미지의 위치를 설정 (스크롤에 반비례하여 움직이도록 -currentPositionPercent를 사용)
      setBackgroundPositionY(`${currentPositionPercent - 230}%`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="hero-section"
      style={{ backgroundPosition: `center ${backgroundPositionY}` }}
    >
      <div className="hero-content">
        <div className="hero-text">
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
        </div>
      </div>
    </div>
  );
};

export default VRIN;
