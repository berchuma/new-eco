import styles from "./App.module.css";
import React from "react";
import { Route,Routes } from "react-router-dom";
//import PowerA from "./componets/power/power";
//import PowerB from "./componets/power/powerb";
import PowerC from "./componets/power/powerc";
import Nave from "./componets/nav-bar/nav";
import Poster from "./componets/poster/poster";
import { masta } from "./componets/poster/imag.js";
import Mpp from "./componets/grid/app";
import BottA from "./componets/bottum1/bottum";
import Tran from "./componets/nav-bar/trnasition";
import BotB from "./componets/bottum2/botum";
import { useState } from "react";
import products from "./componets/db/db";
import Disp from "./second-pae/display/disply";

function App() {
  const { product } = products;
 const [cartItems, setCartItems] = useState([]);
 console.log(product)
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };



  
  return (
    <div className={styles.App}>
      <Tran cartItems={cartItems.length}/>
      <PowerC/>
      <Poster mast={masta}/>
      <Mpp  product={product}  onAdd={onAdd} onRemove={onRemove}/>
      <BottA/>
      <hr/>
      <BotB/>

            <Routes>
              <Route path="/new" element={<Disp cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}/>}/> {}
              
            </Routes>

    </div>
  );
}

export default App;

