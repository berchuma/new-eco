import Tran from "./componets/nav-bar/trnasition";
import PowerC from "./componets/power/powerc";
import Poster from "./componets/poster/poster";
import Mpp from "./componets/grid/app";
import BottA from "./componets/bottum1/bottum";
import BotB from "./componets/bottum2/botum";



const Front = ({product,onRemove,onAdd,cartItems,setshow}) => {

    return ( <div>
       
      <PowerC/>
      <Poster/>
      <Mpp product={product} onRemove={onRemove} onAdd={onAdd}/>
      
    </div> );
}
 
export default Front;