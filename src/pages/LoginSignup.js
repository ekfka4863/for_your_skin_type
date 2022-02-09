import React,{ useState, useRef } from "react";
// import React,{ useState, useRef, useEffect } from "react";
// import { Link } from "react-router-dom";


// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";


// components
import MyPage from "../components/MyPage";
import LogInSection from "../components/LogInSection";
import SignUpSection from "../components/SignUpSection";


// styling 
import "../styles/src/LoginSignup.scss";

// img 
// import cart from "../assets/img/tablet/cart.png";
// import myPage from "../assets/img/tablet/myPage.png";
// import go_to_test_btn from "../assets/img/laptop/go_to_test_btn.png";




// export let logInControler = false;
// let sessionLatestId = "";

export default function LoginSignup() {
  let loggedIn = useRef(false);
  // const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  // let authenticatedId = useRef("");

  const [tapbar, setTapbar] = useState(1);

  const toggle = (index) =>{
    setTapbar(index);
  }



  // useEffect(() => {
  //   console.log("loggedIn, logInControler => ", loggedIn.current, logInControler);
  //   console.log("localStorage.getItem('authenticatedId') => ", localStorage.getItem("authenticatedId"));
  // }, [loggedIn.current, logInControler, localStorage.getItem("authenticatedId")]);
  





  return(
    <>
      <Header />
      <div id="LoginSignup_wrap">
        {
          (localStorage.getItem("authenticatedId") !== "loginFail" && localStorage.getItem("authenticatedId") !== null)
        ? 
          <>
            {/* 확인하기!!! */}
            {/* <LoggedInPage />  */}
            <div>로그인 완료!</div>
          </>
        :  
          <div className="LoginSignup_bind">

          <ul className="taps">
            <li className={ tapbar === 1 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(1)}}>로그인</li>
            <li className={ tapbar === 2 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(2)}}>회원가입</li>
          </ul>

          {/* 로그인박스 */}
          <div className={ tapbar === 1 ? 'Login_box' : 'Content_none'} onClick={() => {toggle(1)}}>
            {/* <LogInSection /> */}
            <div>로그인 박스에유~!</div>
          </div>
          

          {/* 회원가입박스 */}
          <div className={ tapbar === 2? 'Signup_box' : 'Content_none'} onClick={() => {toggle(2)}}>
            {/* <SignUpSection /> */}
            <div>회원가입 박스에유~!</div>
          </div>

        </div>
        }
        
      </div>
      <Footer />
    </>
  )
};


