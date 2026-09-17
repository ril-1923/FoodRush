import type { CartLine } from "../types";
import { QuantitySelector } from "./Atoms";
import { useCart } from "../context/CartContext";
import { getFoodItem } from "../utils/pricing";
import { handleImgError } from "../utils/image";

export default function CartItem({ line }: { line: CartLine }) {
  const { updateQuantity, removeFromCart, restaurant } = useCart();
  const food = getFoodItem(line.foodId);
  if (!food) return null;

  return (
    <div className="fr-cart-item">
      <img src={food.image} alt={food.name} onError={handleImgError} />
      <div className="flex-grow-1">
        <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
          {restaurant?.name}
        </p>
        <h3 className="h6 mb-1">{food.name}</h3>
        <div className="d-flex align-items-center justify-content-between">
          <strong>₹{food.price * line.quantity}</strong>
          <div className="d-flex align-items-center gap-3">
            <QuantitySelector
              quantity={line.quantity}
              min={1}
              onIncrease={() => updateQuantity(food.id, line.quantity + 1)}
              onDecrease={() => updateQuantity(food.id, line.quantity - 1)}
            />
            <button
              type="button"
              className="btn-fr-ghost"
              onClick={() => removeFromCart(food.id)}
              aria-label={`Remove ${food.name} from cart`}
            >
              <i className="bi bi-trash3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
