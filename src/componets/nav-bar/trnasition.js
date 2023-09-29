import Nave from "./nav";

const Tran = ({cartItems}) => {
    console.log(cartItems)
    return ( <div>
 <Nave cartItems={cartItems}/>

    </div> );
}
 
export default Tran;