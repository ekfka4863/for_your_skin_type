import "../styles/src/Header.scss";
import React,{useState} from "react";
import openbutton from "../assets/img/tablet/nav_bar_tablet.png";
import Sidenavbar from "../pages/Sidenavbar";
import { Link } from "react-router-dom";



function Header() {
 
  const [sidebar, setSidebar] = useState(false);

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
              <Link to="/dr-jart-bestsellers">Dr.Jart</Link>
            </li>
            <li>
              <Link to="/innisfree-bestsellers">Innisfree</Link>
            </li>
            <li>
              <Link to="/seedmool-bestsellers">Seedmool</Link>
            </li>
            <li>
              <Link to="/beplain-bestsellers">Beplain</Link>  
            </li>
          </ul>

          <div className="nav_open_btn">
              <button onClick={openSidebar}>
              <span className="blind">메뉴바 열기버튼</span>
              <img src={openbutton} alt="메뉴 열기 버튼" ></img>
              </button>
            
          </div>
          <Sidenavbar sidebar={sidebar} setSidebar={setSidebar}
           closeSidebar={closeSidebar}/>
        
          


        </nav>
      </header>
    </>
  )
}


export default Header;           