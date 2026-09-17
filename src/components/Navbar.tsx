import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/restaurants?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className="fr-navbar">
      <div className="container-fr py-2">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="fr-logo d-flex align-items-center gap-1">
            Food<span>Rush</span>
          </Link>

          <div className="fr-location-pill d-none d-md-flex">
            <i className="bi bi-geo-alt-fill" style={{ color: "var(--fr-accent)" }} />
            <span className="text-truncate">Tiruppur, Tamil Nadu</span>
            <i className="bi bi-chevron-down small" />
          </div>

          <form onSubmit={handleSearch} className="flex-grow-1 d-none d-md-block mx-2">
            <div className="position-relative">
              <i
                className="bi bi-search position-absolute"
                style={{ left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--fr-muted)" }}
              />
              <input
                type="search"
                className="fr-search-input w-100"
                style={{ paddingLeft: 36 }}
                placeholder="Search for restaurants, cuisines or dishes"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search FoodRush"
              />
            </div>
          </form>

          <div className="d-flex align-items-center gap-2 ms-auto">
            <button
              type="button"
              className="fr-theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            >
              <i className={`bi ${theme === "light" ? "bi-moon-stars" : "bi-sun"}`} />
            </button>
            <Link to="/profile" className="fr-icon-btn d-none d-sm-inline-flex" aria-label="Login / Profile">
              <i className="bi bi-person-circle" />
            </Link>
            <Link to="/cart" className="fr-icon-btn" aria-label={`Cart with ${itemCount} items`}>
              <i className="bi bi-bag" />
              {itemCount > 0 && <span className="fr-cart-count">{itemCount}</span>}
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="d-md-none mt-2">
          <div className="position-relative">
            <i
              className="bi bi-search position-absolute"
              style={{ left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--fr-muted)" }}
            />
            <input
              type="search"
              className="fr-search-input w-100"
              style={{ paddingLeft: 36 }}
              placeholder="Search restaurants or dishes"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search FoodRush"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
