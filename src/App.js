import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage';
import AboutPage from './pages/aboutPage/AboutPage';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';
import { LoginPage } from './pages/loginpage/LoginPage';
import Layout from './components/hoc/Layout';
import NewPage from './pages/newPage/NewPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path='about' element={<AboutPage/>}/>
          <Route path='port' element={<PortfolioPage/>}/>
          <Route path='new' element={<NewPage/>}/>
        </Route>
        <Route path='login' element={<LoginPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
