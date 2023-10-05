import styles from "./App.module.css";
import React, { useEffect} from "react";
import { Route, Routes } from "react-router-dom";
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
import Front from "./front";
import { BrowserRouter } from "react-router-dom";
import MId from "./second-pae/display/midel/midl";

function App() {
  const { product } = products;

  const [show, setshow] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  console.log(product);
  const onAdd = (product,zero) => {
    console.log(product);
    console.log(product);
    const exist = cartItems.find((x) => x.id === product.id);
    
    if (exist) {
      const newcartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newcartItems);
      localStorage.setItem("cartItems", JSON.stringify(newcartItems));
    } else {
      const newcartItems = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newcartItems);
      localStorage.setItem("cartItems", JSON.stringify(newcartItems));
    }
    setshow(zero)
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newcartItems = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newcartItems);
      localStorage.setItem("cartItems", JSON.stringify(newcartItems));
    } else {
      const newcartItems = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newcartItems);
      localStorage.setItem("cartItems", JSON.stringify(newcartItems));
    }
  };
  const shut = () => {
    setshow(!show);
  };
  const Beruma=()=>{
    setshow(true);
  }

  const CartHol=()=>{
    setshow(false);
  }

  useEffect(() => {
    setCartItems(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : []
    );
  }, []);
  return (
    <div className={styles.App}>
       <Tran cartItems={cartItems} shut={shut} CartHol={CartHol} Beruma={Beruma}/>
      <React.Fragment>
        {show ? (
          <Front
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            product={product}
            setshow={setshow}
            CartHol={CartHol}
            Beruma={Beruma}
          />
        ) : (
          <MId cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        )}
      </React.Fragment>
      <BottA/>
      <hr/>
      <BotB/>
    </div>
  );
}

export default App;

/*    <Tran cartItems={cartItems.length}/>
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
*/
