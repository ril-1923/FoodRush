import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";
import { formatCurrency } from "../utils/order";
import { EmptyState } from "../components/Atoms";
import type { Order } from "../types";

export default function OrderSuccess() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation() as { state?: { order?: Order } };
  const { getOrder } = useOrders();
  const navigate = useNavigate();

  const order = location.state?.order ?? getOrder(id ?? "");

  if (!order) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-receipt"
          title="Order not found"
          action={
            <Link to="/orders" className="btn-fr-primary">
              View your orders
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="container-fr py-5" style={{ maxWidth: 620 }}>
      <div className="text-center mb-4">
        <div
          className="d-inline-flex align-items-center justify-content-center mb-3"
          style={{ width: 76, height: 76, borderRadius: "50%", background: "var(--fr-accent-soft)" }}
        >
          <i className="bi bi-check-lg" style={{ fontSize: "2.2rem", color: "var(--fr-success)" }} />
        </div>
        <h1 className="h3">Order Confirmed! 🎉</h1>
        <p style={{ color: "var(--fr-muted)" }}>
          Order <strong>#{order.id}</strong> from {order.restaurantName} is being prepared.
        </p>
      </div>

      <div className="fr-filter-panel mb-3 text-center">
        <p className="small mb-1" style={{ color: "var(--fr-muted)" }}>
          Estimated Delivery
        </p>
        <h3 className="mb-0">{order.estimatedMins}–{order.estimatedMins + 10} minutes</h3>
      </div>

      <div className="fr-filter-panel mb-3">
        <h6 className="fw-bold mb-2">Order Details</h6>
        <ul className="list-unstyled small mb-2" style={{ color: "var(--fr-muted)" }}>
          {order.items.map((item) => (
            <li key={item.foodId} className="d-flex justify-content-between">
              <span>{item.quantity} × {item.name}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total Amount</span>
          <span>{formatCurrency(order.total)}</span>
        </div>
      </div>

      <div className="fr-filter-panel mb-4">
        <div className="row small">
          <div className="col-6">
            <p className="mb-1" style={{ color: "var(--fr-muted)" }}>Delivery Address</p>
            <p className="mb-0">{order.address.address}, {order.address.city}</p>
          </div>
          <div className="col-6">
            <p className="mb-1" style={{ color: "var(--fr-muted)" }}>Payment Method</p>
            <p className="mb-0">{order.paymentMethod}</p>
          </div>
        </div>
      </div>

      <div className="d-flex gap-3">
        <button type="button" className="btn-fr-primary flex-grow-1" onClick={() => navigate(`/track-order/${order.id}`)}>
          Track Order
        </button>
        <Link to="/" className="btn-fr-outline flex-grow-1 text-center">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
