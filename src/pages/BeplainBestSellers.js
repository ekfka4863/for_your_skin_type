// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

// import { Link } from "react-router-dom";
import Card from "../components/Card";

import "../styles/src/BestSellers.scss";

function BeplainBestSellers() {
  return (
    <div id="wrap">
      <Header />
      {/* <div className="test">비플레인 베스트셀러 들어올 페이지!!</div> */}
      <div id="bestSellerBox">
        <h2>Beplain</h2>
        <h3>베스트셀러</h3>
        <div className="cards_area">
          <div className="cards_inner">
            {/* 여기에 Card.js 컴포넌트!! */}
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
          </div>
          <div className="cards_more_btn">
            <button type="button">+더보기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}


export default BeplainBestSellers;