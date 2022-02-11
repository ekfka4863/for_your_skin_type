import { useState, useEffect } from "react";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

import "../styles/src/BestSellers.scss";

import axios from "axios";



function InnisfreeBestSellers() {
  // state
  let userId = "";

  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    // 무한 루프가 되지 않게 ... useEffect 안에 넣기!
    if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
      setLoggedIn(true);
      userId = localStorage.getItem("authenticatedId");
      // console.log(userId);   // e.g. sj100@gmail.com
    }
  }, []);
  
  const [apiData, setApiData] = useState([]);
  const [dataArr, setDataArr] = useState([]);

  let cardLen = 0; 
  const skinTypes = []; 
  const itemNames = []; 
  const itemPrices = []; 
  const itemFeatures = []; 
  const imageLink = []; 
  const productLink = []; 
  const [cardController, setCardController] = useState(6);


  // API 
  // const url = 'http://localhost:9090/items/innisfree';
  const url = '/items/innisfree';

  useEffect(() => {
    const asyncInnisfreeGet = async () => {
      try {
        const response = await axios.get(url);
        setApiData(response.data);
      } catch (error) {
        console.log("GET request XXXXXX!! - 이니스프리!!");
      }
    };

    asyncInnisfreeGet();
  }, []);
  // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await


  useEffect(() => {
    setDataArr({...apiData});
  }, [apiData]);


  if (Array.isArray(dataArr.data)) {
    dataArr.data.forEach(each => {
      // console.log(each.skinType);
      skinTypes.push(each.skinType);
      itemNames.push(each.name);
      itemPrices.push(each.price);
      itemFeatures.push(each.itemFeature);
      imageLink.push(each.imageLink);
      productLink.push(each.productLink);
      cardLen++;
    });
  }


  const renderItemCard = () => {
    const result = [];
    for (let i = 0; i < cardController; i++) {
      result.push(<Card 
                    key={i} 
                    skinTypes={skinTypes[i]} 
                    itemNames={itemNames[i]}
                    itemPrices={itemPrices[i]} 
                    itemFeatures={itemFeatures[i]}
                    imageLink={imageLink[i]}
                    productLink={productLink[i]}
                  />
      );            
    }
    return result;
  };


  const onClickShowMoreCards = () => {
    if (cardController <= cardLen - 6) {
      setCardController(cardController + 6);
    } else {
      setCardController(cardLen);
    }

    if (cardController === cardLen) {
      alert("더 많은 제품을 보시려면 해당 화장품 브랜드 사이트를 방문해주십시오. 감사합니다!");
    } 
  };

  return (
    <div id="wrap">
      <Header />
      {/* <div className="test">이니스프리 베스트셀러 들어올 페이지!!</div> */}
      <div id="bestSellerBox">
        <h2>Innisfree</h2>
        <h3>베스트셀러</h3>
        <div className="cards_area">
          <div className="cards_inner">
            {/* 여기에 Card.js 컴포넌트!! */}
            {renderItemCard()}
          </div>
          <div className="cards_more_btn">
            <button type="button" onClick={onClickShowMoreCards} >+더보기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}


export default InnisfreeBestSellers;