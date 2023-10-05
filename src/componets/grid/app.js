
import { useState } from "react";
 /* this is the same as data(no problem swiching name)*/
import products from "../db/db.js";
import Products from "./products.js";
import Card from "./card";
import Nave from "../nav-bar/nav.js";
import Tran from "../nav-bar/trnasition.js";


function Mpp({product,onAdd,onRemove}) {

 //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv


 //cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc


  /*main function that accept product(data),selected(b.inp)
  quert the current value(that the user selected)*/


    

     /* calling the function*/
/* and the resalt is stored in reslt*/

  return (
    <>
     
      <Products product={product}  onAdd={onAdd} onRemove={onRemove}/>
    </>
  );
}

export default Mpp;