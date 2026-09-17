import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: "bi-house", label: "Home", end: true },
  { to: "/restaurants", icon: "bi-shop", label: "Restaurants" },
  { to: "/cart", icon: "bi-bag", label: "Cart" },
  { to: "/orders", icon: "bi-receipt", label: "Orders" },
  { to: "/profile", icon: "bi-person", label: "Profile" },
];

export default function BottomNav() {
  return (
    <nav className="fr-bottom-nav" aria-label="Primary mobile navigation">
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? "active" : "")}>
          <i className={`bi ${l.icon}`} />
          {l.label}
        </NavLink>
      ))}
    </nav>
  );
}
