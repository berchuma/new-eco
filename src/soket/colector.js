import { useState } from 'react';
import yelem from './cilector.module.css'
const Drop = () => {
    const [vanto,setvanto]=useState(180)
    const [baby,setbaby]=useState(false)
    const dropHand=(nost)=>{
        
     if(nost===true){
        setvanto(180)
        setbaby(false)
     }
     if(nost===false){
        setvanto(0)
        setbaby(true)
     }
    }
   const style={
    transform: `translateX(${-vanto}%)`,
    transition: "transform ease-out 0.4s",
    
   }
    return ( <label>
        <input className={yelem.berger} type="text"  onClick={()=>dropHand(baby)} />
        <div className={yelem.toggle}>
        <span className={yelem.tom}></span>
        <span className={yelem.mid}></span>
        <span className={yelem.bot}></span>
    </div>
<div className={yelem.ssleid} style={style}>
    
    
    <h1 className={yelem.menu}>Menu</h1>
    <ul>
        <li className={yelem.lists}><a  className={yelem.word} href="#" onClick={()=>dropHand(true)}>YouTube</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>WhatsApp</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>comication</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>Facebook</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>TikTok</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>Instagram</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>Snapchat</a></li>
        <li className={yelem.lists}><a className={yelem.word} href="#" onClick={()=>dropHand(true)}>Pinterest</a></li>
    </ul>
</div>
    </label> );
}
 
export default Drop;