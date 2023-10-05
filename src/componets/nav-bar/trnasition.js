import Nave from "./nav";
import yom from "./transition.css"
const Tran = ({cartItems,shut,CartHol,Beruma}) => {
     
    return ( <div className="yom">
 <Nave cartItems={cartItems.length} shut={shut} CartHol={CartHol} Beruma={Beruma}/>

    </div> );
}
 
export default Tran;