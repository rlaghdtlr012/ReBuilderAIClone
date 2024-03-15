import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import MainPage from '@/pages/Main';
const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
