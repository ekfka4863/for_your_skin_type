import { useEffect, useContext } from "react";
// import { useLayoutEffect ,useEffect, useContext } from "react";

// 공통 components
import Header from "./Header";
import Footer from "./Footer";

// styling 
import "../styles/src/Mypage.scss"

// Context API 
import AuthContext from "../context/auth-context";


function MyPage() {

  // Context API 
  let userLoggedIn = useContext(AuthContext); 
  
  
  if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
    userLoggedIn.userId = localStorage.getItem("authenticateId");
    userLoggedIn.isLoggedIn = true;
  }

  // API 
  // const url = 'http://localhost:9090/mypage';
  const url = '/mypage';
  
  useEffect(() => {

    // if (localStorage.getItem("authenticatedId") !== "" && localStorage.getItem("authenticatedId") !== null) {
    //   userLoggedIn.userId = localStorage.getItem("authenticateId");
    //   userLoggedIn.isLoggedIn = true;
    // }


    const asyncLoggedInIdGet = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("data ===> ", data);  // {id: 83, name: '생쥐1', age: 0, gender: 'woman', email: 'sj1@gmail.com', password: 'sj1', phoneNumber: '39248092384'}

        userLoggedIn.userName = data.name;
        userLoggedIn.userPhoneNumber = data.phoneNumber;
        userLoggedIn.userEmail = data.email;
        userLoggedIn.userGender = data.gender;

        // console.log("userLoggedIn.userName => ", userLoggedIn.userName);   // e.g. 생쥐1
        // console.log("userLoggedIn.userPhoneNumber => ", userLoggedIn.userPhoneNumber);   // e.g. 39248092384
        // console.log("userLoggedIn.userEmail => ", userLoggedIn.userEmail);   // e.g.  sj1@gmail.com
        // console.log("userLoggedIn.userGender => ", userLoggedIn.userGender);   // e.g. woman

      } catch(error) {
        console.log("GET request XXXXXX!! - 마이페이지!!");
      }
    } 
    asyncLoggedInIdGet();
  // }, [userLoggedIn.userName, userLoggedIn.userPhoneNumber, userLoggedIn.userEmail, userLoggedIn.userGender]); // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await
  // }, [userLoggedIn]); // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await
  }, []); // reference:  https://stackoverflow.com/questions/50046841/proper-way-to-make-api-fetch-post-with-async-await


  const renderMyPage = () => {
    return (
      <>
        <form>
          {/* .first_box */}
          <div className='first_box'>
            <ul> 
              <li className='name'>
                <img src={require('../assets/img/laptop/user_name.png')} alt="이름이미지"></img>
                <span className="user_name">{userLoggedIn.userName}</span>
                {/* {console.log("80번줄 userData => ", userLoggedIn.userName)} */}
                {/* <span className="user_name">{userData[0]}</span> */}
              </li>
            </ul>
            <ul>
              <li>
                <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
                <span className="user_name">{userLoggedIn.userPhoneNumber}</span>
                {/* <span className="user_name">{userData[1]}</span> */}
              </li>
            </ul>
          </div>

          {/* .second_box */}
          <div className='second_box'>
            <ul>
              <li>
                <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
                <span className="user_name">{userLoggedIn.userEmail}</span>
                {/* <span className="user_name">{userData[2]}</span> */}
              </li>
            </ul>
            <ul>
              <li className="gender_box">
                <img src={require('../assets/img/laptop/gender.png')} alt="남자 이미지"></img>
                <span className="user_name">{userLoggedIn.userGender}</span>
                {/* <span className="user_name">{userData[3]}</span> */}
              </li>
            </ul>
          </div>
        </form> 
      </>
    )
  };

    


  return (
  <>
    <Header />
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <>
            <div id='Mypage_wrap'>
              <h1>마이페이지</h1>

              {/* form 자리! */}
              {ctx.isLoggedIn && (
                <form>
                  {/* .first_box */}
                  <div className='first_box'>
                    <ul> 
                      <li className='name'>
                        <img src={require('../assets/img/laptop/user_name.png')} alt="이름이미지"></img>
                        <span className="user_name">{userLoggedIn.userName}</span>
                        {/* {console.log("80번줄 userData => ", userLoggedIn.userName)} */}
                        {/* <span className="user_name">{userData[0]}</span> */}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <img src={require('../assets/img/laptop/phone.png')} alt="전화번호 이미지"></img>
                        <span className="user_name">{userLoggedIn.userPhoneNumber}</span>
                        {/* <span className="user_name">{userData[1]}</span> */}
                      </li>
                    </ul>
                  </div>
        
                  {/* .second_box */}
                  <div className='second_box'>
                    <ul>
                      <li>
                        <img src={require('../assets/img/laptop/user_email.png')} alt="이메일 이미지"></img>
                        <span className="user_name">{userLoggedIn.userEmail}</span>
                        {/* <span className="user_name">{userData[2]}</span> */}
                      </li>
                    </ul>
                    <ul>
                      <li className="gender_box">
                        <img src={require('../assets/img/laptop/gender.png')} alt="남자 이미지"></img>
                        <span className="user_name">{userLoggedIn.userGender}</span>
                        {/* <span className="user_name">{userData[3]}</span> */}
                      </li>
                    </ul>
                  </div>
                </form> 
              )}
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