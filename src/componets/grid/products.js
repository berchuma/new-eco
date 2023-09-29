import "./products.css";
import Card from "./card";
const Products = ({ product,onAdd,onRemove }) => {
  return (
    <>
      <section className="card-container">
      {product.map((product) => (
          <Card key={product.id} product={product} onAdd={onAdd}
          onRemove={onRemove}></Card>
        ))}
        </section>{/* the is no crard b/c we pass result
      (which have cared)
      with the filter funtions*/}
    </>
  );
};

export default Products;