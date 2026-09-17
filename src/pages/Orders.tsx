import { Link, useNavigate } from "react-router-dom";
import { useOrders } from "../hooks/useOrders";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import OrderCard from "../components/OrderCard";
import { EmptyState } from "../components/Atoms";
import type { Order } from "../types";

export default function Orders() {
  const { orders } = useOrders();
  const { addToCart, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  function handleReorder(order: Order) {
    clearCart();
    order.items.forEach((item) => addToCart(item.foodId, order.restaurantId, item.quantity));
    showToast(`Items from ${order.restaurantName} added to cart!`);
    navigate("/cart");
  }

  if (orders.length === 0) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-receipt"
          title="No orders yet"
          message="Your order history will show up here."
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Order something
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="container-fr py-4" style={{ maxWidth: 760 }}>
      <h1 className="fr-section-title mb-4">Your Orders</h1>
      <div className="d-flex flex-column gap-3">
        {orders.map((o) => (
          <OrderCard key={o.id} order={o} onReorder={handleReorder} />
        ))}
      </div>
    </div>
  );
}
