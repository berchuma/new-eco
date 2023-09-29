import Nave from '../nav-bar/nav.js';
import Products from '../grid/products.js';
import data from './db/db.js';
import { useDeferredValue, useEffect, useState, useTransition } from 'react';

function Control() {
  const products = data;
  const [cartItems, setCartItems] = useState([]);/* to controle the adding and removing*/
  
  /* function to add and used in onclick with propes*/
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id); /* cheks if te item is in the cart*/
   /* x is the curent id*/
    /*and store it in exist*/
    if (exist) {
        /* the same as setcartitem(new=certitem.map()....the map is exported*/
        const newCartItems=cartItems.map((x) =>/*the orignal value of exist is 0. then  ,1,2.. */
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x/*if the privius and curent are equal
          
          addif not print the just x(curent) and map it*/
        )
      setCartItems(newCartItems);
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    } else {
      const newCartItems=[...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItems)


      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    }
  };

  /* function to remove and used in onclick with propes*/

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems=cartItems.filter((x) => x.id !== product.id);/* use fiter function this will filter(det) bec
      the id is equal (just for one item)*/

      setCartItems(newCartItems)
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    } else {
      
       const newCartItems= cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      ;
      setCartItems(newCartItems)
      localStorage.setItem('cartItems',JSON.stringify(newCartItems))
    }
  
  };

/*transporeted to main (the functions) */

const [isPendding,settrnasition]=useTransition()//settt is arow function 
/* when settran is in progres is pending is true and fter finish it is flase */
useEffect(()=>{
 settrnasition(()=> setCartItems(
  localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems')):
[]
))
},[])

const countCartItems=useDeferredValue(cartItems.length)

/* the header props is caritem length(the amount of items in object)*/
/* main will also take cartitem*/
  return isPendding ?( <div>loading...</div>):
    (<div className="App">
      <Header countCartItems={countCartItems}></Header>
      <Products  cartItems={cartItems} products={products} onAdd={onAdd}
        onRemove={onRemove}
        ></Products>
      
    </div>
  );
}

export default Control;