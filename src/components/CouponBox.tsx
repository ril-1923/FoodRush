import { useState, type FormEvent } from "react";
import { useCart } from "../context/CartContext";

export default function CouponBox() {
  const { coupon, applyCoupon, removeCoupon } = useCart();
  const [code, setCode] = useState("");

  function handleApply(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    applyCoupon(code);
    setCode("");
  }

  if (coupon) {
    return (
      <div className="fr-coupon-card d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-ticket-perforated-fill" style={{ color: "var(--fr-accent)" }} />
          <div>
            <strong>{coupon.code}</strong> applied
            <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
              {coupon.description}
            </p>
          </div>
        </div>
        <button type="button" className="btn-fr-ghost" onClick={removeCoupon}>
          Remove
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleApply} className="d-flex gap-2">
      <input
        type="text"
        className="fr-search-input flex-grow-1"
        placeholder="Enter coupon code"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        aria-label="Coupon code"
      />
      <button type="submit" className="btn-fr-outline">
        Apply
      </button>
    </form>
  );
}
