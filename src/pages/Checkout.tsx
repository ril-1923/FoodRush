import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { mockAddresses } from "../data/user";
import { getFoodItem } from "../utils/pricing";
import { generateOrderId } from "../utils/order";
import { useOrders } from "../hooks/useOrders";
import { useToast } from "../context/ToastContext";
import AddressCard from "../components/AddressCard";
import PaymentMethod from "../components/PaymentMethod";
import CartSummary from "../components/CartSummary";
import { EmptyState } from "../components/Atoms";
import type { DeliveryInstruction, PaymentMethod as PaymentMethodType, Order } from "../types";

const INSTRUCTIONS: DeliveryInstruction[] = ["Leave at door", "Hand it to me", "Call on arrival"];

export default function Checkout() {
  const { lines, restaurant, totals, coupon, clearCart } = useCart();
  const { placeOrder } = useOrders();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [addressId, setAddressId] = useState(mockAddresses[0].id);
  const [instruction, setInstruction] = useState<DeliveryInstruction>("Leave at door");
  const [payment, setPayment] = useState<PaymentMethodType>("UPI");
  const [placing, setPlacing] = useState(false);

  if (lines.length === 0 || !restaurant) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-bag-x"
          title="Your cart is empty"
          message="Add a few dishes before checking out."
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Browse restaurants
            </Link>
          }
        />
      </div>
    );
  }

  const selectedAddress = mockAddresses.find((a) => a.id === addressId) ?? mockAddresses[0];

  function handlePlaceOrder() {
    setPlacing(true);
    const orderItems = lines.map((line) => {
      const food = getFoodItem(line.foodId)!;
      return { foodId: food.id, name: food.name, image: food.image, price: food.price, quantity: line.quantity };
    });

    const order: Order = {
      id: generateOrderId(),
      restaurantId: restaurant!.id,
      restaurantName: restaurant!.name,
      items: orderItems,
      itemTotal: totals.itemTotal,
      deliveryFee: totals.deliveryFee,
      platformFee: totals.platformFee,
      discount: totals.discount,
      taxes: totals.taxes,
      total: totals.total,
      address: selectedAddress,
      paymentMethod: payment,
      instruction,
      status: "Preparing",
      placedAt: new Date().toISOString(),
      estimatedMins: restaurant!.deliveryTimeMins,
    };

    window.setTimeout(() => {
      placeOrder(order);
      clearCart();
      showToast("Your order has been placed!");
      navigate(`/order-success/${order.id}`, { state: { order } });
    }, 600);
  }

  return (
    <div className="container-fr py-4">
      <h1 className="fr-section-title mb-4">Checkout</h1>
      <div className="row g-4">
        <div className="col-lg-7 d-flex flex-column gap-4">
          <div className="fr-filter-panel">
            <h6 className="fw-bold mb-3">Delivery Address</h6>
            <div className="d-flex flex-column gap-2">
              {mockAddresses.map((a) => (
                <AddressCard key={a.id} address={a} active={a.id === addressId} onSelect={() => setAddressId(a.id)} />
              ))}
            </div>
          </div>

          <div className="fr-filter-panel">
            <h6 className="fw-bold mb-3">Delivery Instructions</h6>
            <div className="d-flex flex-wrap gap-2">
              {INSTRUCTIONS.map((i) => (
                <button
                  key={i}
                  type="button"
                  className={`fr-chip ${instruction === i ? "active" : ""}`}
                  onClick={() => setInstruction(i)}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          <div className="fr-filter-panel">
            <h6 className="fw-bold mb-3">Payment Method</h6>
            <PaymentMethod selected={payment} onSelect={setPayment} />
            <p className="small mt-3 mb-0" style={{ color: "var(--fr-muted)" }}>
              <i className="bi bi-info-circle" /> This is a frontend simulation — no real payment is processed.
            </p>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="fr-filter-panel">
            <h6 className="fw-bold mb-2">{restaurant.name}</h6>
            <ul className="list-unstyled small mb-2" style={{ color: "var(--fr-muted)" }}>
              {lines.map((line) => {
                const food = getFoodItem(line.foodId);
                return (
                  <li key={line.foodId} className="d-flex justify-content-between">
                    <span>
                      {line.quantity} × {food?.name}
                    </span>
                    <span>₹{(food?.price ?? 0) * line.quantity}</span>
                  </li>
                );
              })}
            </ul>
            <hr />
            <CartSummary totals={totals} />
            {coupon && (
              <p className="small mt-2 mb-0" style={{ color: "var(--fr-success)" }}>
                <i className="bi bi-check-circle-fill" /> {coupon.code} applied
              </p>
            )}
            <button type="button" className="btn-fr-primary w-100 mt-3" disabled={placing} onClick={handlePlaceOrder}>
              {placing ? "Placing order…" : `Place Order · ₹${Math.round(totals.total)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
