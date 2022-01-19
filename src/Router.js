import { BrowserRouter, Route, Routes } from 'react-router-dom';  

// 공통 컴포넌트 
// import Header from './components/Header';
// import Footer from './components/Footer';

// 컴포넌트 임포트 필수!
import Main from "./pages/Main";

import SkinTypeTest from "./pages/SkinTypeTest";

import DrJartBestSellers from './pages/DrJartBestSellers';
import InnisfreeBestSellers from './pages/InnisfreeBestSellers';
import SeedmoolBestSellers from './pages/SeedmoolBestSellers';
import BeplainBestSellers from './pages/BeplainBestSellers';


const Router = () => (
  <BrowserRouter>
  {/* <BrowserRouter basename="/for-your-skin-type-project" > */}
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dr-jart-bestsellers" element={<DrJartBestSellers />} />
      <Route path="/innisfree-bestsellers" element={<InnisfreeBestSellers />} />
      <Route path="/seedmool-bestsellers" element={<SeedmoolBestSellers />} />
      <Route path="/beplain-bestsellers" element={<BeplainBestSellers />} />
      <Route path="/skin-type-test" element={<SkinTypeTest />} />
    </Routes>
  </BrowserRouter>
);


export default Router;