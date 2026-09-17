import type { Restaurant } from "../types";
import { RatingBadge, DietDot } from "./Atoms";
import { useFavorites } from "../context/FavoritesContext";
import { handleImgError } from "../utils/image";

export default function RestaurantHeader({ restaurant }: { restaurant: Restaurant }) {
  const { isRestaurantFavorite, toggleRestaurantFavorite } = useFavorites();
  const fav = isRestaurantFavorite(restaurant.id);

  return (
    <div>
      <div style={{ height: 220, overflow: "hidden", borderRadius: "var(--fr-radius-lg)" }} className="position-relative">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          onError={handleImgError}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <button
          type="button"
          className={`fr-fav-btn ${fav ? "active" : ""}`}
          onClick={() => toggleRestaurantFavorite(restaurant.id, restaurant.name)}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={fav}
        >
          <i className={`bi ${fav ? "bi-heart-fill" : "bi-heart"}`} />
        </button>
      </div>
      <div className="mt-3">
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2">
          <div>
            <h1 className="h3 mb-1">{restaurant.name}</h1>
            <p className="mb-1" style={{ color: "var(--fr-muted)" }}>
              {restaurant.cuisine.join(", ")}
            </p>
            <div className="d-flex align-items-center gap-2 small" style={{ color: "var(--fr-muted)" }}>
              <DietDot type={restaurant.dietType} />
              <i className="bi bi-geo-alt" /> {restaurant.address}
            </div>
          </div>
          <div className="text-end">
            <RatingBadge rating={restaurant.rating} />
            <p className="small mb-0 mt-1" style={{ color: "var(--fr-muted)" }}>
              {restaurant.ratingCount.toLocaleString("en-IN")} ratings
            </p>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <div className="fr-badge">
            <i className="bi bi-stopwatch" /> {restaurant.deliveryTimeMins} mins
          </div>
          <div className="fr-badge">
            <i className="bi bi-scooter" /> ₹{restaurant.deliveryFee} delivery
          </div>
          <div className="fr-badge">
            <i className="bi bi-people" /> ₹{restaurant.priceForTwo} for two
          </div>
          {restaurant.offer && (
            <div className="fr-badge fr-badge-offer">
              <i className="bi bi-tag-fill" /> {restaurant.offer}
            </div>
          )}
        </div>

        <p className="mt-3 mb-0" style={{ color: "var(--fr-muted)", maxWidth: 620 }}>
          {restaurant.about}
        </p>
      </div>
    </div>
  );
}
