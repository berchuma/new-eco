import React from "react";
import styl from './side.module.css'
import { useEffect } from "react";
import { useState } from "react";

const Slide = ({ item}) => {
   /* the value of the item is the same as  dicribed in (other ) with no id in front*/
   /*css propery */
   const styles = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
 

  return (<>
  
    <div className={styl.slide} style={styles}>

      <div className={styl.slide_content}>
        
      </div>
    </div>
    </>
  );
};


/* this is slider porshine*/
/* the slides  is items+id 0:{}*/
const Slider = ({ slides}) => {
  
    
  const [one, two] = useState(0);/* this controles slide length(bultin)*/
  const [ande, hulet] = useState(0);/* conrole the margine value*/



  const handlseDotClick = (index) => {/* index is = to id*/

  /* this hapen when cliked*/
    hulet(index);/*seting the id to displey */
    if (index === 0) {
      hulet(0);
    } else {
      let t = index * 100;
      hulet(-t);
    }
  };


 /* this makes the code to loop bc it render with every chang in curentvalue*/
  useEffect(() => {
    let slider = setInterval(() => {
        console.log()
      if (one < 3) {/*how much content it contens and it conens 3 value*/
        two(one + 1);/* the increment*/
        hulet(-(one + 1) * 100);/* the value of transletion*/
      }
      /* if it is greter*/
      else {
        two(0);
       hulet(0);
      }
    }, 5000);


    return () => {
      clearInterval(slider);
    };
  }, [one]);
  return (
    <div className={styl.man}>

    <div className={styl.slider}>{/*the main cotener */}


      

    <div className={styl.lead}>Welcome to Vastoll</div>
    <div className={styl.niv}>get items at 70% off</div>
    
      <div
        className={styl.slider_wrapper}
        style={{
        
          transform: `translateX(${ande}%)`,
          transition: "transform ease-out 0.4s",
        }}
      >
        {slides.map((item) => {
          return <Slide key={item.id} item={item} />;
        })}
      </div>
      {/* the dot compont*/}
      <div className={styl.dots_wrapper}>
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
    </div>
  );
};

export default Slider;