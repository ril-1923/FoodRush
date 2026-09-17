import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";
import { restaurants } from "../data/restaurants";
import OrderTimeline from "../components/OrderTimeline";
import { EmptyState } from "../components/Atoms";
import { handleImgError } from "../utils/image";

export default function OrderTracking() {
  const { id } = useParams<{ id: string }>();
  const { getOrder } = useOrders();
  const order = getOrder(id ?? "");
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (order?.status === "Delivered") {
      setStep(4);
      return;
    }
    const timer = window.setInterval(() => {
      setStep((s) => (s < 3 ? s + 1 : s));
    }, 4000);
    return () => window.clearInterval(timer);
  }, [order?.status]);

  if (!order) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-truck"
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

  const restaurant = restaurants.find((r) => r.id === order.restaurantId);

  return (
    <div className="container-fr py-4" style={{ maxWidth: 700 }}>
      <h1 className="fr-section-title mb-1">Track Order #{order.id}</h1>
      <p className="fr-section-sub">This is a frontend simulation — no real GPS tracking is used.</p>

      <div className="row g-4">
        <div className="col-md-7">
          <div className="fr-filter-panel">
            <OrderTimeline activeStep={step} />
          </div>
        </div>
        <div className="col-md-5 d-flex flex-column gap-3">
          <div className="fr-filter-panel text-center">
            <i className="bi bi-stopwatch fs-3" style={{ color: "var(--fr-accent)" }} />
            <h5 className="mt-2 mb-0">{order.estimatedMins} mins</h5>
            <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
              Estimated delivery time
            </p>
          </div>

          {restaurant && (
            <div className="fr-filter-panel d-flex align-items-center gap-3">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                onError={handleImgError}
                style={{ width: 50, height: 50, borderRadius: 10, objectFit: "cover" }}
              />
              <div>
                <strong className="d-block">{restaurant.name}</strong>
                <span className="small" style={{ color: "var(--fr-muted)" }}>
                  {order.items.length} item(s)
                </span>
              </div>
            </div>
          )}

          <div className="fr-filter-panel d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--fr-accent-soft)" }}
            >
              <i className="bi bi-person-badge" style={{ color: "var(--fr-accent)" }} />
            </div>
            <div>
              <strong className="d-block">Delivery partner</strong>
              <span className="small" style={{ color: "var(--fr-muted)" }}>
                {step >= 3 ? "On the way to you" : "Assigned shortly"}
              </span>
            </div>
          </div>

          <button type="button" className="btn-fr-outline">
            <i className="bi bi-headset" /> Help with this order
          </button>
        </div>
      </div>
    </div>
  );
}
