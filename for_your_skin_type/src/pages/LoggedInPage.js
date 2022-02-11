import { Link } from "react-router-dom";

// 공통 components
import Header from "../components/Header";
import Footer from "../components/Footer";

// styling 
import "../styles/src/LoggedInPage.scss";

// img 
import cart from "../assets/img/tablet/cart.png";
import myPage from "../assets/img/tablet/myPage.png";
import go_to_test_btn from "../assets/img/laptop/go_to_test_btn.png";


// when logged in - show different component/page 
function LoggedInPage () {
  return (
    <>
    <Header />
    
    <div id="LoggedInBox">
      <div className="logged_in">
        <span className="user_id_logged_in">{localStorage.getItem("authenticatedId")} </span>
        고객님, 로그인에 성공하셨습니다! <br />
        스킨 타입 테스트 및 장바구니 서비스를 이용해보세요!
        <ul>
          <li>
            <Link to="/skin-type-test">
              <img src={go_to_test_btn} alt="스킨 타입 테스트 바로가기 이미지 버튼" />
            </Link>
          </li>
          <li>
            <Link to="/my-cart">
              <img src={cart} alt="장바구니 바로가기 이미지 버튼" />
            </Link>
          </li>
          <li>
            <Link to="/my-page">
              <img src={myPage} alt="마이페이지 바로가기 이미지 버튼" />
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default LoggedInPage;