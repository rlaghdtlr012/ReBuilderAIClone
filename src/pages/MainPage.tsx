import { Container } from '@mui/material';
import MainContentVideo from '@/components/MainContentVideo';
import Navbar from '@/components/Navbar';
import OptimizationSection from '@/components/OptimizationSection';
import ScrollingBackground from '@/components/VRIN';
import Commerce3DItemCreation from '@/components/Commerce3DItemCreation';
import ComponentExample from '@/components/ComponentExample';

const MainPage = () => {
  return (
    <>
      <Navbar />
      <MainContentVideo />
      <Container>
        <OptimizationSection />
        <ScrollingBackground />
        <Commerce3DItemCreation />
        <ComponentExample />
        <ComponentExample />
        <ComponentExample />
      </Container>
    </>
  );
};

export default MainPage;
