import React from "react";
import stylee from "./hero.module.css";
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
      <div className={stylee.slide_content}></div>
    </div>
  );
};


const Tlide = ({ slides }) => {
  const [currentIndex, setCurrentIndex] =
    useState(0); 
  const [translateValue, setTranslateValue] =
    useState(0); 

  const handlseDotClick = (index) => {
    /* index is = to id*/

    /* this hapen when cliked*/
    setCurrentIndex(index); /*seting the id to displey */
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 100;
      setTranslateValue(-t);
    }
  };

  
  useEffect(() => {
    let slider = setInterval(() => {
      console.log();
      if (currentIndex < slides.length - 1) {
       
        setCurrentIndex(currentIndex + 1); 
        setTranslateValue(
          -(currentIndex + 1) * 100
        ); /* the value of transletion*/
      } else {
      /* if it is greter*/
        setCurrentIndex(0);
        setTranslateValue(0);
      }
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);
  return (
    <div className={stylee.slider}>
      
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
        <span
          className="active"
          onClick={() => {
            handlseDotClick(0);
          }}
        >
          &#8226;
        </span>

        <span
          className="active"
          onClick={() => {
            handlseDotClick(1);
          }}
        >
          &#8226;
        </span>

        <span
          className="active"
          onClick={() => {
            handlseDotClick(2);
          }}
        >
          &#8226;
        </span>
        <span
          className="active"
          onClick={() => {
            handlseDotClick(3);
          }}
        >
          &#8226;
        </span>
      </div>
    </div>
  );
};

export default Tlide;
