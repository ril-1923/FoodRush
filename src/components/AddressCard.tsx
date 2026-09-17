import type { Address } from "../types";

export default function AddressCard({
  address,
  active,
  onSelect,
}: {
  address: Address;
  active: boolean;
  onSelect: () => void;
}) {
  const icon = address.label === "Home" ? "bi-house-door" : address.label === "Work" ? "bi-briefcase" : "bi-geo-alt";
  return (
    <button
      type="button"
      className={`fr-select-card w-100 text-start ${active ? "active" : ""}`}
      onClick={onSelect}
      aria-pressed={active}
    >
      <div className="d-flex align-items-start gap-3">
        <i className={`bi ${icon} fs-5`} style={{ color: "var(--fr-accent)" }} />
        <div>
          <strong>{address.label}</strong>
          <p className="small mb-0 mt-1" style={{ color: "var(--fr-muted)" }}>
            {address.name} · {address.phone}
          </p>
          <p className="small mb-0" style={{ color: "var(--fr-muted)" }}>
            {address.address}, {address.city} - {address.pincode}
          </p>
        </div>
      </div>
    </button>
  );
}
