import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import "../styles/src/Mypage.scss"

export default function MyPage() {
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
