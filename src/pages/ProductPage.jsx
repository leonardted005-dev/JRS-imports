import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatPrice, getProduct, products } from "../data/products";
import { useStore } from "../context/Store";
import ProductCard from "../components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const product = getProduct(id);
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <section className="page wrap">
        <h1>Product not found</h1>
        <Link to="/shop" className="btn btn-gold">
          Back to the shop
        </Link>
      </section>
    );
  }

  const related = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.categories.some((category) => product.categories.includes(category))
    )
    .slice(0, 3);

  return (
    <section className="page wrap">
      <p className="crumbs">
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{product.name}</span>
      </p>
      <div className="product-layout">
        <div className="product-photo">
          {product.madeInIndia && <span className="made-badge">Made in India</span>}
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price price-lg">{formatPrice(product.price)}</p>
          <p className="lede">{product.description}</p>
          <ul className="detail-list">
            {product.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className="buy-row">
            <div className="qty" aria-label="Quantity">
              <button type="button" onClick={() => setQty((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((value) => value + 1)} aria-label="Increase quantity">
                +
              </button>
            </div>
            <button type="button" className="btn btn-gold btn-lg" onClick={() => addToCart(product.id, qty)}>
              Add to cart
            </button>
          </div>
          <p className="fine">Prices in Namibian dollars. Free delivery on orders of N$ 800 and above.</p>
        </div>
      </div>
      {related.length > 0 && (
        <div className="related">
          <h2 className="section-title">You may also like</h2>
          <div className="grid grid-3">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
