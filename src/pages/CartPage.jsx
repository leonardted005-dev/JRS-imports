import { Link } from "react-router-dom";
import { formatPrice, getProduct } from "../data/products";
import { useStore } from "../context/Store";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, subtotal, shipping } = useStore();
  const lines = cart
    .map((line) => ({ ...line, product: getProduct(line.id) }))
    .filter((line) => line.product);

  if (lines.length === 0) {
    return (
      <section className="page wrap narrow">
        <h1>Your cart is empty</h1>
        <p className="lede">The basket is waiting for a kurta, a pair of jhumkas, or that teal speaker.</p>
        <Link to="/shop" className="btn btn-gold">
          Shop the collection
        </Link>
      </section>
    );
  }

  return (
    <section className="page wrap">
      <h1>Cart</h1>
      <div className="cart-layout">
        <ul className="cart-lines">
          {lines.map((line) => (
            <li key={line.id}>
              <Link to={`/product/${line.product.id}`} className="line-photo">
                <img src={line.product.image} alt="" />
              </Link>
              <div className="line-copy">
                <h2>
                  <Link to={`/product/${line.product.id}`}>{line.product.name}</Link>
                </h2>
                <p>{formatPrice(line.product.price)}</p>
                <button type="button" className="text-btn" onClick={() => removeFromCart(line.id)}>
                  Remove
                </button>
              </div>
              <div className="qty">
                <button type="button" onClick={() => updateQty(line.id, line.qty - 1)} aria-label="Decrease quantity">
                  −
                </button>
                <span>{line.qty}</span>
                <button type="button" onClick={() => updateQty(line.id, line.qty + 1)} aria-label="Increase quantity">
                  +
                </button>
              </div>
              <strong>{formatPrice(line.product.price * line.qty)}</strong>
            </li>
          ))}
        </ul>
        <aside className="summary">
          <h2>Summary</h2>
          <p>
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </p>
          <p>
            <span>Delivery</span>
            <span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
          </p>
          <p className="summary-total">
            <span>Total</span>
            <span>{formatPrice(subtotal + shipping)}</span>
          </p>
          <p className="fine">
            {subtotal >= 800
              ? "This order qualifies for free delivery in Namibia."
              : `Add ${formatPrice(800 - subtotal)} more for free delivery.`}
          </p>
          <Link to="/checkout" className="btn btn-gold btn-lg">
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
