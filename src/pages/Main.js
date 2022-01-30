import Header from "../components/Header";
import Footer from "../components/Footer";


import { Link } from "react-router-dom";

import "../styles/src/Main.scss";
import DaJartSlideBox from "../components/DrJartSlideBox";
import InnisfreeSlideBox from "../components/InnisfreeSlideBox";
import SidmoolSlideBox from "../components/SidmoolSlideBox";
import BeplainSlideBox from "../components/BeplainSlideBox";

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

        <section className="dr_jart_box">
          <h3>
            <span className="blind">닥터자르트 제품 보기</span>
          </h3>
          <DaJartSlideBox/>
          
  
        </section>
        <section className="innisfree_box">
          <h3>
            <span className="blind">이니스프리 제품 보기</span>
          </h3>
        <InnisfreeSlideBox />
        </section>
        <section className="sidmool_box">
          <h3>
            <span className="blind">시드물 제품 보기</span>
          </h3>
        <SidmoolSlideBox/>

        </section>
        <section className="beplain_box">
          <h3>
            <span className="blind">비플레인 제품 보기</span>
          </h3>
          <BeplainSlideBox/>
          
        </section>

      </section>

      <Footer />
    </>
  )
}

export default Main;