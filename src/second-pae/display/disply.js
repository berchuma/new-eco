import lead from './display.module.css'


const Disp = ({cartItems,onAdd,onRemove}) => { 
  
console.log(cartItems.id)
    return ( 
    <section className={lead.container}>
 
      
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.length !== 0 &&  

<div key={cartItems.kk}>
    <div className={lead.content}>
        <img
        src={cartItems.img}
        alt="Hero image of me"
        className={lead.heroImg}
      />
    </div>
    <div className={lead.second}>
        <div className={lead.one}>VENDOR - sukify</div>
        <div className={lead.one}>Nike</div>
        <div className={lead.one}>stare</div>
        <div className={lead.two}>sexty dres for sexy time</div>
        
        <div className={lead.sost}>{cartItems.newPrice}<span className={lead.privprice}>{cartItems.star}</span></div>
        <hr/>
       <div className={lead.prod}>producte:<span className={lead.cat}>{cartItems.category}</span></div>
       <div className={lead.simg}>{cartItems.img}</div>

     <div>
     <button onClick={() => onRemove(cartItems)} className={lead.remove}>
                -
              </button>{' '}
 
            <span className={lead.paly}>{cartItems.length}</span>

              <button onClick={() => onAdd(cartItems)} className={lead.add}>
                +
              </button>
     </div>

       <div><button className={lead.sub}><div className={lead.textt}>Add to cart</div></button></div>
    </div>
</div>
}
    
    
  </section> );
}
 
export default Disp;