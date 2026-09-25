import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice, regions } from "../data/products";
import { useStore } from "../context/Store";

const empty = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  region: "Khomas",
  notes: "",
};

export default function CheckoutPage() {
  const { cart, subtotal, shipping, profile, placeOrder } = useStore();
  const navigate = useNavigate();
  const [form, setForm] = useState(() => ({ ...empty, ...(profile ?? {}) }));
  const [error, setError] = useState("");

  if (cart.length === 0) {
    return (
      <section className="page wrap narrow">
        <h1>Nothing to check out</h1>
        <p className="lede">Add something to your cart before placing an order.</p>
        <Link to="/shop" className="btn btn-gold">
          Shop the collection
        </Link>
      </section>
    );
  }

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.address.trim() || !form.city.trim()) {
      setError("Please complete name, email, phone, address, and city.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    const order = placeOrder({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      region: form.region,
      notes: form.notes.trim(),
    });
    navigate(`/order/${order.id}`);
  }

  return (
    <section className="page wrap">
      <h1>Checkout</h1>
      <div className="cart-layout">
        <form className="checkout-form" onSubmit={submit}>
          <p className="fine">
            This is a demonstration checkout. No payment is taken and no card details are requested.
          </p>
          {error && <p className="form-error">{error}</p>}
          <label>
            Full name
            <input name="name" value={form.name} onChange={update} autoComplete="name" />
          </label>
          <div className="split">
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
            </label>
            <label>
              Phone
              <input name="phone" value={form.phone} onChange={update} autoComplete="tel" placeholder="+264" />
            </label>
          </div>
          <label>
            Street address
            <input name="address" value={form.address} onChange={update} autoComplete="street-address" />
          </label>
          <div className="split">
            <label>
              City
              <input name="city" value={form.city} onChange={update} autoComplete="address-level2" />
            </label>
            <label>
              Region
              <select name="region" value={form.region} onChange={update}>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Delivery notes
            <textarea name="notes" value={form.notes} onChange={update} rows={3} />
          </label>
          <button className="btn btn-gold btn-lg" type="submit">
            Place order · {formatPrice(subtotal + shipping)}
          </button>
        </form>
        <aside className="summary">
          <h2>Your order</h2>
          <p>
            <span>{cart.reduce((sum, line) => sum + line.qty, 0)} items</span>
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
        </aside>
      </div>
    </section>
  );
}
