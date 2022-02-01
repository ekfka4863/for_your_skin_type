import { useState, useRef } from "react";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import Card from "../components/Card";

import "../styles/src/BestSellers.scss";

// api / mock data 
// import dataObj from "../assets/data/data_renewed";
// import { brand1 } from '../components/Card';




function DrJartBestSellers() {
  let dataArr = useRef([]);

  // API 
  const url = 'http://localhost:9090/items/drjart';

  const asyncDrjartGet = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("GET request to server done!! No problem! - 닥터자르트!!");
      console.log(data);
      dataArr = data;
      // console.log("dataArr => ", dataArr.data[0]);
      console.log("dataArr => ", dataArr.data);
      // console.log("dataArr => ", Array.isArray(dataArr.data));  // true
    } catch(error) {
      console.log("GET request XXXXXX - 닥터자르트!!");
    }
  } 
  asyncDrjartGet();
  // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await


  console.log("dataArr ==> ", dataArr.current);   // [] ??
  let cardLen = 0;
  const skinTypes = []; 
  const itemNames = []; 
  const itemPrices = []; 
  const itemFeatures = []; 
  const imageLink = []; 
  const productLink = []; 


  console.log(dataArr.data);
  console.log(Array.isArray(dataArr.data));   // true
  dataArr.data.forEach((each) => {
    skinTypes.push(each.skinType);
    itemNames.push(each.name);
    itemPrices.push(each.price);
    itemFeatures.push(each.itemFeature);
    imageLink.push(each.imageLink);
    productLink.push(each.productLink);
    cardLen++;
  });

  // 원본 
  // dataObj[brand1].forEach((each) => {
  //   skinTypes.push(each.skinType);
  //   itemNames.push(each.name);
  //   itemPrices.push(each.price);
  //   itemFeatures.push(each.itemFeature);
  //   imageLink.push(each.imageLink);
  //   productLink.push(each.productLink);
  //   cardLen++;
  // });

  const [cardController, setCardController] = useState(6);

  // reference:  https://codingbroker.tistory.com/123
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
      <div id="bestSellerBox">
        <h2>Dr.Jart</h2>
        <h3>베스트셀러</h3>
        <div className="cards_area">
          <div className="cards_inner">
            {/* 여기에 Card.js 컴포넌트!! */}
            {renderItemCard()}
          </div>
          <div className="cards_more_btn">
            <button type="button" onClick={onClickShowMoreCards}>+더보기</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) 
}


export default DrJartBestSellers;