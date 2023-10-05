import React from "react";
import style from "./midle.module.css";
import { useEffect } from "react";
import { useState } from "react";

const Klide = ({ item }) => {
  /* the value of the item is the same as  dicribed in (other ) with no id in front*/
  /*css propery */

  const styles = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className={style.slide} style={styles}>
      <div className={style.slide_content}></div>
    </div>
  );
};

/* this is slider porshine*/
/* the slides  is items+id 0:{}*/
const Blide = ({ slides }) => {
  const [currentIndex, setCurrentIndex] =
    useState(0); /* this controles slide length(bultin)*/
  const [translateValue, setTranslateValue] =
    useState(0); /* conrole the margine value*/

  const handlseDotClick = (index) => {
    /* index is = to id*/

    /* this hapen when cliked*/
    setCurrentIndex(index); /*seting the id to displey */
    if (index === 0) {
      setTranslateValue(0);
    } else {
      let t = index * 130;
      setTranslateValue(-t);
    }
  };

  /* this makes the code to loop bc it render with every chang in curentvalue*/
  useEffect(() => {
    let slider = setInterval(() => {
      console.log();
      if (currentIndex < 2) {
        /*how much content it contens and it conens 3 value*/
        setCurrentIndex(currentIndex + 1); /* the increment*/
        setTranslateValue(
          -(currentIndex + 1) * 140
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
    <div className={style.mike}>
      <div className={style.slider}>
        {/*the main cotener */}

        <div className={style.lead}>SuperDeals</div>
        <div className={style.niv}>Top Products. Incredible prices</div>
        <div className={style.zero}>ETB 204.63</div>
        <div
          className={style.slider_wrapper}
          style={{
            transform: `translateX(${translateValue}%)`,
            transition: "transform ease-out 0.4s",
          }}
        >
          {slides.map((item) => {
            return <Klide key={item.id} item={item} />;
          })}
        </div>
        {/* the dot compont*/}
        <div className={style.dots_wrapper}>
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
        </div>
      </div>
    </div>
  );
};

export default Blide;
