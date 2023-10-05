import { createContext } from "react";
import products from "./componets/db/db";
import { useState } from "react";


export const ShopContext=createContext(null)


const ShopContextProvider = (props) => {
    const {product}=products

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => 
    
    {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        
       const newcartItems=cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        ;
        setCartItems(newcartItems)
        localStorage.setItem('cartItems',JSON.stringify(newcartItems))
      } else {
       const newcartItems=[...cartItems, { ...product, qty: 1 }];
       setCartItems(newcartItems)
       localStorage.setItem('cartItems',JSON.stringify(newcartItems))
      }}
   
  
      const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
         const newcartItems=cartItems.filter((x) => x.id !== product.id);
         setCartItems(newcartItems)
         localStorage.setItem('cartItems',JSON.stringify(newcartItems))
        } else {
          
           const newcartItems=cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          ;
          setCartItems(newcartItems)
          localStorage.setItem('cartItems',JSON.stringify(newcartItems))
        }
      }

    const contextProvider={
    product,
    onAdd,
    onRemove,
    cartItems
    }  
   

    return ( <ShopContext.Provider value={contextProvider}>
             {props.children}
    </ShopContext.Provider> );
}
 //react tutorial #1-e-commerce (create project)[urdu/hindi ]
export default ShopContextProvider;