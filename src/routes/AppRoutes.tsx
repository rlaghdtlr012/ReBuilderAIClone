import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
};
export default AppRoutes;
