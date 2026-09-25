import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer">
        <Link to="/shipping">Shipping Info</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQs</Link>
      </nav>
      <p>© {new Date().getFullYear()} JRS Imports · Windhoek, Namibia</p>
    </footer>
  );
}
