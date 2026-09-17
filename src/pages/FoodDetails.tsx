import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { foodItems } from "../data/foodItems";
import { restaurants } from "../data/restaurants";
import { DietDot, QuantitySelector, EmptyState } from "../components/Atoms";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { handleImgError } from "../utils/image";

export default function FoodDetails() {
  const { id } = useParams<{ id: string }>();
  const food = foodItems.find((f) => f.id === id);
  const restaurant = restaurants.find((r) => r.id === food?.restaurantId);
  const { addToCart } = useCart();
  const { isFoodFavorite, toggleFoodFavorite } = useFavorites();
  const [quantity, setQuantity] = useState(1);

  if (!food || !restaurant) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-egg-fried"
          title="Dish not found"
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Browse restaurants
            </Link>
          }
        />
      </div>
    );
  }

  const fav = isFoodFavorite(food.id);

  return (
    <div className="container-fr py-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div style={{ borderRadius: "var(--fr-radius-lg)", overflow: "hidden", position: "relative" }}>
            <img src={food.image} alt={food.name} onError={handleImgError} className="w-100" style={{ maxHeight: 420, objectFit: "cover" }} />
            {food.bestseller && (
              <span className="fr-badge fr-badge-bestseller position-absolute" style={{ top: 14, left: 14 }}>
                <i className="bi bi-award-fill" /> Bestseller
              </span>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <Link to={`/restaurant/${restaurant.id}`} className="small" style={{ color: "var(--fr-accent)" }}>
            {restaurant.name}
          </Link>
          <div className="d-flex align-items-center gap-2 mt-1">
            <DietDot type={food.dietType} />
            <h1 className="h3 mb-0">{food.name}</h1>
            <button
              type="button"
              className={`fr-icon-btn ms-auto ${fav ? "text-danger" : ""}`}
              onClick={() => toggleFoodFavorite(food.id, food.name)}
              aria-label={fav ? "Remove from favorites" : "Add to favorites"}
              aria-pressed={fav}
            >
              <i className={`bi ${fav ? "bi-heart-fill" : "bi-heart"}`} />
            </button>
          </div>

          <div className="d-flex align-items-center gap-3 mt-2">
            <span className="fr-rating-chip">
              <i className="bi bi-star-fill" style={{ fontSize: "0.6rem" }} /> {food.rating.toFixed(1)}
            </span>
            <strong className="fs-4">₹{food.price}</strong>
          </div>

          <p className="mt-3" style={{ color: "var(--fr-muted)" }}>
            {food.description}
          </p>

          <div className="mt-3">
            <h6 className="fw-bold">Ingredients</h6>
            <div className="d-flex flex-wrap gap-2">
              {food.ingredients.map((ing) => (
                <span key={ing} className="fr-chip">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center gap-4 mt-4">
            <QuantitySelector
              quantity={quantity}
              min={1}
              onIncrease={() => setQuantity((q) => q + 1)}
              onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
            />
            <button
              type="button"
              className="btn-fr-primary flex-grow-1"
              onClick={() => addToCart(food.id, food.restaurantId, quantity)}
            >
              Add to cart · ₹{food.price * quantity}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
