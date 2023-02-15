import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import NavBar from './components/navBar/NavBar';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='port' element={<PortfolioPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
