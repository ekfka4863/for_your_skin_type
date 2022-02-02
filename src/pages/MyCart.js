import { useEffect, useState } from "react";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import Card from "../components/Card";

import "../styles/src/MyCart.scss";

import data from "../pages/LoginSignup"; 



// POST request 보내기 전 임의로 사용자 정하기 ... 
const user1 = {
  id: 1,
  email: 'user1@gmail.com',
  password:'user1_password', 
  name: '박유저',
  gender: 'woman',
  phoneNumber: '01012345678',
  sessionId: "~~~~",
};


// // for signup api to bring data of certain user's favorite items
// // const url = 'http://localhost:9090/login';
// // import data from "../pages/LoginSignup"; 

// console.log("data => ", data);

// // const sessionId = sessionStorage.getItem(data).sessionId;
// // console.log("sessionId in MyCart.js => ", sessionId);
// // 저희가 원하는 것: 세션아이디가 지금 로그인 된 아이디의 유저에게 있는지 확인하고, 


// 상품을 장바구니에 추가하고 싶을 때 보내는 POST request
if (user1.loggedIn === true) {
  const url = 'http://localhost:9090/items/favoritesAdd';   // url 확인하기!
  const asyncFavoriteItemsAddPost = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          member: {
            email: 'user1@gmail.com'
          },
          item: {
              // e.g. 장바구니에 저장하고 싶은 아이템을 보내기 
              "id": 3, // api에서 id받아오는지 확인할 것!
              "name": "시카페어 크림 (호랑이의해 코스터증정)",
              "price": "48000",
              "priceSign": "원",
              "brand": "drjart",
              "imageLink": "https://image.drjart.com/img/001/1640964208443.png",
              "productLink": "https://www.drjart.co.kr/ko/prd/view/707?activeTopGnb=all",
              "websiteLink": "https://www.drjart.co.kr/ko/main/index",
              "itemFeature": "크림형",
              "skinType": "지성"
            }
        })
      });
      const data = await response.json();
      console.log("POST request to server done!! No problem!");
      console.log(data);
    } catch(error) {
      console.log("POST request XXXXXX!! - 장바구니");
    }
  } 
  asyncFavoriteItemsAddPost();
} else {
  // alert("장바구니는 로그인 후 이용할 수 있는 서비스입니다.");
}



// 상품을 장바구니에서 삭제하고 싶을 때 보내는 POST request
if (user1.loggedIn === true) {
  const url = 'http://localhost:9090/items/favoritesDelete';   // url 확인하기!
  const asyncFavoriteItemsDeletePost = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          member: {
            email: 'user1@gmail.com'
          },
          item: {
              // e.g. 장바구니에 저장하고 싶은 아이템을 보내기 
              "id": 3, // api에서 id받아오는지 확인할 것!
              "name": "시카페어 크림 (호랑이의해 코스터증정)",
              "price": "48000",
              "priceSign": "원",
              "brand": "drjart",
              "imageLink": "https://image.drjart.com/img/001/1640964208443.png",
              "productLink": "https://www.drjart.co.kr/ko/prd/view/707?activeTopGnb=all",
              "websiteLink": "https://www.drjart.co.kr/ko/main/index",
              "itemFeature": "크림형",
              "skinType": "지성"
            }
        })
      });
      const data = await response.json();
      console.log("POST request to server done!! No problem!");
      console.log(data);
    } catch(error) {
      console.log("POST request XXXXXX!!");
    }
  } 
  asyncFavoriteItemsDeletePost();
} else {
  // alert("장바구니는 로그인 후 이용할 수 있는 서비스입니다.");
}



// 진짜 컴포넌트 
function MyCart () {
  let myFavoriteItems = [];

  const [myFavoritesNum, setMyFavoritesNum] = useState(0); 
  
  const addFavoriteItems = () => {
    setMyFavoritesNum(myFavoritesNum++);
    myFavoriteItems.push({
      // 카드에 들어갈 정보 담기...
    });
  };
  const removeFavoriteItems = () => {
    setMyFavoritesNum(myFavoritesNum--);
  };

  // useEffect(() => {
  //   // renderItemCard()
  // }, []);
  
  return (
    <div id="wrap">
      <Header />

      <div id="myCartBox">
        <h2 className="blind">환영합니다! gusw위시리스트를 해당 페이지에서 확인하세요.</h2>  
        <div className="favorite_items_total_num">
          <h3>장바구니</h3>
          {/* <div className="total_num">Total: {___} item(s)</div> */}
          <div className="total_num">Total: {myFavoritesNum} item(s)</div>
        </div>
        <div className="favorite_items_area">
          {/* 여기에 Card.js 컴포넌트!! 
            -> 만약 Card 컴포넌트가 하나도 없으면 "장바구니가 비어있습니다."라고 나타내기!? 
          */}
          {
            (myFavoritesNum === 0) 
              ? 
            <div className="empty_cart">장바구니가 비어있습니다</div>
              : 
              // renderItemCard()
            // <Card />
            <Card />
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default MyCart;  



