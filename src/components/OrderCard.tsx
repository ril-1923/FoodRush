import { Link } from "react-router-dom";
import type { Order } from "../types";
import { formatDate, formatCurrency } from "../utils/order";

const STATUS_STYLE: Record<Order["status"], { bg: string; color: string }> = {
  Delivered: { bg: "#e5f5e6", color: "#1e8e5a" },
  Preparing: { bg: "#fdf3d6", color: "#a3760a" },
  "Out for Delivery": { bg: "#e3edfb", color: "#1a5db8" },
  Cancelled: { bg: "#fce7e7", color: "#c73030" },
};

export default function OrderCard({ order, onReorder }: { order: Order; onReorder: (order: Order) => void }) {
  const style = STATUS_STYLE[order.status];
  return (
    <div className="fr-filter-panel">
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
        <div>
          <strong>{order.restaurantName}</strong>
          <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
            #{order.id} · {formatDate(order.placedAt)}
          </p>
        </div>
        <span
          className="fr-badge"
          style={{ background: style.bg, color: style.color }}
        >
          {order.status}
        </span>
      </div>

      <p className="small my-2" style={{ color: "var(--fr-muted)" }}>
        {order.items.map((i) => `${i.quantity} × ${i.name}`).join(", ")}
      </p>

      <div className="d-flex justify-content-between align-items-center">
        <strong>{formatCurrency(order.total)}</strong>
        <div className="d-flex gap-2">
          <button type="button" className="btn-fr-outline btn-sm" onClick={() => onReorder(order)}>
            Reorder
          </button>
          <Link to={`/track-order/${order.id}`} className="btn-fr-ghost btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
