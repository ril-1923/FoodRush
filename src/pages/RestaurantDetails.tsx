import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { foodItems } from "../data/foodItems";
import RestaurantHeader from "../components/RestaurantHeader";
import FoodCard from "../components/FoodCard";
import { EmptyState } from "../components/Atoms";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";

const MENU_CATEGORY_ORDER = [
  "Recommended",
  "Starters",
  "Main Course",
  "Biryani",
  "Burgers",
  "Pizza",
  "Chicken",
  "Vegetarian",
  "Desserts",
  "Beverages",
];

export default function RestaurantDetails() {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((r) => r.id === id);
  const { addRecentlyViewed } = useRecentlyViewed();
  const [activeCategory, setActiveCategory] = useState("Recommended");

  useEffect(() => {
    if (restaurant) addRecentlyViewed(restaurant.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurant?.id]);

  const menu = useMemo(() => foodItems.filter((f) => f.restaurantId === id), [id]);

  const categoriesPresent = useMemo(() => {
    const present = new Set(menu.map((f) => f.category));
    const ordered = MENU_CATEGORY_ORDER.filter((c) => present.has(c));
    return ["Recommended", ...ordered.filter((c) => c !== "Recommended")];
  }, [menu]);

  const visibleItems = useMemo(() => {
    if (activeCategory === "Recommended") {
      return [...menu].sort((a, b) => b.rating - a.rating).slice(0, 6);
    }
    return menu.filter((f) => f.category === activeCategory);
  }, [menu, activeCategory]);

  if (!restaurant) {
    return (
      <div className="container-fr py-5">
        <EmptyState
          icon="bi-shop-window"
          title="Restaurant not found"
          message="This restaurant may have been removed."
          action={
            <Link to="/restaurants" className="btn-fr-primary">
              Browse restaurants
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="container-fr py-4">
      <RestaurantHeader restaurant={restaurant} />

      <div className="mt-5">
        <h2 className="fr-section-title">Menu</h2>
        <div className="d-flex flex-nowrap overflow-auto gap-2 pb-2 mb-4">
          {categoriesPresent.map((c) => (
            <button
              key={c}
              type="button"
              className={`fr-chip ${activeCategory === c ? "active" : ""}`}
              style={{ flex: "0 0 auto" }}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {visibleItems.length === 0 ? (
          <EmptyState icon="bi-egg-fried" title="No items in this category yet" />
        ) : (
          <div className="row g-4">
            {visibleItems.map((f) => (
              <div className="col-6 col-md-4 col-lg-3" key={f.id}>
                <FoodCard food={f} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
