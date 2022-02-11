import React from "react";

const AuthContext = React.createContext({
  userId: "",
  isLoggedIn: false, 

  // 마이페이지
  userName: "",
  userPhoneNumber: "",
  userEmail: "",
  userGender: ""
});

export default AuthContext;

// e.g. 마이페이지에서 GET 요청으로 받아올 user 정보들 
//      {id: 83, name: '생쥐1', age: 0, gender: 'woman', email: 'sj1@gmail.com', password: 'sj1', phoneNumber: '39248092384'}