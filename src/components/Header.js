import "../styles/src/Header.scss";
import React,{useState} from "react";
import openbutton from "../assets/img/tablet/nav_bar_tablet.png";
import Sidenavbar from "../pages/Sidenavbar";
import user from "../assets/img/tablet/user.png";
import cart from "../assets/img/tablet/cart.png";
import { Link } from "react-router-dom";
import home_img from "../assets/img/tablet/home_tablet.png";



function Header() {
 
  const [sidebar, setSidebar] = useState(false);
  const [Login, setLogin] = useState(false);


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
              <Link to="/dr-jart-bestsellers">Dr.Jart
              </Link> 
            </li>
            <li>
              <Link to="/innisfree-bestsellers">Innisfree</Link>
            </li>
            <li>
              <Link to="/sidmool-bestsellers">Sidmool</Link>    
            </li>
            <li>
              <Link to="/beplain-bestsellers">Beplain</Link>  
            </li>
            </ul>
          
            <Link to="/">
            <span className="blind">메인 페이지 이동 버튼. 클릭시 메인 페이지로 이동.</span>
            <span><img src={home_img} alt="홈이미지" className="desktop_home_img"></img></span>
            </Link>

            <div>
          
            <Link to="/login-signup">
                <button onClick={()=>setLogin(!Login)}>
                <span><img src={user} alt="로그인이미지" className="desktop_log_img"></img></span>
                </button>
            </Link>

            {/* { Login ? <LoginTap/> : <LogoutTap/> } */}
            </div>

            <Link to="/my-cart">
            <img src={cart} alt="장바구니이미지" className="desktop_cart_img"></img>
            </Link>

          <div className="nav_open_btn">
              <button onClick={openSidebar}>
              <span className="blind">메뉴바 열기버튼</span>
              <img className="openbutton"src={openbutton} alt="메뉴 열기 버튼" ></img>
              </button>
              <Link to="/login-signup">
                <span><img src={user} alt="로그인이미지" className="log_img"></img></span>
            </Link>
            <Link to="/my-cart">
              <img src={cart} alt="장바구니이미지" className="cart_img"></img>
            </Link>
            
            
          </div>
          <Sidenavbar sidebar={sidebar} setSidebar={setSidebar}
          closeSidebar={closeSidebar}/>
        
          


        </nav>
      </header>


    </>
  )
}

// function LoginTap() {
//   return(
//     <div>
//       <div className="triangle"></div>
//       <ul className="LoginTap">
//         <li>로그인</li>
//         <li>회원가입</li>
//       </ul>
//     </div>
//   )
  
// }
// function LogoutTap() {
//   return(
//     <div>
//       <div className="triangle"></div>
//       <ul className="LogoutTap">
//         <li>로그아웃</li>
//         <li>마이페이지</li>
//       </ul>
//     </div>
//   )
  
// }


export default Header;           