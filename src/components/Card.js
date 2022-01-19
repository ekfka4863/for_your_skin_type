import { useRef } from "react";
import "../styles/src/Card.scss";

function Card () {

  // e.g. 
  const itemName = "세라마이딘 엑토인 인퓨즈드";
  const itemPrice = 68000;
  const priceSign = "원";
  const itemFeature = ["민감", "크림형"]; 

  const divRef = useRef();

  // const focusFn = (e) => {
  //   divRef.current.focus();
  // };

  return (
    <div className="card">
      <div className="card_detail_part">
        <div className="item_img"></div>
        <div className="item_name">{itemName}</div>
        <div className="item_price">{itemPrice + priceSign}</div>
        <div className="item_feature">{itemFeature.map((e) => `#${e} `)}</div>
      </div>
      <div className="card_cover_part">
        <button type="button" className="go_to_shopping_btn">
          <span className="cart_icon"></span>
          <span>바로구매</span>
        </button>
      </div>
    </div>
  )
}

export default Card;