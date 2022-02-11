import { useRef, useState, useEffect } from "react";

// styling 
import "../styles/src/Card.scss";



function Card ({ skinTypes, itemNames, itemPrices, itemFeatures, imageLink, productLink }) {

  // 상품 구매하러 가기 
  const priceSign = "원";
  const goToBuyProduct = () => {
    window.location = `${productLink}`;
  };


  // login 유무 
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
  // ====================================================

  



  // let [f_ItemsTotalNum , setF_ItemsTotalNum ] = useState(0);
  let favoriteItemCurr = useRef(false);
  const [favoriteItem, setFavoriteItem] = useState(favoriteItemCurr.current);
  // const [clickedItemData, setClickItemData] = useState({
  //   "item": {
  //     name: itemNames,
  //     price: itemPrices,
  //     priceSign: priceSign,
  //     brand: "",
  //     // brand: "",
  //     imageLink: imageLink,
  //     productLink: productLink,
  //     websiteLink: "",
  //     // websiteLink: "",
  //     itemFeature: itemFeatures,
  //     skinType: skinTypes
  //   }
  // });

  // api
  // const urlAdd = '/favoritesAdd';
  const urlAdd = 'http://localhost:9090/items/favoritesAdd';
  // const urlDelete = '/favoritesDelete';
  const urlDelete = 'http://localhost:9090/items/favoritesDelete';

  const onClickFavoritePostAdd = async (e) => {
    e.preventDefault();
    setFavoriteItem(true);

    try {
      const response = await fetch(urlAdd, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "item": {
            name: itemNames,
            price: itemPrices,
            priceSign: priceSign,
            brand: "",
            // brand: "",
            imageLink: imageLink,
            productLink: productLink,
            websiteLink: "",
            // websiteLink: "",
            itemFeature: itemFeatures,
            skinType: skinTypes
          }
        })
      });
  
      const data = await response.json(); 
      console.log("data when want to add items as favorite items to cart => ", data);

    } catch (error) {
      console.log("해당 상품은 장바구니에 담을 수 없습니다. 죄송합니다.");
      // alert("해당 상품은 장바구니에 담을 수 없습니다. 죄송합니다.");
    }
  };

  const onClickFavoritePostDelete = async (e) => {
    e.preventDefault();
    setFavoriteItem(false);

    try {
      const response = await fetch(urlDelete, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "item": {
            name: "",
            price: "",
            priceSign: "",
            brand: "",
            imageLink: "",
            productLink: "",
            websiteLink: "",
            itemFeature: "",
            skinType: ""
          }
        })
      });
  
      const data = await response.json(); 
      // console.log(data);
      console.log("data when want to delete items from cart => ", data);

    } catch (error) {
      console.log("해당 상품과 관련하여 장바구니 서비스를 이용할 수 없습니다. 죄송합니다.");
      // alert("해당 상품과 관련하여 장바구니 서비스를 이용할 수 없습니다. 죄송합니다.");
    }
  };

  return (
    // <div className="card" onClick={}>
    <div className="card">
      <div className="card_detail_part">
        <div className="item_img" style={{backgroundImage: "url(" + `${imageLink}`+ ")"}}></div>
        <div className="item_name">{itemNames}</div>
        <div className="item_price">{itemPrices + priceSign}</div>
        <div className="item_feature">{`#${skinTypes}`} {(itemFeatures !== "상관없음") ? `#${itemFeatures}` : `#멀티제형`}</div>
      </div>
      <div className="card_cover_part">
        <button type="button" className="go_to_shopping_btn" onClick={goToBuyProduct} >
          <span className="cart_icon"></span>
          <span>바로구매</span>
        </button>
        {
          // 로그인 했을 때만 버튼 보여주기!? 아니면 보여주기는 계속 보여주는데 로그인하고 서비스 이용하라고 알러트!?
            (loggedIn) 
          ? 
            <button onClick={(favoriteItem === false) ? onClickFavoritePostAdd : onClickFavoritePostDelete} className={(favoriteItem === false) ? "to_favorite_item" : "to_favorite_item in_cart"}></button>
            : 
            <></>
        }
      </div>
    </div>
  )
}

export default Card;