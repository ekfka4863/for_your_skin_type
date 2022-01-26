import React,{useState} from "react";

// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/src/LoginSignup.scss";

import axios from "axios";

axios.defaults.baseURL = "";
axios.defaults.withCredentials = true;

// onLogin = (email, password) => {
// 	const data = {
// 		email,
// 		password,
// 	};
// 	axios.post('/login', data).then(response => {
// 		const { accessToken } = response.data;

// 		// API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
// 		axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

// 		// accessToken을 localStorage, cookie 등에 저장하지 않는다!

// 	}).catch(error => {
// 		// ... 에러 처리
// 	});
// }


export default function LoginSignup() {

  const [tapbar, setTapbar] = useState(1);
  

  const toggle = (index) =>{
    setTapbar(index)
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

        <form>
          {/* 로그인아이디박스 */}
        <ul className="Login_Id_box">
          <li><img src={require('../assets/img/laptop/user_email.png')} alt="아이디이미지"></img></li>
          <li><input type="email" id="userId" placeholder="아이디를 입력하세요." required>
          </input>
          <label for="userId"></label></li>
        </ul>
         {/* 패스워드 박스 */}
        <ul className="Pw_Id_box">
          <li><img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img></li>
          <li><input type="password" id="ueserPW" placeholder="비밀번호를 입력하세요." required>
            </input>
          <label for="userPW"></label></li>
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
        <ul className="first_bundle">
            <li className="Name_box">
                <img src={require('../assets/img/laptop/user_name.png')} alt="비밀번호 이미지"></img>
                <input type="text" id="userName" placeholder="이름" required></input>
                <label for="userName"></label>
            </li>
            <li className="gender_box">
              <div className="man_box">
              <img src={require('../assets/img/laptop/man.png')} alt="남자 이미지"></img>
              <input type="radio" name="userGender" placeholder="woman" checked></input>
              <label for="userGender"></label>
              </div>
              <div className="woman_box">
              <img src={require('../assets/img/laptop/woman.png')} alt="여자 이미지"></img>
              <input type="radio" name="userGender" placeholder="man"></input>
              <label for="userGender"></label>
              </div>
            </li>
          </ul>

          <ul className="second_bundle">
            <li className="signup_email_box">
            <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
            <input type="email" id="userEmail" placeholder="아이디(이메일)" required></input>
            <label for="user"></label></li>

            <li className="signup_pw_box">
            <img src={require('../assets/img/laptop/user_pw.png')} alt="비밀번호 이미지"></img>
            <input type="password" id="userPw"
            placeholder="비밀번호" required></input>
            <label for="userPw"></label></li>

            <li className="signup_tel_box">
            <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
            <input type="tel" id="userTel" placeholder="전화번호" required></input>
            <label for="userTel"></label></li>
          </ul>

          <div className="signup_button">
            <input type="submit" value="회원가입"></input>
          </div>

        </form>
      </div>

      </div>

    </div>
    <Footer />
    </>
  )
};



