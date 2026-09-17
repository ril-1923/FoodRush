import type { CartTotals } from "../utils/pricing";

export default function CartSummary({ totals, showDiscount = true }: { totals: CartTotals; showDiscount?: boolean }) {
  return (
    <div>
      <div className="fr-summary-row">
        <span>Item Total</span>
        <span>₹{totals.itemTotal}</span>
      </div>
      <div className="fr-summary-row">
        <span>Delivery Fee</span>
        <span>{totals.deliveryFee === 0 ? "FREE" : `₹${totals.deliveryFee}`}</span>
      </div>
      <div className="fr-summary-row">
        <span>Platform Fee</span>
        <span>₹{totals.platformFee}</span>
      </div>
      {showDiscount && totals.discount > 0 && (
        <div className="fr-summary-row" style={{ color: "var(--fr-success)" }}>
          <span>Discount</span>
          <span>−₹{totals.discount}</span>
        </div>
      )}
      <div className="fr-summary-row">
        <span>Taxes</span>
        <span>₹{totals.taxes}</span>
      </div>
      <div className="fr-summary-row total">
        <span>Total</span>
        <span>₹{Math.round(totals.total)}</span>
      </div>
    </div>
  );
}
