// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import TestDiv from "../test";

import { Link } from "react-router-dom";

import "../styles/src/Main.scss";
import DaJartSlideBox from "../components/DrJartSlideBox";
import InnisfreeSlideBox from "../components/InnisfreeSlideBox";
import SeedmoolSlideBox from "../components/SeedmoolSlideBox";
import BeplainSlideBox from "../components/BeplainSlideBox";



function Main () {
  return (
    <>
      {/* <Header /> */}
      <TestDiv />
      

      {/* <Footer /> */}
    </>
  )
}

export default Main;