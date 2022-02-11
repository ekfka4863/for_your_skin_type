import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// components 
import LoggedInPage from "../pages/LoggedInPage";

// styling 
import "../styles/src/LogInSection.scss";

// Context API 
import AuthContext from "../context/auth-context";



function LogInSection () {
  
  // Context API 
  let userLoggedIn = useContext(AuthContext); 
  // console.log(userLoggedIn);  // {userId: '', isLoggedIn: false}

  // useNavigate 
  let navigate = useNavigate();

  const moveToMyPage = () => {
    navigate("/my-page");
  };// reference: https://velog.io/@soryeongk/ReactRouterDomV6

  const renderLoggedInPage = () => {
    navigate("/logged-in-page");
  };

  
  // 로그인 로직
  const [userId, setUserId] = useState("");
  const [userPwLogin, setUserPwLogin] = useState("");
  
  // const url = 'http://localhost:9090/login';
  const url = '/login';

  const submitToLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          userId, 
          userPwLogin
        })
      });
      
      const data = await response.json(); 
      // console.log(data);  // data: {id: 83, name: '생쥐1', age: 0, gender: 'woman', email: 'sj1@gmail.com', …}
      // console.log(typeof data === 'object');   // true

      if (typeof data === 'object') {
        alert("정상적으로 로그인 되었습니다.");
        // console.log(userLoggedIn);    // {userId: '', isLoggedIn: false}
        userLoggedIn.userId = data.data.email;
        userLoggedIn.isLoggedIn = !userLoggedIn.isLoggedIn;
        // console.log(userLoggedIn);    // {userId: 'sj1@gmail.com', isLoggedIn: false}

        localStorage.setItem("authenticatedId", userId);
        renderLoggedInPage();
      } else {
        alert("입력하신 아이디와 비밀번호를 확인해주세요.");
      }
    } catch (error) {
      console.log("POST request XXXXXX!! - LoginSignup.js ");
    } 
  };  // reference:  https://www.youtube.com/watch?v=OUP-urBy1k4
  
  



  // 새로 고침해도 로그인한 상태로 남을 수 있게 ... localStorage에 저장한 값 활용!
  if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
    userLoggedIn.userId = localStorage.getItem("authenticatedId");
    userLoggedIn.isLoggedIn = true;
  }

  // console.log(userLoggedIn);  // e.g.{userId: 'sj1@gmail.com', isLoggedIn: true}

  return (
    <AuthContext.Consumer>
      {() => {
        return (
          <>
            {(userLoggedIn.isLoggedIn === false) && (
              <form onSubmit={submitToLogIn}>
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
                    <input type="password" id="userPW" placeholder="비밀번호를 입력하세요." onChange={e => setUserPwLogin(e.target.value)} required  autocomplete="off"></input>
                    <label for="userPW"></label>
                  </li>
                </ul>
                {/* 버튼박스 */}
                <div className="Login_button">
                  <input type="submit" value="로그인"></input>
                </div>
              </form>
            )}
          </>)
        }
      }
    </AuthContext.Consumer>
  )
}

export default LogInSection;