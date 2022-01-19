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

function SkinTypeTest () {
  const [viewportWidth, setViewportWidth] = useState(document.documentElement.clientWidth);
  const [testInput1, setTestInput1] = useState();
  const [testInput2, setTestInput2] = useState();
  const [testInput3, setTestInput3] = useState();
  const [testInput4, setTestInput4] = useState();
  const [analizeBtn, setAnalyzeBtn] = useState(false);
  
  const skinTypes = [
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
  // 피부 타입: 
  // const skintypes = [
  //   {
  //     skintype: "민감성",
  //     problem: ["여드름", "주름", "홍조", "미백"],   // 피부 평소 고민 
  //     essential: ["산뜻함", "흡수력", "성분"],   // 중요하게 생각하는 항목 
  //     texture: ["크림형", "콧물형", "상관없음"],   // 원하는 제형
  //     color: "#E60041"
  //   },
  //   {
  //     skintype: "지성",
  //     problem: ["여드름", "모공", "미백"],   // 피부 평소 고민 
  //     essential: ["산뜻함", "흡수력", "성분"],   // 중요하게 생각하는 항목 
  //     texture: ["물형", "콧물형", "상관없음"],   // 원하는 제형
  //     color: "#FABD00"
  //   },
  //   {
  //     skintype: "건성",
  //     problem: ["주름", "미백"],   // 피부 평소 고민 
  //     essential: ["수분감", "흡수력", "성분"],   // 중요하게 생각하는 항목 
  //     texture: ["크림형", "콧물형", "상관없음"],   // 원하는 제형
  //     color: "#A7CE59"
  //   },
  //   {
  //     skintype: "복합성",
  //     problem: ["여드름", "모공", "미백"],   // 피부 평소 고민 
  //     essential: ["수분감", "산뜻함", "흡수력", "성분"],   // 중요하게 생각하는 항목 
  //     texture: ["물형", "크림형", "콧물형", "상관없음"],   // 원하는 제형
  //     color: "#8ACECD"
  //   }
  // ];

  
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
  console.log(testValues.current);  // (4) ['', '', '', ''] -> array


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
        console.log(possibility);
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
        console.log(possibility);
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
        console.log(possibility);
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
        console.log(possibility);
        break;
      default:
        possibility = ["복합성"];
        break;
    }
    console.log("세번째 switch문 실행되기 전!!", possibility);

    // Q-3   
    const result2 = [];
    if (possibility.length !== 1) {
      console.log("세번째 switch문까지 실행됨!");

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
      console.log("에러에러!!! 타입이 여러개가 나옴!!");   // 이거 해결 해야함 
      console.log(possibility);
      // 이거 해결 .... ㅠㅠㅠ
      // 랜덤으로 ...???????? 여러개의 타입중 하나를 암꺼나 골라 ...?? 
    }

    return skinType;
  }



  // 여기부터!!!
  let skinTypeTitle = "";
  let skinTypeBgColor = "";
  const skinTypeDetails = (skinType) => {
    skinTypes.forEach((each, idx) => {
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
                추천가격대
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
                    value="under_10000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "under_10000") ? {backgroundImage: `url(${condition_checked})`} : null}
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
                    value="under_20000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "under_20000") ? {backgroundImage: `url(${condition_checked})`} : null}
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
                    value="under_30000"
                    onClick={onClickInput4}
                  />
                  <span 
                    onClick={onClickSpan4}
                    style={(testInput4 === "under_30000") ? {backgroundImage: `url(${condition_checked})`} : null}
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
                    console.log("결과 분석 버튼 누름!!", analizeBtn);
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
              {/* Card.js 컴포넌트 여기다 불러오기... 얼마나 불러올지는 계속 체크... */}
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <div className="test_result_more_btn">
              <button type="button">&#43; 인기제품 더보기</button>
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


export default SkinTypeTest;