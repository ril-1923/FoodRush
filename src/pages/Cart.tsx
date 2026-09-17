import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import CouponBox from "../components/CouponBox";
import { EmptyState } from "../components/Atoms";

export default function Cart() {
  const { lines, restaurant, totals, clearCart } = useCart();
  const navigate = useNavigate();

  if (lines.length === 0) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-bag-x"
          title="Your cart is empty"
          message="Looks like you haven't added anything yet. Let's fix that."
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Browse restaurants
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="container-fr py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fr-section-title mb-0">Your Cart</h1>
        <button type="button" className="btn-fr-ghost" onClick={clearCart}>
          <i className="bi bi-trash3" /> Clear cart
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="fr-filter-panel">
            {restaurant && (
              <div className="d-flex align-items-center gap-2 mb-2 pb-2" style={{ borderBottom: "1px solid var(--fr-border)" }}>
                <i className="bi bi-shop" style={{ color: "var(--fr-accent)" }} />
                <strong>{restaurant.name}</strong>
              </div>
            )}
            {lines.map((line) => (
              <CartItem key={line.foodId} line={line} />
            ))}
          </div>
        </div>

        <div className="col-lg-5">
          <div className="fr-filter-panel mb-3">
            <h6 className="fw-bold mb-3">Apply coupon</h6>
            <CouponBox />
          </div>
          <div className="fr-filter-panel">
            <h6 className="fw-bold mb-2">Order Summary</h6>
            <CartSummary totals={totals} />
            <button type="button" className="btn-fr-primary w-100 mt-3" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
