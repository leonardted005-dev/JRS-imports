import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please add your name, email, and a message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Enter a valid email address.");
      return;
    }
    const notes = JSON.parse(localStorage.getItem("jrs-messages") || "[]");
    notes.unshift({ ...form, at: new Date().toISOString() });
    localStorage.setItem("jrs-messages", JSON.stringify(notes.slice(0, 20)));
    setSent(true);
  }

  return (
    <section className="page wrap narrow">
      <p className="eyebrow">Contact</p>
      <h1>Write to us</h1>
      <p className="lede">
        JRS Imports, Windhoek. Email hello@jrsimports.na or use the form. We reply on working days.
      </p>
      {sent ? (
        <p className="notice">Thank you, {form.name.split(" ")[0]}. Your message is saved on this device and our desk will pick it up.</p>
      ) : (
        <form className="checkout-form" onSubmit={submit}>
          {error && <p className="form-error">{error}</p>}
          <label>
            Name
            <input name="name" value={form.name} onChange={update} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={update} />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} value={form.message} onChange={update} />
          </label>
          <button className="btn btn-gold" type="submit">
            Send message
          </button>
        </form>
      )}
    </section>
  );
}
