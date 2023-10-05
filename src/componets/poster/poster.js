import yes from './poster.module.css'
import  masta  from "./imag.js";
const Poster = () => {
   console.log(masta)
    return ( 
      
        <div className={yes.name}>
        <div className={yes.mar}>
            <div className={yes.first}>
            <div className={yes.ares}>Weekly Deals</div>
            <div className={yes.main}>Low price for 30 days</div>
            
        </div>
            <div className={yes.lastt}>viwe porte</div>
        </div>
        
            <div className={yes.contener}>
              {masta.map((mast)=>{
                return(<div className={yes.yom} key={mast.id}>
                <img className={yes.viwe} src={mast.img} alt='ff'></img>
                </div>)
              })}
        </div>
        </div>
     );
}
 
export default Poster;