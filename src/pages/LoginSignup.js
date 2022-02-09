import React,{ useState, useRef } from "react";
// import React,{ useState, useRef, useEffect } from "react";


// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";


// components
import MyPage from "../components/MyPage";
import LogInSection from "../components/LogInSection";
import SignUpSection from "../components/SignUpSection";


// styling 
import "../styles/src/LoginSignup.scss";


export default function LoginSignup() {
  // let loggedIn = useRef(false);

  const [tapbar, setTapbar] = useState(1);

  const toggle = (index) =>{
    setTapbar(index);
  }



  return(
    <>
      <Header />
      <div id="LoginSignup_wrap">
          <div className="LoginSignup_bind">

          <ul className="taps">
            <li className={ tapbar === 1 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(1)}}>로그인</li>
            <li className={ tapbar === 2 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(2)}}>회원가입</li>
          </ul>

          {/* 로그인박스 */}
          <div className={ tapbar === 1 ? 'Login_box' : 'Content_none'} onClick={() => {toggle(1)}}>
            <LogInSection />
          </div>
          

          {/* 회원가입박스 */}
          <div className={ tapbar === 2? 'Signup_box' : 'Content_none'} onClick={() => {toggle(2)}}>
            <SignUpSection />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};


