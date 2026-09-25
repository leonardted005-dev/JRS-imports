import { Link, useParams } from "react-router-dom";
import { formatPrice } from "../data/products";
import { useStore } from "../context/Store";

export default function ConfirmationPage() {
  const { id } = useParams();
  const { orders } = useStore();
  const order = orders.find((item) => item.id === id);

  if (!order) {
    return (
      <section className="page wrap narrow">
        <h1>Order not found</h1>
        <p className="lede">We could not find that order on this device.</p>
        <Link to="/account" className="btn btn-gold">
          View your orders
        </Link>
      </section>
    );
  }

  const placed = new Date(order.placedAt).toLocaleString("en-NA", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section className="page wrap narrow">
      <p className="eyebrow">Order confirmed</p>
      <h1>Thank you, {order.details.name.split(" ")[0]}.</h1>
      <p className="lede">
        Order <strong>{order.id}</strong> was placed on {placed}. A confirmation would go to{" "}
        {order.details.email}. We will pack it in Windhoek and send it to {order.details.city},{" "}
        {order.details.region}.
      </p>
      <ul className="confirm-lines">
        {order.lines.map((line) => (
          <li key={line.id}>
            <img src={line.image} alt="" />
            <span>
              {line.name} × {line.qty}
            </span>
            <strong>{formatPrice(line.price * line.qty)}</strong>
          </li>
        ))}
      </ul>
      <p className="summary-total">
        <span>Total</span>
        <span>{formatPrice(order.total)}</span>
      </p>
      <Link to="/shop" className="btn btn-gold">
        Continue shopping
      </Link>
    </section>
  );
}
