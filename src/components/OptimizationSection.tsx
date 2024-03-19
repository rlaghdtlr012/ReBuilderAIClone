import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container, Stack, Box, useMediaQuery } from '@mui/material';
import { i18nLanguageType } from 'public/translation/enums';
import { _iLanguageState } from '@/types';
import plusIcon from '@/assets/img/plusIcon.svg';
import shoes from '@/assets/img/shoes.png';
import chair_en1 from '@/assets/img/chair_en(1).png';
import chair_en2 from '@/assets/img/chair_en(2).png';
import chair_ko1 from '@/assets/img/chair_ko(1).png';
import chair_ko2 from '@/assets/img/chair_ko(2).png';
import service_video_pc_en from '@/assets/videos/service_video_pc_en.mp4';
import service_video_pc_ko from '@/assets/videos/service_video_pc_ko.mp4';
import service_video2_pc_en from '@/assets/videos/service_video2_pc_en.mp4';
import service_video2_pc_ko from '@/assets/videos/service_video2_pc_ko.mp4';

const OptimizationSection = ({ scrollPosition }) => {
  const { t: translate } = useTranslation();
  const matches = useMediaQuery('(max-width: 600px)');
  const selectedLanguage = useSelector(
    (state: _iLanguageState) => state.language.selectedLanguage,
  );
  const [isHovered, setIsHovered] = useState({ video1: false, video2: false });

  // 마우스 오버 시 이미지를 보여주고 비디오 재생을 멈추는 함수
  const handleMouseOver = (videoId) => {
    setIsHovered({ ...isHovered, [videoId]: true });
  };

  // 마우스 아웃 시 이미지를 숨기고 비디오 재생을 시작하는 함수
  const handleMouseLeave = (videoId) => {
    setIsHovered({ ...isHovered, [videoId]: false });
  };

  const getSidebarClass = (order) => {
    if (
      (order === 1 && scrollPosition < 36) ||
      (order === 2 && scrollPosition >= 36)
    ) {
      return 'sidebar-text sidebar-focus-text';
    }
    return 'sidebar-text';
  };

  return (
    <Container id="management">
      <Stack className="hfBVvs">
        {!matches ? (
          <>
            <Stack
              position="sticky"
              width="200px"
              top="0px"
              height="fit-content"
              padding="120px 0px 190px"
              marginRight="40px"
            >
              <span className="sidebar-title-text">
                {translate('service.3DModel')}
              </span>
              <span className={getSidebarClass(1)}>
                {translate('service.optimization')}
              </span>
              <span className={getSidebarClass(2)}>
                {translate('service.usage')}
              </span>
            </Stack>
            <Stack>
              <Stack sx={{ paddingTop: '120px' }}>
                <span className="dsaEAp">
                  {translate('service.optimizationContentFirst')}
                  <br />
                  {translate('service.optimizationContentSecond')}
                </span>
                <Box
                  component="img"
                  sx={{ width: '100%', maxWidth: '1134px' }}
                  src={shoes}
                  alt="Optimized 3D model"
                />
              </Stack>
              <Stack sx={{ padding: '230px 0px 200px' }}>
                <span className="dsaEAp">
                  {translate('service.usageContentFirst')}
                  <br />
                  {translate('service.usageContentSecond')}
                </span>
                <Stack direction="row" spacing={2}>
                  <Box
                    onMouseOver={() => handleMouseOver('video1')}
                    onMouseLeave={() => handleMouseLeave('video1')}
                    sx={{ position: 'relative' }}
                  >
                    <video
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={
                        selectedLanguage === i18nLanguageType.EN
                          ? service_video_pc_en
                          : service_video_pc_ko
                      }
                      style={{ maxWidth: '556px' }}
                    ></video>
                    <Box
                      component="img"
                      sx={{
                        position: 'absolute',
                        right: '20px',
                        bottom: '20px',
                        zIndex: 10,
                      }}
                      src={plusIcon}
                    />
                    {isHovered.video1 && (
                      <Box
                        component="img"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: isHovered.video1 ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          pointerEvents: 'none',
                          cursor: 'pointer',
                        }}
                        src={
                          selectedLanguage === i18nLanguageType.EN
                            ? chair_en1
                            : chair_ko1
                        }
                        alt="Video overlay"
                      />
                    )}
                  </Box>
                  <Box
                    onMouseOver={() => handleMouseOver('video2')}
                    onMouseLeave={() => handleMouseLeave('video2')}
                    sx={{ position: 'relative' }}
                  >
                    <video
                      width="100%"
                      height="auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src={
                        selectedLanguage === i18nLanguageType.EN
                          ? service_video2_pc_en
                          : service_video2_pc_en
                      }
                      style={{ maxWidth: '556px' }}
                    ></video>
                    <Box
                      component="img"
                      sx={{
                        position: 'absolute',
                        right: '20px',
                        bottom: '20px',
                        zIndex: 10,
                      }}
                      src={plusIcon}
                    />
                    {isHovered.video2 && (
                      <Box
                        component="img"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: isHovered.video2 ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          pointerEvents: 'none',
                          cursor: 'pointer',
                        }}
                        src={
                          selectedLanguage === i18nLanguageType.EN
                            ? chair_en2
                            : chair_ko2
                        }
                        alt="Video overlay"
                      />
                    )}
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </>
        ) : (
          <>
            <Stack>
              <Stack>
                <span className="fgOhUY">
                  {translate('service.3DModel')}{' '}
                  {translate('service.optimization')}
                </span>
              </Stack>
              <Stack>
                <span className="dsaEAp">
                  {translate('service.optimizationNarrowContentFirst')}
                  <br />
                  {translate('service.optimizationNarrowContentSecond')}
                </span>
                <Box
                  component="img"
                  sx={{ width: '100%', maxWidth: '1134px' }}
                  src={shoes}
                  alt="Optimized 3D model"
                />
              </Stack>
            </Stack>
            <Stack className="cWTZru">
              <Stack>
                <span className="fgOhUY">
                  {translate('service.3DModel')} {translate('service.usage')}
                </span>
              </Stack>
              <Stack className="cPEnIn" marginBottom="20px">
                <span className="dsaEAp">
                  {translate('service.optimizationNarrowContentThird')}
                  <br />
                  {translate('service.optimizationNarrowContentFourth')}
                </span>
                <Box
                  onMouseOver={() => handleMouseOver('video1')}
                  onMouseLeave={() => handleMouseLeave('video1')}
                  sx={{ position: 'relative' }}
                >
                  <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={
                      selectedLanguage === i18nLanguageType.EN
                        ? service_video_pc_en
                        : service_video_pc_ko
                    }
                    style={{ maxWidth: '556px' }}
                  ></video>
                  <Box
                    component="img"
                    sx={{
                      position: 'absolute',
                      right: '20px',
                      bottom: '20px',
                      zIndex: 10,
                    }}
                    src={plusIcon}
                  />
                  {isHovered.video1 && (
                    <Box
                      component="img"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isHovered.video1 ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        pointerEvents: 'none',
                        cursor: 'pointer',
                      }}
                      src={
                        selectedLanguage === i18nLanguageType.EN
                          ? chair_en1
                          : chair_ko1
                      }
                      alt="Video overlay"
                    />
                  )}
                </Box>
              </Stack>
            </Stack>
            <Stack className="cWTZru">
              <Stack className="cPEnIn" marginBottom="20px">
                <span className="dsaEAp">
                  {translate('service.optimizationNarrowContentFifth')}
                  <br />
                  {translate('service.optimizationNarrowContentSixth')}
                </span>
                <Box
                  onMouseOver={() => handleMouseOver('video2')}
                  onMouseLeave={() => handleMouseLeave('video2')}
                  sx={{ position: 'relative' }}
                >
                  <video
                    width="100%"
                    height="auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={
                      selectedLanguage === i18nLanguageType.EN
                        ? service_video2_pc_en
                        : service_video2_pc_ko
                    }
                    style={{ maxWidth: '556px' }}
                  ></video>
                  <Box
                    component="img"
                    sx={{
                      position: 'absolute',
                      right: '20px',
                      bottom: '20px',
                      zIndex: 10,
                    }}
                    src={plusIcon}
                  />
                  {isHovered.video2 && (
                    <Box
                      component="img"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isHovered.video2 ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        pointerEvents: 'none',
                        cursor: 'pointer',
                      }}
                      src={
                        selectedLanguage === i18nLanguageType.EN
                          ? chair_en2
                          : chair_ko2
                      }
                      alt="Video overlay"
                    />
                  )}
                </Box>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
    </Container>
  );
};

export default OptimizationSection;
