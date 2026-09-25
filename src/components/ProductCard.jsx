import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import { useStore } from "../context/Store";

export default function ProductCard({ product }) {
  const { addToCart } = useStore();

  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-media">
        {product.madeInIndia && <span className="made-badge">Made in India</span>}
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <div className="card-copy">
          <h3>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="price">{formatPrice(product.price)}</p>
        </div>
        <button type="button" className="btn btn-gold" onClick={() => addToCart(product.id)}>
          Add to cart
        </button>
      </div>
    </article>
  );
}
