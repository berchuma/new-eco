import './nav.css'
import Drop from '../../soket/colector';

const Nave = (props) => {
  
    return ( 
    <header class="top">
                <div class="divition">
                <div>
        <Drop/>
      </div>
      <div className='nav-left-side'>
        <span >
          <span className='nav-home' onClick={props.Beruma}>Home</span>
          {props.cartItems ? (
            <button  className="badge" onClick={props.shut}>{props.cartItems}</button>
          ) : (
            ''
          )}
        </span>{' '}
        <span className='nav-cart' onClick={props.CartHol}> Cart</span>
      </div>
                </div>
    </header>
);
}
 
export default Nave;