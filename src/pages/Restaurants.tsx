import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { restaurants } from "../data/restaurants";
import { foodItems } from "../data/foodItems";
import RestaurantCard from "../components/RestaurantCard";
import FilterSidebar, { DEFAULT_FILTERS, type Filters } from "../components/FilterSidebar";
import SortDropdown from "../components/SortDropdown";
import { EmptyState } from "../components/Atoms";

const CATEGORY_KEYWORDS: Record<string, string> = {
  burgers: "burger",
  pizza: "pizza",
  biryani: "biryani",
  chicken: "chicken",
  shawarma: "shawarma",
  "south-indian": "South Indian",
  "north-indian": "North Indian",
  chinese: "Chinese",
  desserts: "Desserts",
  beverages: "Beverages",
};

function matchesPrice(price: number, band: string | null) {
  if (!band) return true;
  if (band === "u200") return price < 200;
  if (band === "200-400") return price >= 200 && price <= 400;
  if (band === "400-600") return price >= 400 && price <= 600;
  if (band === "o600") return price > 600;
  return true;
}

export default function Restaurants() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const category = searchParams.get("category");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [sort, setSort] = useState("recommended");
  const [localQuery, setLocalQuery] = useState(q);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredRestaurants = useMemo(() => {
    let list = [...restaurants];

    if (category) {
      const keyword = CATEGORY_KEYWORDS[category];
      if (keyword) {
        list = list.filter((r) => {
          const cuisineMatch = r.cuisine.some((c) => c.toLowerCase() === keyword.toLowerCase());
          const foodMatch = foodItems.some(
            (f) =>
              f.restaurantId === r.id &&
              (f.name.toLowerCase().includes(keyword.toLowerCase()) ||
                f.category.toLowerCase().includes(keyword.toLowerCase()))
          );
          return cuisineMatch || foodMatch;
        });
      }
    }

    if (q.trim()) {
      const term = q.trim().toLowerCase();
      list = list.filter((r) => {
        const nameMatch = r.name.toLowerCase().includes(term);
        const cuisineMatch = r.cuisine.some((c) => c.toLowerCase().includes(term));
        const foodMatch = foodItems.some((f) => f.restaurantId === r.id && f.name.toLowerCase().includes(term));
        return nameMatch || cuisineMatch || foodMatch;
      });
    }

    if (filters.cuisine !== "All") {
      list = list.filter((r) => r.cuisine.some((c) => c.toLowerCase() === filters.cuisine.toLowerCase()));
    }
    if (filters.rating) {
      list = list.filter((r) => r.rating >= filters.rating!);
    }
    if (filters.price) {
      list = list.filter((r) => matchesPrice(r.priceForTwo, filters.price));
    }
    if (filters.deliveryTime) {
      list = list.filter((r) => r.deliveryTimeMins <= filters.deliveryTime!);
    }
    if (filters.dietary) {
      list = list.filter((r) => r.dietType === filters.dietary);
    }

    switch (sort) {
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "deliveryTime":
        list.sort((a, b) => a.deliveryTimeMins - b.deliveryTimeMins);
        break;
      case "priceLow":
        list.sort((a, b) => a.priceForTwo - b.priceForTwo);
        break;
      case "priceHigh":
        list.sort((a, b) => b.priceForTwo - a.priceForTwo);
        break;
      default:
        list.sort((a, b) => b.ratingCount - a.ratingCount);
    }

    return list;
  }, [q, category, filters, sort]);

  function clearFilters() {
    setFilters(DEFAULT_FILTERS);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("category");
      return next;
    });
  }

  function submitSearch(e: FormEvent) {
    e.preventDefault();
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (localQuery.trim()) next.set("q", localQuery.trim());
      else next.delete("q");
      return next;
    });
  }

  return (
    <div className="container-fr py-4">
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mb-4">
        <div>
          <h1 className="fr-section-title mb-0">
            {q ? `Results for "${q}"` : category ? "Filtered restaurants" : "Restaurants near you"}
          </h1>
          <p className="fr-section-sub mb-0">{filteredRestaurants.length} restaurants found</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn-fr-outline d-lg-none" type="button" onClick={() => setShowMobileFilters((s) => !s)}>
            <i className="bi bi-sliders" /> Filters
          </button>
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </div>

      <form onSubmit={submitSearch} className="mb-4 d-lg-none">
        <input
          type="search"
          className="fr-search-input w-100"
          placeholder="Search restaurants, cuisines or dishes"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
        />
      </form>

      <div className="row g-4">
        <div className={`col-lg-3 ${showMobileFilters ? "" : "d-none d-lg-block"}`}>
          <FilterSidebar filters={filters} onChange={setFilters} onClear={clearFilters} />
        </div>
        <div className="col-lg-9">
          {filteredRestaurants.length === 0 ? (
            <EmptyState
              icon="bi-emoji-frown"
              title="No results found"
              message="Try a different search term or clear your filters."
              action={
                <button className="btn-fr-primary" onClick={clearFilters}>
                  Clear filters
                </button>
              }
            />
          ) : (
            <div className="row g-4">
              {filteredRestaurants.map((r) => (
                <div className="col-6 col-md-4" key={r.id}>
                  <RestaurantCard restaurant={r} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
