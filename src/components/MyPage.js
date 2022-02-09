// import React, { useEffect,  } from 'react';
import { useState, useEffect, useRef } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/src/Mypage.scss"

let sessionId;

if ((localStorage.getItem("authenticatedId") !== "loginFail")) {
  sessionId = localStorage.getItem("authenticatedId");
}

// console.log(sessionId);   



export default function MyPage() {
  const [apiData, setApiData] = useState([]);

  // const [dataArr, setDataArr] = useState([]);


  // API 
  const url = 'http://localhost:9090/mypage';
  
  useEffect(() => {
    const asyncSessionIdPost = async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            sessionId: sessionId
          })
        });
        const data = await response.json();
        setApiData(data.data);
        console.log(apiData);   // 
      console.log("POST request to server done!! No problem! - 마이페이지!!");

    } catch(error) {
      console.log("POST request XXXXXX!! - 마이페이지!!");
    }
  } 
  asyncSessionIdPost();
// }, [sessionId]);
}, []);
// reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await





  return (
  <>
    <Header />
      <div id='Mypage_wrap'>
        <h1>마이페이지</h1>

        <form>
        
          <div className='first_box'>
          <ul> 
          <li className='name'><img src={require('../assets/img/laptop/user_name.png')} alt="이름이미지"></img></li>
          <span></span>
          </ul>

          <ul>
          <li>
            <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img></li>
          <span></span>
          </ul>
          </div>
          
          <div className='second_box'>

          <ul>
          <li>
            <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
          </li>
          <span></span>
          </ul>

          <ul>
          <li className="gender_box">
              <img src={require('../assets/img/laptop/gender.png')} alt="남자 이미지"></img>
          </li>
          <span></span>
          </ul>
          </div>
        
        </form> 
      </div>
      
    <Footer />
  </>)
}
