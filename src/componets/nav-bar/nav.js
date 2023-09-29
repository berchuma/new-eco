import './nav.css'
const Nave = (props) => {
 
    return ( 
    <header class="top">
                <div class="divition">
                <div>
        <a href="#/">
          <h1>Menu</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.cartItems ? (
            <button className="badge">{props.cartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Page</a>
      </div>
                </div>
    </header>
);
}
 
export default Nave;