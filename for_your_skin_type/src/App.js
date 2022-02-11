import Router from "./Router";

// css
import "./styles/common/reset.css";
import "./styles/common/common.css";

// Context API
import AuthContext from "./context/auth-context";


export default function App() {
  return (
    <AuthContext.Provider 
      value={{
        userId: "",
        isLoggedIn: false,
        userName: "",
        userPhoneNumber: "",
        userEmail: "",
        userGender: ""
      }}
    >
      <Router /> 
    </AuthContext.Provider>
  );
}

// reference: https://www.freecodecamp.org/news/react-context-for-beginners/

