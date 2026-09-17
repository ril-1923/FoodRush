import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { restaurants } from "../data/restaurants";
import { foodItems } from "../data/foodItems";
import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";
import { EmptyState } from "../components/Atoms";

export default function Favorites() {
  const { favoriteRestaurants, favoriteFoods } = useFavorites();
  const [tab, setTab] = useState<"restaurants" | "foods">("restaurants");

  const favRestaurants = restaurants.filter((r) => favoriteRestaurants.includes(r.id));
  const favFoods = foodItems.filter((f) => favoriteFoods.includes(f.id));

  const isEmpty = tab === "restaurants" ? favRestaurants.length === 0 : favFoods.length === 0;

  return (
    <div className="container-fr py-4">
      <h1 className="fr-section-title mb-1">Favorites</h1>
      <p className="fr-section-sub">Restaurants and dishes you've hearted</p>

      <div className="d-flex gap-2 mb-4">
        <button type="button" className={`fr-chip ${tab === "restaurants" ? "active" : ""}`} onClick={() => setTab("restaurants")}>
          Restaurants ({favRestaurants.length})
        </button>
        <button type="button" className={`fr-chip ${tab === "foods" ? "active" : ""}`} onClick={() => setTab("foods")}>
          Dishes ({favFoods.length})
        </button>
      </div>

      {isEmpty ? (
        <EmptyState
          icon="bi-heart"
          title={`No favorite ${tab} yet`}
          message="Tap the heart icon on any card to save it here."
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Browse restaurants
            </Link>
          }
        />
      ) : (
        <div className="row g-4">
          {tab === "restaurants"
            ? favRestaurants.map((r) => (
                <div className="col-6 col-md-4 col-lg-3" key={r.id}>
                  <RestaurantCard restaurant={r} />
                </div>
              ))
            : favFoods.map((f) => {
                const r = restaurants.find((res) => res.id === f.restaurantId);
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={f.id}>
                    <FoodCard food={f} restaurantName={r?.name} />
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}
