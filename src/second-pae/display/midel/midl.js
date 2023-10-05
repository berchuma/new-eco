import { useState } from "react";
import Disp from "../disply";
import products from "../../../componets/db/db";
import "./midl.css";
import { Link } from "react-router-dom";
const MId = ({ cartItems, onAdd, onRemove }) => {
  const [mide, setMide] = useState("");
  return (
    <div className="holder">
      {cartItems.length ? (
        cartItems.map((car) => (
          <div className="sehan" key={car.news}>
            <div className="photo-holder">
              <img src={car.img} alt="product" className="image-product" />
            </div>
            <div className="second-hoder">
              <div className="top-word">{car.owner}</div>
              <div className="title-name">{car.title}</div>
              <div className="for-star"></div>
              <div className="discription-pls">{car.discription}</div>
              <section className="price-hol">
                <span className="new-price">ETB {car.newPrice}</span>
                <span className="priv-one">Prives price:{car.prevPrice}</span>
              </section>
              <div className="type-of-pro">product:{car.category}</div>
              <div className="small-image-cont">
                <img className="small-imag" src={car.img} alt="small image" />
              </div>
              <div className="last-meret">
                <button
                  className="control-buttona"
                  onClick={() => onRemove(car)}
                >
                  -
                </button>
                <span className="quntity">{car.qty}</span>

                <button className="control-buttonb" onClick={() => onAdd(car)}>
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>sorry the cart is emptily</div>
      )}

      <div className="last-over-div">
        {cartItems.length ? (
          <Link to='/log' className="submite-botton">
            <button className="in-side">Add<span className="lost"> to cart</span></button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MId;
/*  <button onClick={()=>onAdd(car)}>add</button>
            <div>{car.qty}</div>
            <div> <button onClick={()=>onRemove(car)}>minus</button></div>*/
