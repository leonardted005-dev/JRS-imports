import { useState } from "react";

const items = [
  {
    q: "Where do the products come from?",
    a: "Textiles, jewelry, brass, and wood are made in India and imported by JRS. Small tech pieces are chosen to the same standard and packed with the rest of the order in Windhoek.",
  },
  {
    q: "What currency are prices in?",
    a: "Every price is in Namibian dollars (N$).",
  },
  {
    q: "How much is delivery?",
    a: "N$ 90 nationwide. Orders of N$ 800 or more include delivery.",
  },
  {
    q: "Can I change or cancel an order?",
    a: "Write to hello@jrsimports.na with your order number on the same day. Once a parcel has left Windhoek we can only help with a return.",
  },
  {
    q: "What is your return window?",
    a: "Unused items can come back within 14 days of delivery. Jewelry must be unworn, and textiles unwashed. We refund the item price once it is checked in Windhoek.",
  },
  {
    q: "Is checkout a real payment?",
    a: "This storefront confirms an order without taking a card. It is the finished shopping flow for JRS Imports, ready to connect to a payment provider later.",
  },
];

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <section className="page wrap narrow">
      <p className="eyebrow">FAQs</p>
      <h1>Questions</h1>
      <div className="faq">
        {items.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.q} className={expanded ? "open" : ""}>
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                {item.q}
                <span>{expanded ? "–" : "+"}</span>
              </button>
              {expanded && <p>{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
