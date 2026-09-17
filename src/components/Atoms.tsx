import type { ReactNode } from "react";
import type { DietType } from "../types";

export function RatingBadge({ rating }: { rating: number }) {
  return (
    <span className="fr-rating-chip">
      <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }} />
      {rating.toFixed(1)}
    </span>
  );
}

export function DietDot({ type }: { type: DietType }) {
  const label = type === "veg" ? "Vegetarian" : type === "egg" ? "Contains egg" : "Non-vegetarian";
  return <span className={`diet-dot ${type}`} role="img" aria-label={label} title={label} />;
}

export function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
  min = 0,
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
}) {
  return (
    <div className="fr-qty">
      <button type="button" onClick={onDecrease} disabled={quantity <= min} aria-label="Decrease quantity">
        −
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={onIncrease} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
}

export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <div className="fr-spinner-wrap" role="status" aria-label={label}>
      <div className="fr-spinner" />
    </div>
  );
}

export function EmptyState({
  icon,
  title,
  message,
  action,
}: {
  icon: string;
  title: string;
  message?: string;
  action?: ReactNode;
}) {
  return (
    <div className="fr-empty">
      <i className={`bi ${icon}`} />
      <h5 className="mt-3 mb-1" style={{ color: "var(--fr-ink)" }}>
        {title}
      </h5>
      {message && <p className="mb-3">{message}</p>}
      {action}
    </div>
  );
}
