import React,{ useState, useRef } from "react";

// styling 
import "../styles/src/SignUpSection.scss";

function SignUpSection () {
  let signUpSuccess = useRef(false);

  // sign up logic 
  const [userName, setUserName] = useState("");
  const [userGender, setUserGender] = useState("man");
  const [userEmail, setUserEmail] = useState("");
  const [userPwSignup, setUserPwSignup] = useState("");
  const [userTel, setUserTel] = useState("");

  const submitToSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/signup', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPwSignup,
          name: userName, 
          gender: userGender,
          phoneNumber: userTel
        })
      });
  
      const data = await response.json(); 

      if (typeof data === typeof 0) {
        signUpSuccess = !signUpSuccess;
        console.log(signUpSuccess);   // false ??? 이거 해결!!
        alert("가입을 축하드립니다!")
      } else {
        alert("이미 회원가입 된 아이디입니다.");
      } 
      

      // 회원가입하고 input 안에 내용들 없애주기
      const inputBoxes = [...document.querySelectorAll("input")];
      // console.log(inputBoxes);   // [input#userId, input#userPW, input, input#userName, input#userGenderMan, input#userGenderWoman, input#userEmail, input#userPw, input#userTel, input]

      console.log(inputBoxes[4].value);  // man 
      console.log(inputBoxes[5].value);  // woman

      inputBoxes.forEach((each, index) => {
        if (index >= 3 && index <= 8) {
          each.value = "";
        } 
      });
      
    } catch (error) {
      console.log("입력하신 정보를 확인해주세요.");
    }
    
  };


  return (
    <>
      <form onSubmit={submitToSignUp}>
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
              <input id="userGenderMan" type="radio" name="userGender" value="man" onChange={e => setUserGender(e.target.value)}></input>
            </div>
            <div className="woman_box">
              <label for="userGenderWoman">
                <img src={require('../assets/img/laptop/woman.png')} alt="여자 이미지"></img>
              </label>
              <input id="userGenderWoman" type="radio" name="userGender" value="woman" onChange={e => setUserGender(e.target.value)} ></input>
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
            <input id="userPw" type="password" placeholder="비밀번호" required onChange={e => setUserPwSignup(e.target.value)} maxLength={15}  autocomplete="off"></input>
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
    </>
  )
}


export default SignUpSection;