import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="fr-footer">
      <div className="container-fr">
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <div className="fr-logo mb-3" style={{ color: "#fff" }}>
              Food<span>Rush</span>
            </div>
            <p className="small" style={{ color: "#a89b87" }}>
              Fresh meals from Tiruppur's favourite kitchens, delivered fast.
            </p>
          </div>
          <div className="col-6 col-md-3">
            <h6>Company</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/">About us</Link></li>
              <li><Link to="/">Careers</Link></li>
              <li><Link to="/offers">Offers</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6>For you</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><Link to="/orders">Your orders</Link></li>
              <li><Link to="/favorites">Favorites</Link></li>
              <li><Link to="/profile">Account</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6>Get help</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#help">Support</a></li>
              <li><a href="#help">Partner with us</a></li>
              <li><a href="#help">Ride with us</a></li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: "#3a2f22", margin: "32px 0 16px" }} />
        <p className="small text-center mb-0" style={{ color: "#8a7c68" }}>
          © {new Date().getFullYear()} FoodRush. Built as a portfolio project — not a real ordering service.
        </p>
      </div>
    </footer>
  );
}
