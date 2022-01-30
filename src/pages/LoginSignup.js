import React,{useState} from "react";
import { Link } from "react-router-dom";


// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import MyPage from "../components/MyPage";

import "../styles/src/LoginSignup.scss";

// img 
import cart from "../assets/img/tablet/cart.png";
import go_to_test_btn from "../assets/img/laptop/go_to_test_btn.png";


// sessionId가 있음에 따라 MyCart.js 페이지에서 signup api에서 보내기 ... 
export let data;





// 임의의 사용자 아이디 - 나중에 지우기!
const userId = "박유저";

export default function LoginSignup() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(true);

  // 임의의 사용자 아이디
  // const [userId, setUserId] = useState("");
  // setUserId("박다람");
  const [tapbar, setTapbar] = useState(1);

  const toggle = (index) =>{
    setTapbar(index);
  }


  // 로그인 로직
  const [userId, setUserId] = useState("");
  const [userPwLogin, setUserPwLogin] = useState("");
  
  const submitToLogIn = async (e) => {
    e.preventDefault();

    // console.log({   // 확인용!
    //   userId, 
    //   userPwLogin
    // });

    const response = await fetch('http://localhost:9090/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userId, 
        userPwLogin: userPwLogin
      })
    });

    // const data = await response.json(); 
    data = await response.json(); 
    console.log("data / 세션 ID => ", data);
    
    // validate if session id exists... 
    if (sessionStorage.getItem(data).sessionId !== "") {
      setLoggedIn(true);
      // ...
    } else {
      alert("아이디 또는 비밀번호를 확인해주세요!");
    }
  };  // reference:  https://www.youtube.com/watch?v=OUP-urBy1k4
  
  

  // sign up logic 
  const [userName, setUserName] = useState("");
  const [userGenderMan, setUserGenderMan] = useState("man");
  const [userGenderWoman, setUserGenderWoman] = useState("woman");
  const [userEmail, setUserEmail] = useState("");
  const [userPw_signup, setUserPw_signup] = useState("");
  const [userTel, setUserTel] = useState("");

  const submitToSignUp = async (e) => {
    e.preventDefault();

    console.log({   // 확인용!
      userName, 
      gender: (userGenderMan !== "") ? userGenderMan : userGenderWoman,
      userEmail,
      userPw_signup,
      userTel
    });

    const response = await fetch('http://localhost:9090/signup', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName, 
        gender: (userGenderMan !== "") ? userGenderMan : userGenderWoman,
        userEmail,
        userPw_signup,
        userTel
      })
    });

    const data = await response.json(); 
    console.log(data);
  };


  // when logged in - show diffrent component 
  const LoggedInPage = () => {
    return (
      <div className="logged_in">
        <span className="user_id_logged_in">{userId} </span>
        고객님, 로그인에 성공하셨습니다! <br />
        스킨 타입 테스트 및 장바구니 서비스를 이용해보세요!
        <ul>
          <li>
            <Link to="/skin-type-test">
              <img src={go_to_test_btn} alt="스킨 타입 테스트 바로가기 이미지 버튼" />
            </Link>
          </li>
          <li>
            <Link to="/my-cart">
              <img src={cart} alt="장바구니 바로가기 이미지 버튼" />
            </Link>
          </li>
        </ul>
      </div>
    )
  };

  return(
    <>
      <Header />
      <div id="LoginSignup_wrap">
        {
          (loggedIn) 
        ? 
          <>
            <LoggedInPage /> 
          </>
        : 
          <div className="LoginSignup_bind">

          <ul className="taps">
            <li className={ tapbar === 1 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(1)}}>로그인</li>
            <li className={ tapbar === 2 ? 'tap_active' : 'tap_none'} onClick={() => {toggle(2)}}>회원가입</li>
          </ul>

          {/* 로그인박스 */}
          <div className={ tapbar === 1 ? 'Login_box' : 'Content_none'} onClick={() => {toggle(1)}}>
            {/* <form> */}
            <form onSubmit={submitToLogIn}>
              {/* 로그인아이디박스 */}
              <ul className="Login_Id_box">
                <li>
                  <img src={require('../assets/img/laptop/user_email.png')} alt="아이디이미지"></img>
                </li>
                <li>
                  <input type="email" id="userId" placeholder="아이디를 입력하세요." onChange={e => setUserId(e.target.value)} required></input>
                  <label for="userId"></label>
                </li>
              </ul>
              {/* 패스워드 박스 */}
              <ul className="Pw_Id_box">
                <li>
                  <img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img>
                </li>
                <li>
                  <input type="password" id="userPW" placeholder="비밀번호를 입력하세요." onChange={e => setUserPwLogin(e.target.value)} required></input>
                  <label for="userPW"></label>
                </li>
              </ul>
              {/* 버튼박스 */}
              <div className="Login_button">
                <input type="submit" value="로그인"></input>
              </div>
            </form>
          </div>
          

          {/* 회원가입박스 */}
          <div className={ tapbar === 2? 'Signup_box' : 'Content_none'} onClick={() => {toggle(2)}}>
            <form>
            {/* <form onSubmit={}> */}
              <ul className="first_bundle">
                <li className="Name_box">
                  <label for="userName">
                    <img src={require('../assets/img/laptop/user_name.png')} alt="비밀번호 이미지"></img>
                  </label>
                  <input id="userName" type="text" placeholder="이름" minLength={2} onChange={e => setUserName(e.target.value)} required></input>
                </li>
                <li className="gender_box">
                  <div className="man_box">
                    <label for="userGenderMan">
                      <img src={require('../assets/img/laptop/man.png')} alt="남자 이미지"></img>
                    </label>
                    {/* <input id="userGenderMan" type="radio" name="userGender" placeholder="woman" checked></input> */}
                    <input id="userGenderMan" type="radio" name="userGender" value="man" onChange={e => setUserGenderMan(e.target.value)}></input>
                  </div>
                  <div className="woman_box">
                    <label for="userGenderWoman">
                      <img src={require('../assets/img/laptop/woman.png')} alt="여자 이미지"></img>
                    </label>
                    <input id="userGenderWoman" type="radio" name="userGender" value="woman" onChange={e => setUserGenderWoman(e.target.value)} ></input>
                  </div>
                </li>
              </ul>

              <ul className="second_bundle">
                <li className="signup_email_box">
                  <label for="userEmail">
                    <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
                  </label>
                  <input id="userEmail" type="email" placeholder="아이디(이메일)" required onChange={e => setUserEmail(e.target.value)}></input>
                </li>

                <li className="signup_pw_box">
                  <label for="userPw">
                    <img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img>
                  </label>
                  <input id="userPw" type="password" placeholder="비밀번호" required onChange={e => setUserPw_signup(e.target.value)}></input>
                </li>

                <li className="signup_tel_box">
                  <label for="userTel">
                    <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
                  </label>
                  <input id="userTel"  type="tel" placeholder="전화번호" required maxLength={11} onChange={e => setUserTel(e.target.value)}></input>
                </li>
              </ul> 

              <div className="signup_button">
                <input type="submit" value="회원가입"></input>
              </div>

            </form>
          </div>

        </div>
        }
        
      </div>
      <Footer />
    </>
  )
};


// 
