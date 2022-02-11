import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// components
import Sidenavbar from "../pages/Sidenavbar";

// styling
import "../styles/src/Header.scss";

// img 
import openbutton from "../assets/img/tablet/nav_bar_tablet.png";
import user from "../assets/img/tablet/user.png";
import cart from "../assets/img/tablet/cart.png";
import home_img from "../assets/img/tablet/home_tablet.png";


function Header() {
  // state
  let userId = "";

  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [clicktap, setClicktap] = useState(false);
  
  useEffect(() => {
    // 무한 루프가 되지 않게 ... useEffect 안에 넣기!
    if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
      setLoggedIn(true);
      userId = localStorage.getItem("authenticatedId");
      // console.log(userId);   // e.g. sj100@gmail.com
    } else {
      setLoggedIn(false);
    }
  }, [setLoggedIn, loggedIn, setClicktap, clicktap]);
  // }, [setLoggedIn, loggedIn, userId]);

  // console.log(loggedIn);  // true


  // function
  const scrollToTheTop = () => {
    window.scroll(0, 0);
  };


  const openSidebar = () =>{
    setSidebar(true);
  }

  const closeSidebar = () => {
    setSidebar(false);
  }


  // 로그아웃 기능
  const onClickLogOut = () => {
    localStorage.removeItem("authenticatedId");
    alert("정상적으로 로그아웃 되었습니다!");
  };

  // logout api
  // const url = 'http://localhost:9090/logout';
  const url = '/logout';
  const onClickLogOutPost = async () => {

    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          userId
        })
      });

      const data = await response.json(); 
      console.log(data); 

    } catch (error) {
      console.log("POST request XXXXXX!! - Header.js ");
    }
    onClickLogOut();
  };



  
  return (
    <>
      <header id="headBox">
        <h1>
          <span className="blind">환영합니다. 해당 사이트는 피부타입을 테스트하고, 피부유형에 맞는 제품을 추천 받는 사이트 입니다.</span>
        </h1>

        <nav className="navigation">
          <h2>
            <span className="blind">닥터자르트, 이니스프리, 시드물, 비플레인. 총 4개 브랜드의 인기 제품을 소개합니다. 자세히 보시려면 메뉴바의 링크를 클릭하세요.</span>
          </h2>

          <ul className="nav_bar_desktop" >
            <li>
              <Link to="/dr-jart-bestsellers" onClick={scrollToTheTop}>Dr.Jart</Link> 
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
            <span className="blind">메인 페이지 이동하는 버튼입니다. 클릭시 메인 페이지로 이동합니다.</span>
            <button><img src={home_img} alt="홈이미지" className="desktop_home_img"></img></button>
          </Link>

          <div className="unb">
            <button 
              onClick={()=> {
                setClicktap(!clicktap);
              }}
            > 
              <img src={user} alt="로그인이미지" className="desktop_log_img"></img>
            </button>

            <Link to="/my-cart" onClick={scrollToTheTop}>
              <img src={cart} alt="장바구니이미지" className="desktop_cart_img"></img>
            </Link>

            <LoginTap />
          </div>

          {/* tablet */}
          <div className="nav_open_btn">
            <button onClick={openSidebar}>
              <span className="blind">메뉴바 열기버튼</span>
              <img className="openbutton" src={openbutton} alt="메뉴 열기 버튼" ></img>
            </button>
            <button 
              className="tablet_sidebar_tabmenu"
              onClick={()=> {
                setClicktap(!clicktap);
              }}
            > 
              <img src={user} alt="로그인이미지" className="tablet_log_img"></img>
              {/* 태블릿을 위한 탭메뉴 작성하기 */}
              <div 
                className="tablet_tabmenu" 
                onClick={()=> {
                  setClicktap(!clicktap);
                }}
                style={(clicktap === false) ? {display: "none"} : {display: "block"}}
              >
                <ul className="tablet_tabmenu_inner">
                  {
                      (loggedIn === false) 
                    ?
                      <>
                        <li>
                          <Link to="/login-signup">로그인</Link>
                        </li>
                        <li>
                          <Link to="/login-signup">회원가입</Link>
                        </li>
                      </>
                    :
                      <>
                        <li>
                          <Link to="/my-page">마이페이지</Link>
                        </li>
                        <li onClick={onClickLogOutPost}>
                          <Link to="/" onClick={scrollToTheTop}>로그아웃</Link>
                        </li>       
                      </>
                  }
                </ul>
              </div>
            </button>
            <Link to="/my-cart" onClick={scrollToTheTop}>
              <img src={cart} alt="장바구니이미지" className="cart_img"></img>
            </Link>
          </div>

          <Sidenavbar 
            sidebar={sidebar} 
            setSidebar={setSidebar}
            closeSidebar={closeSidebar}
          />

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
                <li>
                  <Link to="/my-page" onClick={scrollToTheTop}>마이페이지</Link>
                </li> 
                <li onClick={onClickLogOutPost}>
                  <Link to="/" onClick={scrollToTheTop}>로그아웃</Link>
                </li> 
              </>
          }
        </ul>
      </div>
    )
  }
}


export default Header;   