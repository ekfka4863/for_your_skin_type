import { BrowserRouter, Route, Routes } from 'react-router-dom';  

// 공통 컴포넌트 
// import Header from './components/Header';
// import Footer from './components/Footer';

// 컴포넌트 임포트 필수!
import Main from "./pages/Main";

import SkinTypeTest from "./pages/SkinTypeTest";

import DrJartBestSellers from './pages/DrJartBestSellers';
import InnisfreeBestSellers from './pages/InnisfreeBestSellers';
import SidmoolBestSellers from './pages/SidmoolBestSellers';
import BeplainBestSellers from './pages/BeplainBestSellers';

import MyCart from './pages/MyCart';
import LoginSignup from './pages/LoginSignup';



const Router = () => (
  <BrowserRouter>
  {/* <BrowserRouter basename="/for-your-skin-type-project" > */}
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dr-jart-bestsellers" element={<DrJartBestSellers />} />
      <Route path="/innisfree-bestsellers" element={<InnisfreeBestSellers />} />
      <Route path="/sidmool-bestsellers" element={<SidmoolBestSellers />} />
      <Route path="/beplain-bestsellers" element={<BeplainBestSellers />} />
      <Route path="/skin-type-test" element={<SkinTypeTest />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route path="/login-signup" element={<LoginSignup />} />
    </Routes>
  </BrowserRouter>
);


export default Router;