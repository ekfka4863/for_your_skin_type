/* api end points */  
// ====================

// POST: 로그인 할 때 필요한 api
// http://localhost:9090/login 

// POST: 로그아웃 할 때 필요한 api
// http://localhost:9090/logout

// POST: 회원가입 할 때 필요한 api
// http://localhost:9090/signup

// GET: 로그인 후 user 정보를 담은 마이페이지 api  
// http://localhost:9090/mypage


// ====================
// GET: 로그인을 완료한 회원이 장바구니에 갔을 때, 아이템을 보여주게 하는 api   
// http://localhost:9090/items/favorites 

// POST: 장바구니 버튼을 클릭하면 -> user의 "이메일"을 POST 한다 -> 상품을 api에 추가한다 
// http://localhost:9090/items/favoritesAdd 

// POST: 장바구니 버튼을 다시 클릭하면 -> user의 "이메일"을  POST 한다 -> 상품을 api에서 제거한다 
// http://localhost:9090/items/favoritesDelete 


// ====================
// GET: 브랜드별 상품 display할 때 사용하는 api
// http://localhost:9090/items/drjart
// http://localhost:9090/items/innisfree
// http://localhost:9090/items/sidmool
// http://localhost:9090/items/beplain


// ====================
// 스킨타입 테스트를 하고 나온 결과값을 보낸 뒤, 그에 따른 상품들을 display 할 때 사용하는 api  
// http://localhost:9090/items/skintype
