export const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "rating", label: "Rating" },
  { value: "deliveryTime", label: "Delivery Time" },
  { value: "priceLow", label: "Price: Low to High" },
  { value: "priceHigh", label: "Price: High to Low" },
];

export default function SortDropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <select
      className="form-select"
      style={{ width: "auto", borderRadius: "999px", borderColor: "var(--fr-border)" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Sort restaurants by"
    >
      {SORT_OPTIONS.map((o) => (
        <option key={o.value} value={o.value}>
          Sort by: {o.label}
        </option>
      ))}
    </select>
  );
}
