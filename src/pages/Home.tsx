import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { restaurants } from "../data/restaurants";
import { foodItems } from "../data/foodItems";
import { coupons } from "../data/coupons";
import CategoryCard from "../components/CategoryCard";
import RestaurantCard from "../components/RestaurantCard";
import FoodCard from "../components/FoodCard";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { handleImgError } from "../utils/image";

export default function Home() {
  const { recentlyViewedIds } = useRecentlyViewed();

  const popularRestaurants = [...restaurants].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 8);
  const topRatedDishes = [...foodItems].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const recentRestaurants = recentlyViewedIds
    .map((id) => restaurants.find((r) => r.id === id))
    .filter((r): r is (typeof restaurants)[number] => Boolean(r));

  return (
    <div>
      {/* Hero */}
      <section className="fr-hero">
        <div className="container-fr">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="fr-badge mb-3">🔥 Now delivering across Tiruppur</span>
              <h1>Good food,<br />rushed to your door.</h1>
              <p className="lead">
                Order from Tiruppur's favourite kitchens — biryani, burgers, dosas and dessert, all in one place.
              </p>
              <div className="d-flex gap-3">
                <Link to="/restaurants" className="btn-fr-primary">
                  Explore restaurants
                </Link>
                <Link to="/offers" className="btn-fr-outline">
                  View offers
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fr-hero-art">
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=75"
                  alt="A vibrant spread of food ready for delivery"
                  onError={handleImgError}
                  className="w-100"
                  style={{ maxHeight: 380, objectFit: "cover" }}
                />
                <div className="fr-floating-card tl d-none d-sm-flex">
                  <i className="bi bi-stopwatch" style={{ color: "var(--fr-accent)" }} />
                  Avg. 30 min delivery
                </div>
                <div className="fr-floating-card br d-none d-sm-flex">
                  <i className="bi bi-star-fill" style={{ color: "var(--fr-gold)" }} />
                  4.5+ rated kitchens
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fr py-5">
        {/* Craving section */}
        <section className="mb-5">
          <h2 className="fr-section-title">What are you craving?</h2>
          <p className="fr-section-sub">Pick a category to jump straight to it</p>
          <div className="d-flex flex-nowrap overflow-auto gap-4 pb-2">
            {categories.map((c) => (
              <div key={c.id} style={{ flex: "0 0 auto" }}>
                <CategoryCard category={c} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular restaurants */}
        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-end">
            <div>
              <h2 className="fr-section-title">Popular restaurants near you</h2>
              <p className="fr-section-sub">Loved by hundreds of FoodRush regulars</p>
            </div>
            <Link to="/restaurants" className="btn-fr-ghost d-none d-sm-inline">
              See all <i className="bi bi-arrow-right" />
            </Link>
          </div>
          <div className="row g-4">
            {popularRestaurants.map((r) => (
              <div className="col-6 col-md-4 col-lg-3" key={r.id}>
                <RestaurantCard restaurant={r} />
              </div>
            ))}
          </div>
        </section>

        {/* Top rated dishes */}
        <section className="mb-5">
          <h2 className="fr-section-title">Top-rated dishes</h2>
          <p className="fr-section-sub">The dishes everyone keeps reordering</p>
          <div className="row g-4">
            {topRatedDishes.map((f) => {
              const r = restaurants.find((res) => res.id === f.restaurantId);
              return (
                <div className="col-6 col-md-4 col-lg-3" key={f.id}>
                  <FoodCard food={f} restaurantName={r?.name} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Special offers */}
        <section className="mb-5">
          <h2 className="fr-section-title">Special offers</h2>
          <p className="fr-section-sub">Apply these at checkout</p>
          <div className="row g-3">
            {coupons.map((c) => (
              <div className="col-md-6 col-lg-4" key={c.code}>
                <div className="fr-coupon-card d-flex align-items-center gap-3 h-100">
                  <i className="bi bi-ticket-perforated-fill fs-3" style={{ color: "var(--fr-accent)" }} />
                  <div>
                    <strong>{c.code}</strong>
                    <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recently viewed */}
        {recentRestaurants.length > 0 && (
          <section>
            <h2 className="fr-section-title">Recently viewed</h2>
            <p className="fr-section-sub">Jump back in</p>
            <div className="row g-4">
              {recentRestaurants.map((r) => (
                <div className="col-6 col-md-4 col-lg-3" key={r.id}>
                  <RestaurantCard restaurant={r} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
