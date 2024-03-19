import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import MainContentVideo from '@/components/MainContentVideo';
import OptimizationSection from '@/components/OptimizationSection';
import VRIN from '@/components/VRIN';
import Commerce3DItemCreation from '@/components/Commerce3DItemCreation';
import CommentAndVideo from '@/components/ComponentExample';

const MainPage = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
      const currentScrollPosition = window.scrollY;

      const scrollPositionPercent =
        (currentScrollPosition / totalScrollHeight) * 100;
      setScrollPercent(scrollPositionPercent);
    };

    window.addEventListener('scroll', handleScroll);

    // 이펙트 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <MainContentVideo scrollPosition={scrollPercent} />
      <div className="dXuRMr">
        <OptimizationSection scrollPosition={scrollPercent} />
      </div>
      <div className="jZmGzH">
        <VRIN scrollPosition={scrollPercent} />
        <Commerce3DItemCreation />
        <Stack className="lcMONS">
          <CommentAndVideo
            manufactureCaption="service.manufacture"
            manufactureTitle="service.manufactureTitle"
            manufactureContentFirstLine="service.manufactureContentFirstLine"
            manufactureContentSecondLine="service.manufactureContentSecondLine"
            videoSrcEn="/src/assets/videos/explore_video_en.mp4"
            videoSrcKo="/src/assets/videos/explore_video_ko.mp4"
          />
          <CommentAndVideo
            style={{ paddingTop: '200px' }}
            manufactureTitle="service.damageTitle"
            manufactureContentFirstLine="service.damageContentFirstLine"
            manufactureContentSecondLine="service.damageContentSecondLine"
            manufactureContentThirdLine="service.damageContentThirdLine"
            videoSrcEn="/src/assets/videos/explore_video2.mp4"
            videoSrcKo="/src/assets/videos/explore_video2.mp4"
          />
          <CommentAndVideo
            style={{ paddingTop: '200px' }}
            manufactureTitle="service.labelingTitle"
            manufactureContentFirstLine="service.labelingContentFirstLine"
            manufactureContentSecondLine="service.labelingContentSecondLine"
            manufactureContentThirdLine="service.labelingContentThirdLine"
            imageExplanation="service.imageExplanation"
            videoSrcEn="/src/assets/videos/explore_video3.mp4"
            videoSrcKo="/src/assets/videos/explore_video3.mp4"
          />
        </Stack>
      </div>
    </>
  );
};

export default MainPage;
