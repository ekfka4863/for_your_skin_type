import React, { useRef, useEffect, useState } from "react";
import "../styles/src/Slider.scss";


function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
      savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
      function tick() {
          savedCallback.current();
      }
      if (delay !== null) {
          let id = setInterval(tick, delay);
          return () => clearInterval(id);
      }
  }, [delay]);
}

function Slider() {
  const [direction, setDirection] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides_drjart = [
    'https://i.pinimg.com/originals/d0/56/09/d056094361950c94b9bf7802632119bf.jpg', 
    'https://edited.beautybay.com/wp-content/uploads/2019/06/EDITED_CERAMIDES_HEADER-scaled.jpg', 
    'https://www.drjart.co.uk/media/export/cms/navigation/Bestsellers-ceramidin.jpg', 
    'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/sites/6/2021/01/04164457/BestSellers_1440x.jpg', 
    'https://www.yesstyle.com/blog/wp-content/uploads/2019/03/drjart_2L.png'
  ];
  const slides_innisfree = [
    'https://www.earlyadopter.co.kr/wp-content/uploads/2019/07/innisfree-x-jejubeer_002.jpg', 
    'https://images.innisfree.co.kr/kr/ko/upload/pdtDetail/skinCare/perfact9repair/common01.jpg', 
    'https://images.innisfree.co.kr/kr/ko/upload/pdtDetail/skinCare/appleSeed/commonBottom.jpg', 
    'https://usercontents-d.styleshare.io/images/5d2a35ff-050f-4a2f-8e63-7da5a307486c/1920x1080', 
    'https://cosmorning.com/data/photos/uploads/2018/05/%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9E%90%EB%A3%8C-%EC%9D%B4%EB%8B%88%EC%8A%A4%ED%94%84%EB%A6%AC-%EB%A7%88%EC%9D%B4-%ED%8D%BC%ED%93%B8%EB%93%9C-%EB%B0%94%EB%94%94-%EB%9D%BC%EC%9D%B8-%EC%B6%9C%EC%8B%9C_1.jpg'
  ];
  const slides_sidmool = [
    'https://cdn.notefolio.net/img/bf/b0/bfb0e4ce610217820869acfcf47fbf4733c70b28bd972d896b55e7df49691d1b_v1.jpg', 
    'https://cdn.notefolio.net/img/fe/d0/fed00e75baba1a2c6829c216c75962c937c779faffc0e5b5c29b7db69a32b85a_v1.jpg', 
    'https://t1.daumcdn.net/cfile/tistory/99969E3E5ADC98E82B', 
    'https://cdn.notefolio.net/img/bf/b0/bfb0e4ce610217820869acfcf47fbf4733c70b28bd972d896b55e7df49691d1b_v1.jpg', 
    'https://cdn.notefolio.net/img/fe/d0/fed00e75baba1a2c6829c216c75962c937c779faffc0e5b5c29b7db69a32b85a_v1.jpg' 
  ];
  const slides_beplain = [
    'https://image.msscdn.net/images/brand_event/2020072114030500000078634.jpg', 
    'https://image.msscdn.net/images/brand_event/2020072114030500000082143.jpg', 
    'https://www.beplain.co.kr/data/board/upload/Article/9ad21c7743a6db67',
    'https://static.coupangcdn.com/image/retail/images/58112754706449-9e31f057-9188-4d28-b9f0-d23398329142.jpg', 
    'https://img.allurekorea.com/allure/2019/11/style_5dbf83cf3504b.jpg'
    // 'https://i.ytimg.com/vi/KFQpeaOp8To/maxresdefault.jpg'
  ];

  const handleSwipe = (direction) => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex => currentIndex + direction);
    } 
  };

  
  const activateIndicator = () => {
    const indicatorWrapper  = document.querySelectorAll('.indicator');
    // console.log(indicatorWrapper);
    
    [...indicatorWrapper].forEach(
      (each) => {
        const currIndicator = [...each.children];
        currIndicator[currentIndex].classList.add('active');
        // console.log(currentIndex);
    
        if (currentIndex === 0) {
          currIndicator[currentIndex+1].classList.remove('active');
          currIndicator[4].classList.remove('active');
        } else if (currentIndex > 0 && currentIndex < 4) {
          currIndicator[currentIndex-1].classList.remove('active');
          currIndicator[currentIndex+1].classList.remove('active');
        } else {
          currIndicator[currentIndex-1].classList.remove('active');
        }
      }
    );
  };


  useInterval(() => {
    handleSwipe(direction);
    activateIndicator();
  }, 4000)


  return (
    <>
      {/* 슬라이더 1 */}
      <div className="slider_area">
        <div className="slider">
          <div 
            className="slider_list"
            style={{transform: `translateX(${(-100 / slides_drjart.length) * (0 + currentIndex)}%)`}}
          >
            {
              slides_drjart.map((img, index) =>
                <>
                  <div key={index} className="slider_item" >
                    <div style={{ backgroundImage: "url(" + `${img}` + ")" }}></div>
                  </div>
                </>
              )
            }
            <div className="slider_item_bg"></div>
          </div>
        </div >
        <div className="slide_btn_area">
          <div className="indicator">
            {
              slides_drjart.map((slide, idx) => 
                <span></span>
              )
            }
          </div>
        </div>
      </div >

      {/* 슬라이더 2 */}
      <div className="slider_area">
        <div className="slider">
          <div 
            className="slider_list"
            style={{transform: `translateX(${(-100 / slides_innisfree.length) * (0 + currentIndex)}%)`}}
          >
            {
              slides_innisfree.map((img, index) =>
                <>
                  <div key={index} className="slider_item" >
                    <div style={{ backgroundImage: "url(" + `${img}` + ")" }}></div>
                  </div>
                </>
              )
            }
            <div className="slider_item_bg"></div>
          </div>
        </div >
        <div className="slide_btn_area">
          <div className="indicator">
            {
              slides_innisfree.map((slide, idx) => 
                <span></span>
              )
            }
          </div>
        </div>
      </div >

      {/* 슬라이더 3 */}
      <div className="slider_area">
        <div className="slider">
          <div 
            className="slider_list"
            style={{transform: `translateX(${(-100 / slides_sidmool.length) * (0 + currentIndex)}%)`}}
          >
            {
              slides_sidmool.map((img, index) =>
                <>
                  <div key={index} className="slider_item" >
                    <div style={{ backgroundImage: "url(" + `${img}` + ")" }}></div>
                  </div>
                </>
              )
            }
            <div className="slider_item_bg"></div>
          </div>
        </div >
        <div className="slide_btn_area">
          <div className="indicator">
            {
              slides_sidmool.map((slide, idx) => 
                <span></span>
              )
            }
          </div>
        </div>
      </div >

      {/* 슬라이더 4 */}
      <div className="slider_area">
        <div className="slider">
          <div 
            className="slider_list"
            style={{transform: `translateX(${(-100 / slides_beplain.length) * (0 + currentIndex)}%)`}}
          >
            {
              slides_beplain.map((img, index) =>
                <>
                  <div key={index} className="slider_item" >
                    <div style={{ backgroundImage: "url(" + `${img}` + ")" }}></div>
                  </div>
                </>
              )
            }
            <div className="slider_item_bg"></div>
          </div>
        </div >
        <div className="slide_btn_area">
          <div className="indicator">
            {
              slides_beplain.map((slide, idx) => 
                <span></span>
              )
            }
          </div>
        </div>
      </div >
    </>
  )
}


export default Slider;

// reference:  https://velog.io/@yeyo0x0/React-%EB%AC%B4%ED%95%9C-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0-infinite-carousel
// https://krpeppermint100.medium.com/js-react-hooks%EB%A1%9C-carousel-slider-%EB%A7%8C%EB%93%A4%EA%B8%B0-2e558151bbee
// https://popawaw.tistory.com/260
// https://from2020.tistory.com/28