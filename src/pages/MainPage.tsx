import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import MainContentVideo from '@/components/MainContentVideo';
import OptimizationSection from '@/components/OptimizationSection';
import VRIN from '@/components/VRIN';
import Commerce3DItemCreation from '@/components/Commerce3DItemCreation';
import CommentAndVideo from '@/components/ComponentExample';
import explore_video_en from '@/assets/videos/explore_video_en.mp4';
import explore_video_ko from '@/assets/videos/explore_video_ko.mp4';
import explore_video2 from '@/assets/videos/explore_video2.mp4';
import explore_video3 from '@/assets/videos/explore_video3.mp4';

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
            videoSrcEn={explore_video_en}
            videoSrcKo={explore_video_ko}
          />
          <CommentAndVideo
            style={{ paddingTop: '200px' }}
            manufactureTitle="service.damageTitle"
            manufactureContentFirstLine="service.damageContentFirstLine"
            manufactureContentSecondLine="service.damageContentSecondLine"
            manufactureContentThirdLine="service.damageContentThirdLine"
            videoSrcEn={explore_video2}
            videoSrcKo={explore_video2}
          />
          <CommentAndVideo
            style={{ paddingTop: '200px' }}
            manufactureTitle="service.labelingTitle"
            manufactureContentFirstLine="service.labelingContentFirstLine"
            manufactureContentSecondLine="service.labelingContentSecondLine"
            manufactureContentThirdLine="service.labelingContentThirdLine"
            imageExplanation="service.imageExplanation"
            videoSrcEn={explore_video3}
            videoSrcKo={explore_video3}
          />
        </Stack>
      </div>
    </>
  );
};

export default MainPage;
