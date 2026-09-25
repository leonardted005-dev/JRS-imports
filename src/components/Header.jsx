import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { categories } from "../data/products";
import { useStore } from "../context/Store";

export default function Header() {
  const { count, menuOpen, setMenuOpen } = useStore();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("nav-lock", menuOpen);
    return () => document.body.classList.remove("nav-lock");
  }, [menuOpen]);

  function onSearch(event) {
    event.preventDefault();
    const next = query.trim();
    if (!next) return;
    setMenuOpen(false);
    navigate(`/search?q=${encodeURIComponent(next)}`);
  }

  return (
    <header className="header">
      <div className="header-bar">
        <button
          className="icon-btn menu-btn"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`burger ${menuOpen ? "open" : ""}`} />
        </button>

        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">JRS</span>
          <span className="logo-sub">JRS Imports</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          {categories.map((category) => (
            <NavLink key={category.slug} to={`/category/${category.slug}`}>
              {category.name}
            </NavLink>
          ))}
          <NavLink to="/about">About Us</NavLink>
        </nav>

        <div className="header-tools">
          <form className="search" onSubmit={onSearch} role="search">
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search">
              <SearchIcon />
            </button>
          </form>
          <Link to="/account" className="icon-btn" aria-label="Account">
            <UserIcon />
          </Link>
          <Link to="/cart" className="icon-btn cart-btn" aria-label={`Cart, ${count} items`}>
            <BagIcon />
            {count > 0 && <span className="cart-count">{count}</span>}
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav">
          <form className="search mobile-search" onSubmit={onSearch} role="search">
            <input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search products"
            />
            <button type="submit" aria-label="Submit search">
              <SearchIcon />
            </button>
          </form>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          {categories.map((category) => (
            <NavLink
              key={category.slug}
              to={`/category/${category.slug}`}
              onClick={() => setMenuOpen(false)}
            >
              {category.name}
            </NavLink>
          ))}
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/shipping" onClick={() => setMenuOpen(false)}>
            Shipping Info
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
            FAQs
          </NavLink>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16.5 20 20.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c1.4-2.6 3.6-3.8 6.5-3.8s5.1 1.2 6.5 3.8" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.5h11l-.8 11h-9.4l-.8-11Z" />
      <path d="M9 8.5V7.2A3 3 0 0 1 12 4.2 3 3 0 0 1 15 7.2v1.3" />
    </svg>
  );
}
