import { useRef, useState } from "react";
import "../styles/src/Card.scss";


// function Card () {
function Card ({ skinTypes, itemNames, itemPrices, itemFeatures, imageLink, productLink }) {
  const priceSign = "원";

  const goToBuyProduct = () => {
    window.location = `${productLink}`;
  };


  // login 유무 
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(true);
  

  // let f_ItemsTotalNum = useRef(0);
  let [f_ItemsTotalNum , setF_ItemsTotalNum ] = useState(0);

  let favoriteItemEach = useRef({});
  let favoriteItems = useRef([]);
  
  let favoriteItemCurr = useRef(false);
  const [favoriteItem, setFavoriteItem] = useState(favoriteItemCurr.current);

  const onClickFavorite = (e) => {
    favoriteItemCurr.current = !favoriteItemCurr.current;
    setFavoriteItem(favoriteItemCurr.current);

    // favoriteItemsCurr.current.push(______); // 해당 카드 컴포넌트 api 데이터 넣어주기 ...!?

    // console.log("button clicked!!", favoriteItemCurr.current);
    // console.log(document.querySelector(".to_favorite_item"));
    // console.log(favoriteItem);


    // console.log(e.target.classList.value);
    // console.log(e.target);

  

    if (e.target.classList.value !== "to_favorite_item in_cart") {
      console.log(e.target.classList.value);
      // console.log(f_ItemsTotalNum);
      // console.log(typeof f_ItemsTotalNum);
      setF_ItemsTotalNum(f_ItemsTotalNum++);
      favoriteItemEach.current["sequence"] = f_ItemsTotalNum;
      favoriteItemEach.current["skintype"] = skinTypes; 
      favoriteItemEach.current["name"] = itemNames; 
      favoriteItemEach.current["price"] = itemPrices; 
      favoriteItemEach.current["itemFeatures"] = itemFeatures; 
      favoriteItemEach.current["imageLink"] = imageLink; 
      favoriteItemEach.current["productLink"] = productLink; 
      console.log(favoriteItemEach.current);
      favoriteItems.current.push(favoriteItemEach);
      console.log(favoriteItems.current);
      
    } 
    
    // if (e.target.classList.value !== "to_favorite_item") {
      
    //   favoriteItemEach.current.skintype(skinTypes); 
    //   favoriteItemEach.current.name(itemNames); 
    //   favoriteItemEach.current.price(itemPrices); 
    //   favoriteItemEach.current.itemFeatures(itemFeatures); 
    //   favoriteItemEach.current.imageLink(imageLink); 
    //   favoriteItemEach.current.productLink(productLink); 
    //   console.log(favoriteItemEach);
    // }
  };

  return (
    <div className="card">
      <div className="card_detail_part">
        <div className="item_img" style={{backgroundImage: "url(" + `${imageLink}`+ ")"}}></div>
        <div className="item_name">{itemNames}</div>
        <div className="item_price">{itemPrices + priceSign}</div>
        {/* <div className="item_feature">{`#${skinTypes}`} {(itemFeatures !== "상관없음") ? `#${itemFeatures}` : null}</div> */}
        <div className="item_feature">{`#${skinTypes}`} {(itemFeatures !== "상관없음") ? `#${itemFeatures}` : `#멀티제형`}</div>
      </div>
      <div className="card_cover_part">
        <button type="button" className="go_to_shopping_btn" onClick={goToBuyProduct} >
        {/* <button type="button" className="go_to_shopping_btn" onClick={location.href = {}}> */}
          <span className="cart_icon"></span>
          <span>바로구매</span>
        </button>
        {
          // 로그인 했을 때만 버튼 보여주기!? 아니면 보여주기는 계속 보여주는데 로그인하고 서비스 이용하라고 알러트!?
            (loggedIn) 
          ? 
            <button onClick={onClickFavorite} className={(favoriteItem === false) ? "to_favorite_item" : "to_favorite_item in_cart"}></button>
            :
            null
        }
        {/* <button onClick={onClickFavorite} className={(favoriteItem === false) ? "to_favorite_item" : "to_favorite_item in_cart"}></button> */}
      </div>
    </div>
  )
}

export default Card;