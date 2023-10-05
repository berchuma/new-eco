import { BsFillBagFill } from "react-icons/bs";

const Card = ({ item,product, onAdd,onRemove } ) => {
  
  
  return (
    <div className="ejfdkcjekdsfjka">
      <div className="card">
        <img src={product.img} alt={product.title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{product.title}</h3>
          <section className="card-reviews">
            {product.star} {product.star} {product.star} {product.star}
            <span className="total-reviews">{product.reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{product.prevPrice}</del> {product.newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
            
          </section>
        </div>
       
      </div>
      <div className="lala" onClick={() => onAdd(product,false)} >
              similar items
            </div>
    </div>
  );
};

export default Card;