import React from "react";
import stylee from './hero.module.css'
import { useEffect } from "react";
import { useState } from "react";

const Mlide = ({ item }) => {
   /* the value of the item is the same as  dicribed in (other ) with no id in front*/
   /*css propery */
  const styles = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={stylee.slide} style={styles}>
      <div className={stylee.slide_content}>
      
      </div>
    </div>
  );
};


/* this is slider porshine*/
/* the slides  is items+id 0:{}*/
const Tlide = ({ slides }) => {
    
  const [currentIndex, setCurrentIndex] = useState(0);/* this controles slide length(bultin)*/
  const [translateValue, setTranslateValue] = useState(0);/* conrole the margine value*/



  const handlseDotClick = (index) => {/* index is = to id*/

  /* this hapen when cliked*/
    setCurrentIndex(index);/*seting the id to displey */
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };


 /* this makes the code to loop bc it render with every chang in curentvalue*/
  useEffect(() => {
    let slider = setInterval(() => {
        console.log()
      if (currentIndex < slides.length - 1) {/*how much content it contens and it conens 3 value*/
        setCurrentIndex(currentIndex + 1);/* the increment*/
        setTranslateValue(-(currentIndex + 1) * 100);/* the value of transletion*/
      }
      /* if it is greter*/
      else {
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 5000);


    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div className={stylee.slider}>{/*the main cotener */}
      <div
        className={stylee.slider_wrapper}
        style={{
        
          transform: `translateX(${translateValue}%)`,
          transition: "transform ease-out 0.4s",
        }}
      >
        {slides.map((item) => {
          return <Mlide key={item.id} item={item} />;
        })}
      </div>
      {/* the dot compont*/}
      <div className={stylee.dots_wrapper}>
        {slides.map((item, index) => {
          return (
            <span
              key={item.id}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                handlseDotClick(index);
              }}
            >
              &#8226;
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Tlide;