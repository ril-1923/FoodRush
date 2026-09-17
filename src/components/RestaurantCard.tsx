import { Link } from "react-router-dom";
import type { Restaurant } from "../types";
import { RatingBadge, DietDot } from "./Atoms";
import { useFavorites } from "../context/FavoritesContext";
import { handleImgError } from "../utils/image";

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { isRestaurantFavorite, toggleRestaurantFavorite } = useFavorites();
  const fav = isRestaurantFavorite(restaurant.id);

  return (
    <div className="fr-card">
      <Link to={`/restaurant/${restaurant.id}`} aria-label={`View menu for ${restaurant.name}`}>
        <div className="fr-card-img-wrap">
          <img src={restaurant.image} alt={restaurant.name} onError={handleImgError} loading="lazy" />
          {restaurant.offer && <div className="fr-offer-ribbon">{restaurant.offer}</div>}
        </div>
      </Link>
      <button
        type="button"
        className={`fr-fav-btn ${fav ? "active" : ""}`}
        onClick={() => toggleRestaurantFavorite(restaurant.id, restaurant.name)}
        aria-label={fav ? `Remove ${restaurant.name} from favorites` : `Add ${restaurant.name} to favorites`}
        aria-pressed={fav}
      >
        <i className={`bi ${fav ? "bi-heart-fill" : "bi-heart"}`} />
      </button>
      <div className="fr-card-body">
        <Link to={`/restaurant/${restaurant.id}`}>
          <div className="d-flex justify-content-between align-items-start gap-2">
            <h3 className="h6 mb-1" style={{ fontFamily: "var(--fr-font-body)", fontWeight: 700 }}>
              {restaurant.name}
            </h3>
            <RatingBadge rating={restaurant.rating} />
          </div>
          <p className="small mb-1" style={{ color: "var(--fr-muted)" }}>
            {restaurant.cuisine.join(", ")}
          </p>
          <div className="d-flex align-items-center gap-2 small" style={{ color: "var(--fr-muted)" }}>
            <DietDot type={restaurant.dietType} />
            <span>{restaurant.deliveryTimeMins} mins</span>
            <span aria-hidden="true">•</span>
            <span>₹{restaurant.priceForTwo} for two</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
