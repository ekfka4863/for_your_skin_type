import React, {Component} from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";


import { Link } from "react-router-dom";

import "../styles/src/Main.scss";
// import DaJartSlideBox from "../components/DrJartSlideBox";
// import InnisfreeSlideBox from "../components/InnisfreeSlideBox";
// import SidmoolSlideBox from "../components/SidmoolSlideBox";
// import BeplainSlideBox from "../components/BeplainSlideBox";

import Slider from "../components/Slider";

// 슬라이드 다시 하기...!!

function Main () {
  return (
    <>
      <Header />
      <section id="viewBox">
        <h2>
          <span className="blind">브랜드별 제품을 슬라이드로 소개합니다.</span>
        </h2>

        {/* 피부타입 테스트 */}
        <div className="skin_type_test_btn">
          <button type="button">
            <Link to="/skin-type-test">피부타입 테스트</Link>
          </button>
        </div>

        <section id="slideBox">
          <h3>
            <span className="blind">슬라이드로 제품보기</span>
          </h3>
          <Slider/>
        </section>
      </section>

      <Footer />
    </>
  )
}

export default Main;