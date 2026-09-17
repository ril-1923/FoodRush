import { Link } from "react-router-dom";
import { mockUser, mockAddresses } from "../data/user";
import { useFavorites } from "../context/FavoritesContext";
import { useOrders } from "../hooks/useOrders";
import { handleImgError } from "../utils/image";

export default function Profile() {
  const { favoriteRestaurants, favoriteFoods } = useFavorites();
  const { orders } = useOrders();

  return (
    <div className="container-fr py-4" style={{ maxWidth: 760 }}>
      <div className="d-flex align-items-center gap-3 mb-4">
        <img
          src={mockUser.avatar}
          alt={mockUser.name}
          onError={handleImgError}
          style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover" }}
        />
        <div>
          <h1 className="h4 mb-1">{mockUser.name}</h1>
          <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
            {mockUser.email} · {mockUser.phone}
          </p>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-4">
          <div className="fr-filter-panel text-center">
            <h4 className="mb-0">{orders.length}</h4>
            <span className="small" style={{ color: "var(--fr-muted)" }}>Orders</span>
          </div>
        </div>
        <div className="col-4">
          <div className="fr-filter-panel text-center">
            <h4 className="mb-0">{favoriteRestaurants.length}</h4>
            <span className="small" style={{ color: "var(--fr-muted)" }}>Restaurants</span>
          </div>
        </div>
        <div className="col-4">
          <div className="fr-filter-panel text-center">
            <h4 className="mb-0">{favoriteFoods.length}</h4>
            <span className="small" style={{ color: "var(--fr-muted)" }}>Dishes</span>
          </div>
        </div>
      </div>

      <div className="fr-filter-panel mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h6 className="fw-bold mb-0">Saved Addresses</h6>
        </div>
        {mockAddresses.map((a) => (
          <div key={a.id} className="d-flex justify-content-between py-2" style={{ borderBottom: "1px solid var(--fr-border)" }}>
            <div>
              <strong>{a.label}</strong>
              <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
                {a.address}, {a.city} - {a.pincode}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="fr-filter-panel mb-3">
        <h6 className="fw-bold mb-2">Payment Methods</h6>
        <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
          UPI, Cards, Wallet and Cash on Delivery are available at checkout.
        </p>
      </div>

      <div className="fr-filter-panel d-flex flex-column gap-2">
        <h6 className="fw-bold mb-1">Account</h6>
        <Link to="/orders" className="d-flex justify-content-between align-items-center py-2">
          Order history <i className="bi bi-chevron-right" />
        </Link>
        <Link to="/favorites" className="d-flex justify-content-between align-items-center py-2">
          Favorites <i className="bi bi-chevron-right" />
        </Link>
        <span className="d-flex justify-content-between align-items-center py-2" style={{ color: "var(--fr-muted)" }}>
          Account settings <i className="bi bi-chevron-right" />
        </span>
      </div>
    </div>
  );
}
