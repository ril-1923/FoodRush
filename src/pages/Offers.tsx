import { Link } from "react-router-dom";
import { coupons } from "../data/coupons";

export default function Offers() {
  return (
    <div className="container-fr py-4">
      <h1 className="fr-section-title mb-1">Offers for you</h1>
      <p className="fr-section-sub">Apply any of these codes on the cart page</p>

      <div className="row g-3">
        {coupons.map((c) => (
          <div className="col-md-6" key={c.code}>
            <div className="fr-coupon-card d-flex align-items-center gap-3 h-100">
              <i className="bi bi-ticket-perforated-fill fs-2" style={{ color: "var(--fr-accent)" }} />
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>{c.code}</strong>
                  {c.minOrder && (
                    <span className="small" style={{ color: "var(--fr-muted)" }}>
                      Min. order ₹{c.minOrder}
                    </span>
                  )}
                </div>
                <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
                  {c.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/restaurants" className="btn-fr-primary">
          Order now
        </Link>
      </div>
    </div>
  );
}
