import React,{ useState } from "react";
// import React,{ useState, useRef, useEffect } from "react";

// styling 
import "../styles/src/LogInSection.scss";

function LogInSection () {

    // 로그인 로직
    const [userId, setUserId] = useState("");
    const [userPwLogin, setUserPwLogin] = useState("");
    
    const url = 'http://localhost:9090/login';
  
    const submitToLogIn = async (e) => {
      e.preventDefault();
  
      // console.log({   // 확인용!
      //   userId, 
      //   userPwLogin
      // });
  
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
        // // console.log("data / 세션 ID => ", data.data.sessionId);  // ____@___.com
  
        // // sesstionStorage setItem!
        // sessionStorage.setItem(data.data.sessionId, data.data.sessionId);
        // // console.log(sessionStorage.getItem(data.data.sessionId));
  
  
        // // validate if session id exists... - 로그인한 회원이 회원가입한 사용자인지 확인하기 
        // if (sessionStorage.getItem(data.data.sessionId) !== "" || sessionStorage.getItem(data.data.sessionId) !== null || sessionStorage.getItem(data.data.sessionId) !== "loginFail") {
        //   // logInControler = !logInControler;
        //   // loggedIn.current = logInControler;
        //   // console.log(loggedIn.current);       // false
        //   // console.log(logInControler);   // true
  
        //   sessionLatestId = sessionStorage.getItem(data.data.sessionId);
        //   console.log("sessionLatestId => ", sessionLatestId);
  
        //   localStorage.setItem("authenticatedId", sessionLatestId);
        // } 
        
        // if (localStorage.getItem("authenticatedId") !== "loginFail") {
        //   localStorage.getItem("authenticatedId");
        //   logInControler = !logInControler;
        //   loggedIn.current = logInControler;
        //   console.log("loggedIn.current => ", loggedIn.current);       // false
        //   console.log("logInControler => ", logInControler);   // true
        // }
  
      } catch (error) {
        console.log("POST request XXXXXX!! - LoginSignup.js ");
      } 
    };  // reference:  https://www.youtube.com/watch?v=OUP-urBy1k4
    


  return (
    <>
      {/* <div>로그인 했음!</div> */}
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
    </>
  )
}


export default LogInSection;