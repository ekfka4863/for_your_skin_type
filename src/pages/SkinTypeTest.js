import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";


// scss
import "../styles/src/SkinTypeTest.scss";

// img
import condition_checked from "../assets/img/laptop/condition_checked.png";


// api / mock data 
import { recoms_sensitive } from "../assets/data/recoms_sensitive";
import { recoms_complex } from "../assets/data/recoms_complex";
import { recoms_dry } from "../assets/data/recoms_dry";
import { recoms_oily } from "../assets/data/recoms_oily";



export default function SkinTypeTest () {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const [testInput1, setTestInput1] = useState();
  const [testInput2, setTestInput2] = useState();
  const [testInput3, setTestInput3] = useState();
  const [testInput4, setTestInput4] = useState();
  const [analizeBtn, setAnalyzeBtn] = useState(false);
  
  const skinTypeFormat = [
    { 
      skintype: "민감성",
      color: "#E60041"
    }, {
      skintype: "지성",
      color: "#FABD00"
    }, {
      skintype: "건성",
      color: "#A7CE59"
    }, {
      skintype: "복합성",
      color: "#8ACECD"
    }
  ];   // 임의의 자료!

  
  // function 
  // resize 된 뷰포트 크기에 따라 Header 컴포넌트 렌더링에 조건 걸기
  
  
  const resizeFunc = () => {
    setViewportWidth(document.documentElement.clientWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeFunc);
    return () => {
      window.removeEventListener("resize", resizeFunc);
    }
  }, []);
  // reference: https://db2dev.tistory.com/entry/React-resize-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%8B%A4%EB%A3%A8%EA%B8%B0


  
  // test input 관련 변수랑 함수들
  // let testValues = useRef(['1', '2', '3', '4']);
  let testValues = useRef(['', '', '', '']);
  // console.log(testValues.current);  // (4) ['', '', '', ''] -> array


  const onClickInput1 = (e) => {
    testValues.current.splice(0, 1, e.target.value);
    // console.log(testValues.current);
    // console.log(testInput1.current.value);
    setTestInput1(e.target.value);
    // console.log("condition1 => ", condition1);
  };
  const onClickInput2 = (e) => {
    testValues.current.splice(1, 1, e.target.value);
    setTestInput2(e.target.value);
  };
  const onClickInput3 = (e) => {
    testValues.current.splice(2, 1, e.target.value);
    setTestInput3(e.target.value);
  };
  const onClickInput4 = (e) => {
    testValues.current.splice(3, 1, e.target.value);
    setTestInput4(e.target.value);
  };

  const onClickSpan1 = (e) => {
    testValues.current.splice(0, 1, e.target.previousSibling.value);
    setTestInput1(e.target.previousSibling.value);
  };
  const onClickSpan2 = (e) => {
    testValues.current.splice(1, 1, e.target.previousSibling.value);
    setTestInput2(e.target.previousSibling.value);
  };
  const onClickSpan3 = (e) => {
    testValues.current.splice(2, 1, e.target.previousSibling.value);
    setTestInput3(e.target.previousSibling.value);
  };
  const onClickSpan4 = (e) => {
    testValues.current.splice(3, 1, e.target.previousSibling.value);
    setTestInput4(e.target.previousSibling.value);
  };
  // console.log(testInput4, testValues.current[3]);   // -> 항상 같다!!

  let skinType = "";

  function guessSkinType () {
    let possibility = [];
    
    // Q-1
    switch(testValues.current[0]) {
      case "여드름":
        possibility = ["민감성", "지성", "복합성"];
        break;
      case "모공":
        possibility = ["지성", "복합성"];
        break;
      case "주름":
        possibility = ["민감성", "건성"];
        break;
      case "미백":
        possibility = ["민감성", "지성", "건성", "복합성"];
        break;
      case "홍조":
        possibility = ["민감성"];
        break;
        default:
        possibility = ["복합성"];
        break;
    }

    // Q-2
    const result = [];
    switch (testValues.current[1]) {
      case "수분감":
        possibility.forEach((value) => {
          const tempArr = ["건성", "복합성"];
          tempArr.forEach((tempValue) => {
            if (value === tempValue) {
              result.push(tempValue);
            } 
          })
        })
        if (result.length !== 0) {
          possibility = result;
        } 
        // console.log(possibility);
        break;
      case "흡수력":
        possibility.forEach((value) => {
          const tempArr = ["민감성", "건성"];
          tempArr.forEach((tempValue) => {
            if (value === tempValue) {
              result.push(tempValue);
            }
          })
        })
        if (result.length !== 0) {
          possibility = result;
        } 
        // console.log(possibility);
        break;
      case "산뜻함":
        possibility.forEach((value) => {
          const tempArr = ["지성"];
          tempArr.forEach((tempValue) => {
            if (value === tempValue) {
              result.push(tempValue);
            }
          })
        })
        if (result.length !== 0) {
          possibility = result;
        } 
        // console.log(possibility);
        break;
      case "성분":
        possibility.forEach((value) => {
          const tempArr = ["민감성"];
          tempArr.forEach((tempValue) => {
            if (value === tempValue) {
              result.push(tempValue);
            }
          })
        })
        if (result.length !== 0) {
          possibility = result;
        }
        // console.log(possibility);
        break;
      default:
        possibility = ["복합성"];
        break;
    }
    // console.log("세번째 switch문 실행되기 전!!", possibility);

    // Q-3   
    const result2 = [];
    if (possibility.length !== 1) {
      // console.log("세번째 switch문까지 실행됨!");

      switch (testValues.current[2]) {
        case "물형":
          possibility.forEach((value) => {
            const tempArr = ["지성"];
            tempArr.forEach((tempValue) => {
              if (value === tempValue) {
                result2.push(tempValue);
              } 
            })
          })
          if (result2.length !== 0) {
            possibility = result2;
          } else {
            possibility = ["지성"];
          }
          break;
        case "오일형":
          possibility.forEach((value) => {
            const tempArr = ["건성"];
            tempArr.forEach((tempValue) => {
              if (value === tempValue) {
                result2.push(tempValue);
              }
            })
          })
          if (result2.length !== 0) {
            possibility = result2;
          } else {
            possibility = ["건성"];
          }
          break;
        case "크림형":
          possibility.forEach((value) => {
            const tempArr = ["건성"];
            tempArr.forEach((tempValue) => {
              if (value === tempValue) {
                result2.push(tempValue);
              }
            })
          })
          if (result2.length !== 0) {
            possibility = result2;
          }  else {
            possibility = ["건성"];
          }
          break;
        case "상관없음":
          possibility.forEach((value) => {
            const tempArr = ["복합성"];
            tempArr.forEach((tempValue) => {
              if (value === tempValue) {
                result2.push(tempValue);
              }
            })
          })
          if (result2.length !== 0) {
            possibility = result2;
          } else {
            possibility = ["복합성"];
          }
          break;
        default:
          possibility = ["복합성"];
          break;
      }
    }
    
    // 마지막 조건 
    if (possibility.length === 1) {
      skinType = possibility[0];
    } else {
      console.log("에러에러!!! 타입이 여러개가 나옴!!");   // 해결 완료!
      console.log(possibility);
    }

    return skinType;
  }



  let skinTypeTitle = "";
  let skinTypeBgColor = "";
  const skinTypeDetails = (skinType) => {
    skinTypeFormat.forEach((each, idx) => {
      if (each.skintype === skinType) {
        skinTypeTitle = each.skintype;
        skinTypeBgColor = each.color;
      } 
    });
    return skinTypeBgColor;
  };



  if (!testValues.current.includes('')) {
    guessSkinType();
    skinTypeDetails(skinType);
  }
  // console.log(skinType);

  // 피부타입에 맞는 제품 display하는 함수 && 원하는 가격대의 제품 display 하기 
  let cardLen = 0;
  const skinTypes = []; 
  const itemNames = []; 
  const itemPrices = []; 
  const itemFeatures = []; 
  const imageLink = []; 
  const productLink = []; 

  // console.log(skinTypes);   // 지성 
  // console.log("답 => ", recoms_oily[0].skinType);
  // recoms_oily.forEach(each => console.log(each.skinType))


  // 피부타입에 따라 카드 display && 가격대별로 필터링 ...   ---> 여기부터 다시!!!!
  switch (skinType) {
    case "민감성":
      recoms_sensitive.forEach((each) => {
        skinTypes.push(each.skinType);
        itemNames.push(each.name);
        itemPrices.push(each.price);
        itemFeatures.push(each.itemFeature);
        imageLink.push(each.imageLink);
        productLink.push(each.productLink);
        cardLen++;
        // console.log(testInput4);  // 상관없음
        // console.log(Number(each.price));  // -> 여러가지 숫자들 ...
        // console.log(Number(testInput4));  // -> NaN ...
        // console.log(Number(each.price) <= Number(testInput4) || each.price === "상관없음");
        // console.log(each.price === "상관없음");
        // if (testInput4 === "상관없음") {
        //   skinTypes.push(each.skinType);
        //   itemNames.push(each.name);
        //   itemPrices.push(each.price);
        //   itemFeatures.push(each.itemFeature);
        //   imageLink.push(each.imageLink);
        //   productLink.push(each.productLink);
        //   cardLen++;
        // } else if (Number(testInput4) !== NaN && Number(each.price) <= Number(testInput4)) {
        //     skinTypes.push(each.skinType);
        //     itemNames.push(each.name);
        //     itemPrices.push(each.price);
        //     itemFeatures.push(each.itemFeature);
        //     imageLink.push(each.imageLink);
        //     productLink.push(each.productLink);
        //     cardLen++;
        // }
      });
      break;
    case "복합성":
      recoms_complex.forEach((each) => {
        skinTypes.push(each.skinType);
        itemNames.push(each.name);
        itemPrices.push(each.price);
        itemFeatures.push(each.itemFeature);
        imageLink.push(each.imageLink);
        productLink.push(each.productLink);
        cardLen++;
      });
      break;
    case "지성":
      recoms_oily.forEach((each) => {
        skinTypes.push(each.skinType);
        itemNames.push(each.name);
        itemPrices.push(each.price);
        itemFeatures.push(each.itemFeature);
        imageLink.push(each.imageLink);
        productLink.push(each.productLink);
        cardLen++;
      });
      break;
    case "건성":
      recoms_dry.forEach((each) => {
        skinTypes.push(each.skinType);
        itemNames.push(each.name);
        itemPrices.push(each.price);
        itemFeatures.push(each.itemFeature);
        imageLink.push(each.imageLink);
        productLink.push(each.productLink);
        cardLen++;
      });
      break;
    default:
      break;
  }
  // console.log("skinTypes => ", skinTypes);
  // console.log("itemNames => ", productLink);


  // 카드 렌더링 관련 state 및 함수들
  const [cardController, setCardController] = useState(6);

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
    // console.log(result);
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


  // 레이아웃 시작
  return (
    <>
      {!(viewportWidth >= 1280) ? <Header /> : null}
      <div id="skinTypeTestBox">
        <h2>your skin type?</h2>
        <section className="test_box_title">
          <div> 
            <h3>&#35;피부타입 분석에서 제품 추천까지</h3>
            {/* <p>피부타입 분석결과</p> */}
            {
              (analizeBtn) 
              ? 
              <p>피부타입 분석결과</p> 
              :  
              <p>
                간단한 질문을 통해 <br />
                피부유형을 분석하고 <br />
                피부타입에 맞는 제품을 <br />
                추천받으세요
              </p>
            }
          </div>
          <div className="test_box_title_bg"></div>
        </section>

        {
          (analizeBtn === false) 
          ? 
          <section className="test_box_con">
            <div className="test_question_1">
              <h4>
                피부 평소 고민
                <span className="blind">
                  이 있으신가요? 다음 5개의 보기 중 하나를 선택해주세요.
                </span>
              </h4>
              <form action="#">
                <div>
                  <input
                    type="radio"
                    name="problem"
                    id="acne"
                    value="여드름"
                    onClick={onClickInput1}
                  />
                  <span 
                    onClick={onClickSpan1} 
                    style={(testInput1 === "여드름") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="acne">여드름</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="problem"
                    id="pore"
                    value="모공"
                    onClick={onClickInput1}
                  />
                  <span 
                    onClick={onClickSpan1}
                    style={(testInput1 === "모공") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="pore">모공</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="problem"
                    id="wrinkle"
                    value="주름"
                    onClick={onClickInput1}
                  />
                  <span 
                    onClick={onClickSpan1}
                    style={(testInput1 === "주름") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="wrinkle">주름</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="problem"
                    id="whitening"
                    value="미백"
                    onClick={onClickInput1}
                  />
                  <span 
                    onClick={onClickSpan1}
                    style={(testInput1 === "미백") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="whitening">미백</label>
                </div>
                <div style={(viewportWidth >= 1280) ? null : {marginBottom: 0}}>
                  <input
                    type="radio"
                    name="problem"
                    id="flush"
                    value="홍조"
                    onClick={onClickInput1}
                  />
                  <span 
                    onClick={onClickSpan1}
                    style={(testInput1 === "홍조") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="flush">홍조</label>
                </div>
              </form>
            </div>
            <div className="test_question_2">
              <h4>
                중요하게 생각하는 항목
                <span className="blind">
                  이 있으신가요? 다음 4개의 보기 중 하나를 선택해주세요.
                </span>
              </h4>
              <form action="#">
                <div>
                  <input
                    type="radio"
                    name="essential"
                    id="moisture"
                    value="수분감"
                    onClick={onClickInput2}
                  />
                  <span 
                    onClick={onClickSpan2}
                    style={(testInput2 === "수분감") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="moisture">수분감</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="essential"
                    id="absorption"
                    value="흡수력"
                    onClick={onClickInput2}
                  />
                  <span 
                    onClick={onClickSpan2}
                    style={(testInput2 === "흡수력") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="absorption">흡수력</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="essential"
                    id="glutinousness"
                    value="산뜻함"
                    onClick={onClickInput2}
                  />
                  <span 
                    onClick={onClickSpan2}
                    style={(testInput2 === "산뜻함") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="glutinousness">산뜻함</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="essential"
                    id="ingredient"
                    value="성분"
                    onClick={onClickInput2}
                  />
                  <span 
                    onClick={onClickSpan2}
                    style={(testInput2 === "성분") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="ingredient">성분</label>
                </div>
              </form>
            </div>
            <div className="test_question_3">
              <h4>
                원하는 제형
                <span className="blind">
                  이 있으신가요? 다음 4개의 보기 중 하나를 선택해주세요.
                </span>
              </h4>
              <form action="#">
                <div>
                  <input
                    type="radio"
                    name="texture"
                    id="waterlike"
                    value="물형"
                    onClick={onClickInput3}
                  />
                  <span 
                    onClick={onClickSpan3}
                    style={(testInput3 === "물형") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="waterlike">물형</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="texture"
                    id="fluid"
                    value="오일형"
                    onClick={onClickInput3}
                  />
                  <span 
                    onClick={onClickSpan3}
                    style={(testInput3 === "오일형") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="fluid">오일형</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="texture"
                    id="cream"
                    value="크림형"
                    onClick={onClickInput3}
                  />
                  <span 
                    onClick={onClickSpan3}
                    style={(testInput3 === "크림형") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="cream">크림형</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="texture"
                    id="noMatter1"
                    value="상관없음"
                    onClick={onClickInput3}
                  />
                  <span 
                    onClick={onClickSpan3}
                    style={(testInput3 === "상관없음") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="noMatter1">상관없음</label>
                </div>
              </form>
            </div>
            <div className="test_question_4">
              <h4>
                선호하는 가격대
                <span className="blind">
                  가 있으신가요? 다음 4개의 보기 중 하나를 선택해주세요.
                </span>
              </h4>
              <form action="#">
                <div>
                  <input
                    type="radio"
                    name="maximunPrice"
                    id="tenThousand"
                    value="10000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "10000") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="tenThousand">
                    만원 &darr;
                    <span className="blind">미만의 가격대를 선호</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="maximunPrice"
                    id="twentyThousand"
                    value="20000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "20000") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="twentyThousand">
                    이만원 &darr;
                    <span className="blind">미만의 가격대를 선호</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="maximunPrice"
                    id="thirtyThousand"
                    value="30000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "30000") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="thirtyThousand">
                    삼만원 &darr;
                    <span className="blind">미만의 가격대를 선호</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="maximunPrice"
                    id="noMatter2"
                    value="상관없음"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "상관없음") ? {backgroundImage: `url(${condition_checked})`} : null}
                  ></span>
                  <label htmlFor="noMatter2">상관없음</label>
                </div>
              </form>
            </div>
            <div className="test_submit_btn">
            <button 
                type="submit" 
                onClick={() => {
                  if (!testValues.current.includes('')) {
                    setAnalyzeBtn(true); 
                    // console.log("결과 분석 버튼 누름!!", analizeBtn);
                    // console.log("결과 => ", skinTypeTitle);   // e.g. 지성 
                    
                    const url = 'http://localhost:9090/items/skintype';
                    const asyncSkinTypePost = async () => {
                      try {
                        const response = await fetch(url, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                          },
                          body: JSON.stringify({
                            brand: "drjart",
                            skinType: skinTypeTitle
                          })
                        });
                        const data = await response.json();
                        console.log("POST request to server done!! No problem!");
                        console.log(data);
                      } catch(error) {
                        console.log("POST request XXXXXX!!");
                      }
                    } 
                    asyncSkinTypePost();
                  } else {
                    alert("테스트 질문은 총 4개입니다. 결과분석을 하시려면 모든 질문에 답변하여 주세요.");
                  }
                }
              }>
                <span></span> 
                <span>결과분석</span> 
              </button>
            </div>
          </section>
          :
          <section className="test_box_result">
            <div className="test_result_detail">
              <div className="test_result_badge" 
              style={(skinTypeBgColor !== "") ? {backgroundColor: `${skinTypeBgColor}`} : null}>
                <span>{"#" + skinTypeTitle}</span>
              </div>
              <p>{skinType} 피부 타입</p>
            </div>
            <div className="test_result_cards">
              {/* Card.js 컴포넌트 여기다 불러오기... */}
              {renderItemCard()}
            </div>
            <div className="test_result_more_btn">
              <button type="button" onClick={onClickShowMoreCards}>&#43; 관련 제품 더보기</button>
            </div>
          </section>
        }

        <div className="home_btn">
          <Link to="/">
            <span className="blind">메인 페이지 이동 버튼. 클릭시 메인 페이지로 이동.</span>
            <span>{/* 홈버튼 이미지 */}</span>
          </Link>
        </div>

      </div>
      <Footer />
    </>
  ) 
}






// localStorage.setItem();
// localStorage.getItem();