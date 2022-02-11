import { useState, useContext, useEffect } from "react";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

// components
import LogInSection from "../components/LogInSection";
import SignUpSection from "../components/SignUpSection";

// styling 
import "../styles/src/LoginSignup.scss";

// Context API 
import AuthContext from "../context/auth-context";


function LoginSignup () {
  const [tapbar, setTapbar] = useState(1);
  
  const toggle = (index) =>{
    setTapbar(index);
  }

  
  // // Context API 
  let userLoggedIn = useContext(AuthContext); 


  useEffect(() => {
    console.log("effect here!");

    if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
      userLoggedIn = true;
    } else {
      
    }

    console.log("effect here!");

    }, []);


  return(
    <>
      <Header />

      <AuthContext.Consumer>
          {() => {
            return (
              <>
                <div id="LoginSignup_wrap">
                {/* <div id="LoginSignup_wrap" style={(userLoggedIn.isLoggedIn !== true) ? {display: "block"} : {display: "none"}}> */}
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
              </>
            )
          }}
      </AuthContext.Consumer>

      <Footer />
    </>
  )
};


export default LoginSignup;