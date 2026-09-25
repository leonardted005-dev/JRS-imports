import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../data/products";
import { useStore } from "../context/Store";

export default function AccountPage() {
  const { profile, orders, saveProfile } = useStore();
  const [form, setForm] = useState(
    profile ?? { name: "", email: "", phone: "", city: "", region: "Khomas", address: "" }
  );
  const [saved, setSaved] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSaved(false);
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    saveProfile({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      region: form.region,
      address: form.address.trim(),
    });
    setSaved(true);
  }

  return (
    <section className="page wrap">
      <p className="eyebrow">Account</p>
      <h1>{profile?.name ? `Hello, ${profile.name.split(" ")[0]}` : "Your account"}</h1>
      <div className="cart-layout">
        <form className="checkout-form" onSubmit={submit}>
          <p className="fine">Details stay on this device and fill in the next checkout.</p>
          <label>
            Name
            <input name="name" value={form.name} onChange={update} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={update} />
          </label>
          <label>
            Phone
            <input name="phone" value={form.phone} onChange={update} />
          </label>
          <label>
            Address
            <input name="address" value={form.address || ""} onChange={update} />
          </label>
          <button className="btn btn-gold" type="submit">
            Save details
          </button>
          {saved && <p className="notice">Saved.</p>}
        </form>
        <aside className="summary">
          <h2>Orders</h2>
          {orders.length === 0 && <p className="fine">No orders yet.</p>}
          <ul className="order-list">
            {orders.map((order) => (
              <li key={order.id}>
                <Link to={`/order/${order.id}`}>
                  <strong>{order.id}</strong>
                  <span>{formatPrice(order.total)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
