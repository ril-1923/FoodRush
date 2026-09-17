export interface Filters {
  cuisine: string;
  rating: number | null;
  price: string | null;
  deliveryTime: number | null;
  dietary: string | null;
}

export const CUISINES = ["All", "Indian", "Chinese", "Italian", "Arabian", "Fast Food", "South Indian", "North Indian"];
export const RATINGS = [4.5, 4.0, 3.5];
export const PRICE_BANDS = [
  { label: "Under ₹200", value: "u200" },
  { label: "₹200–₹400", value: "200-400" },
  { label: "₹400–₹600", value: "400-600" },
  { label: "₹600+", value: "o600" },
];
export const DELIVERY_TIMES = [30, 45, 60];
export const DIETARY = [
  { label: "Vegetarian", value: "veg" },
  { label: "Non-Vegetarian", value: "non-veg" },
  { label: "Egg", value: "egg" },
];

export const DEFAULT_FILTERS: Filters = {
  cuisine: "All",
  rating: null,
  price: null,
  deliveryTime: null,
  dietary: null,
};

export default function FilterSidebar({
  filters,
  onChange,
  onClear,
}: {
  filters: Filters;
  onChange: (f: Filters) => void;
  onClear: () => void;
}) {
  return (
    <div className="fr-filter-panel">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h6 className="mb-0 fw-bold">Filters</h6>
        <button type="button" className="btn-fr-ghost btn-sm" onClick={onClear}>
          Clear filters
        </button>
      </div>

      <div className="fr-filter-group">
        <div className="fr-filter-title">Cuisine</div>
        <div className="d-flex flex-wrap gap-2">
          {CUISINES.map((c) => (
            <button
              key={c}
              type="button"
              className={`fr-chip ${filters.cuisine === c ? "active" : ""}`}
              onClick={() => onChange({ ...filters, cuisine: c })}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="fr-filter-group">
        <div className="fr-filter-title">Rating</div>
        <div className="d-flex flex-wrap gap-2">
          {RATINGS.map((r) => (
            <button
              key={r}
              type="button"
              className={`fr-chip ${filters.rating === r ? "active" : ""}`}
              onClick={() => onChange({ ...filters, rating: filters.rating === r ? null : r })}
            >
              {r}+ <i className="bi bi-star-fill" style={{ fontSize: "0.65rem" }} />
            </button>
          ))}
        </div>
      </div>

      <div className="fr-filter-group">
        <div className="fr-filter-title">Price for two</div>
        <div className="d-flex flex-wrap gap-2">
          {PRICE_BANDS.map((p) => (
            <button
              key={p.value}
              type="button"
              className={`fr-chip ${filters.price === p.value ? "active" : ""}`}
              onClick={() => onChange({ ...filters, price: filters.price === p.value ? null : p.value })}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="fr-filter-group">
        <div className="fr-filter-title">Delivery time</div>
        <div className="d-flex flex-wrap gap-2">
          {DELIVERY_TIMES.map((t) => (
            <button
              key={t}
              type="button"
              className={`fr-chip ${filters.deliveryTime === t ? "active" : ""}`}
              onClick={() => onChange({ ...filters, deliveryTime: filters.deliveryTime === t ? null : t })}
            >
              Under {t} min
            </button>
          ))}
        </div>
      </div>

      <div className="fr-filter-group">
        <div className="fr-filter-title">Dietary</div>
        <div className="d-flex flex-wrap gap-2">
          {DIETARY.map((d) => (
            <button
              key={d.value}
              type="button"
              className={`fr-chip ${filters.dietary === d.value ? "active" : ""}`}
              onClick={() => onChange({ ...filters, dietary: filters.dietary === d.value ? null : d.value })}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
