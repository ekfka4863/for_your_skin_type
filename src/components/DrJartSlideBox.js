import React, {useState} from 'react';
import "../styles/src/Main.scss";
import BtnSlide from './BtnSlide';

export default function DrJartSlideBox () {

  const [slideindex, setSlideindex] = useState(1);
  // const numberRef = useRef(1);


  // useEffect(() => {
     
    //  const autoSlide = setInterval(() => {
    //    if( slideindex <= 5){
    //     setSlideindex (slideindex +1);
    //     console.log(slideindex);
    //    } else if( slideindex === 5 ){
    //      if (slideindex >= 5) {
    //        clearInterval(autoSlide);
    //      }
    //     setSlideindex(1);
    //     // autoSlide();
    //     console.log(slideindex);
    //    }
      
       
    //  }, 10000);


  // }, [slideindex]);
  
  // const testFn = () => {
  //   if (slideindex <= 5) {
  //     setSlideindex(slideindex + 1);
  //     console.log(slideindex);
  //   } else if (slideindex === 5) {
  //     setSlideindex(1);
  //     console.log(slideindex);
  //   }
  // };

  // testFn();


  const nextSlide = () => {
    if(slideindex !== 5){
        setSlideindex(slideindex + 1) 
      
    }else if(slideindex === 5){
        setSlideindex(1);

    }
  };

  const prevSlide = () => {
    if(slideindex !== 1){
      setSlideindex(slideindex - 1)
  }
  else if (slideindex === 1){
      setSlideindex(5)
  }
};

const movepage = index => {
  setSlideindex(index)
}

  return(
    <div className="slider">
    <div className='DrJart_slide' >
      {Array.from({length: 5}).map((item,index)=>{
        return(
          <div key={item} className = { slideindex === index+1 ? "slide_anim" : "slide_none"}>
              <img src={process.env.PUBLIC_URL + `/img/DrJart_slide${index+1}.png`} alt='DrJart_slide_imgs'></img>
          </div>

          
        )
    })}


    </div>
          
    <div className='Indicator'>
    <BtnSlide moveSlide={nextSlide} derection={"next"}/>
    <BtnSlide moveSlide={prevSlide} derection={"prev"}/>

    <div className="dots">
      {Array.from({length: 5}).map((item, index) => (
        <div onClick={() => movepage(index + 1)}
          className={slideindex === index + 1 ? "filldot" : "emptydot"}></div>
      ))}
    </div>
    
    </div>

  </div>

  );
  
};




