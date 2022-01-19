import "../styles/src/Header.scss";
import "../styles/src/Main.scss";
import React from "react";
import { Link } from "react-router-dom";
import home_img from "../assets/img/tablet/home_tablet.png";
import closebutton from "../assets/img/tablet/close_btn_tablet.png";
// import opensidebar from "../assets/img/tablet/nav_bar_tablet.png";
// import closesidebar from "../assets/img/tablet/close_btn_tablet.png"



export default function Sidenavbar ({sidebar,setSidebar,closeSidebar}) {
  return( <>{ sidebar ?
      <div>
      <ul className="nav_bar" >
      <button onClick={closeSidebar} >
       <img src={closebutton} alt="닫기버튼"></img>
      </button>
        <button className="home_img">
         <Link to="/">
            <span className="blind">메인 페이지 이동 버튼. 클릭시 메인 페이지로 이동.</span>
            <span><img src={home_img} alt="홈이미지"></img></span>
        </Link>
        </button >
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
      </div> :null}
   </>)
}
