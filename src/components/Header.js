import "../styles/src/Header.scss";
import React,{ useRef, useEffect, useState} from "react";
import openbutton from "../assets/img/tablet/nav_bar_tablet.png";
import Sidenavbar from "../pages/Sidenavbar";
import user from "../assets/img/tablet/user.png";
import cart from "../assets/img/tablet/cart.png";
import { Link } from "react-router-dom";
import home_img from "../assets/img/tablet/home_tablet.png";


import logInControler from "../pages/LoginSignup";


function Header() {
  const scrollToTheTop = () => {
    window.scroll(0, 0);
  };

  const [sidebar, setSidebar] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  // let loggedIn = useRef(false);
  let loggedIn = false;
  console.log(loggedIn);
  console.log(logInControler);
  // loggedIn = logInControler;
  // console.log(loggedIn);
  // useEffect(() => {
    // setLoggedIn(logInControler);
  // }, []);

  const [clicktap, setClicktap] = useState(false);


  const openSidebar = () =>{
    setSidebar(true);
  }

  const closeSidebar = () => {
    setSidebar(false);
  }



  
  return (
    
    <>
    <header id="headBox">
        <h1>
          <span className="blind">환영합니다. 해당 사이트는 피부타입을 테스트하고, 피부유형에 맞는 제품을 추천 받는 사이트 입니다.</span>
        </h1>
        <nav class="navigation">
          <h2>
            <span className="blind">닥터자르트, 이니스프리, 시드물, 비플레인. 총 4개 브랜드의 인기 제품을 소개합니다. 자세히 보시려면 메뉴바의 링크를 클릭하세요.</span>
          </h2>

          <ul className="nav_bar_desktop" >
            <li>
              <Link to="/dr-jart-bestsellers" onClick={scrollToTheTop}>Dr.Jart
              </Link> 
            </li>
            <li>
              <Link to="/innisfree-bestsellers" onClick={scrollToTheTop}>Innisfree</Link>
            </li>
            <li>
              <Link to="/sidmool-bestsellers" onClick={scrollToTheTop}>Sidmool</Link>    
            </li>
            <li>
              <Link to="/beplain-bestsellers" onClick={scrollToTheTop}>Beplain</Link>  
            </li>
            </ul>
          
            <Link to="/" onClick={scrollToTheTop}>
            <span className="blind">메인 페이지 이동 버튼. 클릭시 메인 페이지로 이동.</span>
            <span><img src={home_img} alt="홈이미지" className="desktop_home_img"></img></span>
            </Link>

            <div className="unb">
              <Link to="/login-signup" onClick={scrollToTheTop}>
              {/* <Link to="/test-mypage"> */}
                  <button onClick={()=> {
                    setClicktap(!clicktap); }}> 
                  <span><img src={user} alt="로그인이미지" className="desktop_log_img"></img></span>
                  </button>
              </Link>

              <Link to="/my-cart" onClick={scrollToTheTop}>
              <img src={cart} alt="장바구니이미지" className="desktop_cart_img"></img>
              </Link>

              <LoginTap />
            </div>

        {/* tablet */}
          <div className="nav_open_btn">
              <button onClick={openSidebar}>
              <span className="blind">메뉴바 열기버튼</span>
              <img className="openbutton"src={openbutton} alt="메뉴 열기 버튼" ></img>
              </button>
              <Link to="/login-signup" onClick={scrollToTheTop}>
                <span><img src={user} alt="로그인이미지" className="log_img"></img></span>
            </Link>
            <Link to="/my-cart" onClick={scrollToTheTop}>
              <img src={cart} alt="장바구니이미지" className="cart_img"></img>
            </Link>
            
            
          </div>
          <Sidenavbar sidebar={sidebar} setSidebar={setSidebar}
          closeSidebar={closeSidebar}/>
        
          


        </nav>
      </header>


    </>
  )

  function LoginTap() {
    return(
      <div className="LoginTapWrapper">
        <ul className={(!clicktap) ? "LoginTap_none" : "LoginTap" }>
          {
              (!loggedIn) 
            ? 
              <>
                <li><Link to="/login-signup">로그인</Link></li> 
                <li><Link to="/login-signup">회원가입</Link></li> 
              </>
            :
              <>
                <li><Link to="/login-signup" onClick={scrollToTheTop}>마이페이지</Link></li> 
                <li onClick={() => alert("정상적으로 로그아웃 되었습니다!")}>
                {/* <li> */}
                  <Link to="/login-signup" onClick={scrollToTheTop}>로그아웃</Link>
                </li> 
              </>
          }
        </ul>
      </div>
    )
    
  }
}





export default Header;           