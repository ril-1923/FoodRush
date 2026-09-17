import { Link } from "react-router-dom";
import type { FoodItem } from "../types";
import { DietDot, QuantitySelector } from "./Atoms";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { handleImgError } from "../utils/image";

export default function FoodCard({ food, restaurantName }: { food: FoodItem; restaurantName?: string }) {
  const { addToCart, updateQuantity, getQuantity } = useCart();
  const { isFoodFavorite, toggleFoodFavorite } = useFavorites();
  const qty = getQuantity(food.id);
  const fav = isFoodFavorite(food.id);

  return (
    <div className="fr-card">
      <Link to={`/food/${food.id}`} aria-label={`View details for ${food.name}`}>
        <div className="fr-card-img-wrap">
          <img src={food.image} alt={food.name} onError={handleImgError} loading="lazy" />
          {food.bestseller && (
            <span className="fr-badge fr-badge-bestseller position-absolute" style={{ top: 10, left: 10 }}>
              <i className="bi bi-award-fill" /> Bestseller
            </span>
          )}
        </div>
      </Link>
      <button
        type="button"
        className={`fr-fav-btn ${fav ? "active" : ""}`}
        onClick={() => toggleFoodFavorite(food.id, food.name)}
        aria-label={fav ? `Remove ${food.name} from favorites` : `Add ${food.name} to favorites`}
        aria-pressed={fav}
      >
        <i className={`bi ${fav ? "bi-heart-fill" : "bi-heart"}`} />
      </button>
      <div className="fr-card-body">
        <div className="d-flex align-items-center gap-2 mb-1">
          <DietDot type={food.dietType} />
          <Link to={`/food/${food.id}`} className="h6 mb-0 text-truncate" style={{ fontWeight: 700 }}>
            {food.name}
          </Link>
        </div>
        {restaurantName && (
          <p className="small mb-1" style={{ color: "var(--fr-muted)" }}>
            {restaurantName}
          </p>
        )}
        <p className="small mb-2 text-truncate" style={{ color: "var(--fr-muted)" }}>
          {food.description}
        </p>
        <div className="d-flex align-items-center justify-content-between">
          <strong>₹{food.price}</strong>
          {qty === 0 ? (
            <button type="button" className="btn-fr-primary btn-sm" onClick={() => addToCart(food.id, food.restaurantId)}>
              Add
            </button>
          ) : (
            <QuantitySelector
              quantity={qty}
              onIncrease={() => addToCart(food.id, food.restaurantId)}
              onDecrease={() => updateQuantity(food.id, qty - 1)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
