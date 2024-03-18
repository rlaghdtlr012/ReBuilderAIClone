import { Container } from '@mui/material';
import MainContentVideo from '@/components/MainContentVideo';
import OptimizationSection from '@/components/OptimizationSection';
import VRIN from '@/components/VRIN';
import Commerce3DItemCreation from '@/components/Commerce3DItemCreation';
import CommentAndVideo from '@/components/ComponentExample';

const MainPage = () => {
  return (
    <>
      <MainContentVideo />
      <Container>
        <OptimizationSection />
        <div className="bottom-container">
          <VRIN />
          <Commerce3DItemCreation />
          <CommentAndVideo
            manufactureCaption="service.manufacture"
            manufactureTitle="service.manufactureTitle"
            manufactureContentFirstLine="service.manufactureContentFirstLine"
            manufactureContentSecondLine="service.manufactureContentSecondLine"
            videoSrcEn="/src/assets/videos/explore_video_en.mp4"
            videoSrcKo="/src/assets/videos/explore_video_ko.mp4"
          />
          <CommentAndVideo
            manufactureTitle="service.damageTitle"
            manufactureContentFirstLine="service.damageContentFirstLine"
            manufactureContentSecondLine="service.damageContentSecondLine"
            manufactureContentThirdLine="service.damageContentThirdLine"
            videoSrcEn="/src/assets/videos/explore_video2.mp4"
            videoSrcKo="/src/assets/videos/explore_video2.mp4"
          />
          <CommentAndVideo
            manufactureTitle="service.labelingTitle"
            manufactureContentFirstLine="service.labelingContentFirstLine"
            manufactureContentSecondLine="service.labelingContentSecondLine"
            manufactureContentThirdLine="service.labelingContentThirdLine"
            imageExplanation="service.imageExplanation"
            videoSrcEn="/src/assets/videos/explore_video3.mp4"
            videoSrcKo="/src/assets/videos/explore_video3.mp4"
          />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
