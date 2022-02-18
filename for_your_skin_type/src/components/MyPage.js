import { useState, useEffect, useContext } from "react";

// 공통 components
import Header from "./Header";
import Footer from "./Footer";

// styling 
import "../styles/src/MyPage.scss"

// Context API 
import AuthContext from "../context/auth-context";


function MyPage() {
  const [userData, setUserData] = useState({});

  // Context API 
  let userLoggedIn = useContext(AuthContext); 
  // console.log(userLoggedIn);
  

  // API 
  const url = 'http://localhost:9090/mypage';
  // const url = '/mypage';
  
  useEffect(() => {
    // 무한 루프가 되지 않게 ... useEffect 안에 넣기!
    if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
      userLoggedIn.userId = localStorage.getItem("authenticateId");
      userLoggedIn.isLoggedIn = true;
    }
    // console.log(userLoggedIn.isLoggedIn);   // 로그인 후에는 -> 26
  }, [])


  useEffect(() => {
    const asyncLoggedInIdGet = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        // console.log("data ===> ", data);  // {id: 83, name: '생쥐1', age: 0, gender: 'woman', email: 'sj1@gmail.com', password: 'sj1', phoneNumber: '39248092384'}

        userLoggedIn.userName = data.name;
        userLoggedIn.userPhoneNumber = data.phoneNumber;
        userLoggedIn.userEmail = data.email;
        userLoggedIn.userGender = data.gender;

        setUserData({
          userName: data.name,
          userPhoneNumber: data.phoneNumber,
          userEmail: data.email,
          userGender: data.gender
        });

        // console.log("userData => ", userData);  // {userName: '생쥐10', userPhoneNumber: '32948329048', userEmail: 'sj10@gmail.com', userGender: 'woman'}
      } catch(error) {
        console.log("GET request XXXXXX!! - 마이페이지!!");
      }
    } 
    asyncLoggedInIdGet();
  }, [setUserData]); // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await
  // }, [userData, setUserData]); // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await  
  


  return (
  <>
    <Header />
    <AuthContext.Consumer>
      {() => {
        return (
          <>
            <div id='Mypage_wrap'>
              <h1>마이페이지</h1>
              <form>
                {/* .first_box */}
                <div className='first_box'>
                  <ul> 
                    <li className='name'>
                      <img src={require('../assets/img/laptop/user_name.png')} alt="이름이미지"></img>
                      <span className="user_name">{userLoggedIn.userName}</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
                      <span className="user_name">{userLoggedIn.userPhoneNumber}</span>
                    </li>
                  </ul>
                </div>

                {/* .second_box */}
                <div className='second_box'>
                  <ul>
                    <li>
                      <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
                      <span className="user_name">{userLoggedIn.userEmail}</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="gender_box">
                      <img src={require('../assets/img/laptop/gender.png')} alt="남자 이미지"></img>
                      <span className="user_name">{userLoggedIn.userGender}</span>
                    </li>
                  </ul>
                </div>
              </form> 
            </div>
          </>
        )
      }}
    </AuthContext.Consumer>
    <Footer />
  </>
  )
}


export default MyPage;