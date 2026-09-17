import type { PaymentMethod as PaymentMethodType } from "../types";

const METHODS: { value: PaymentMethodType; label: string; icon: string }[] = [
  { value: "UPI", label: "UPI", icon: "bi-qr-code" },
  { value: "Card", label: "Credit / Debit Card", icon: "bi-credit-card" },
  { value: "COD", label: "Cash on Delivery", icon: "bi-cash-coin" },
  { value: "Wallet", label: "Wallet", icon: "bi-wallet2" },
];

export default function PaymentMethod({
  selected,
  onSelect,
}: {
  selected: PaymentMethodType;
  onSelect: (m: PaymentMethodType) => void;
}) {
  return (
    <div className="row g-2">
      {METHODS.map((m) => (
        <div className="col-6" key={m.value}>
          <button
            type="button"
            className={`fr-select-card w-100 text-start d-flex align-items-center gap-2 ${
              selected === m.value ? "active" : ""
            }`}
            onClick={() => onSelect(m.value)}
            aria-pressed={selected === m.value}
          >
            <i className={`bi ${m.icon}`} style={{ color: "var(--fr-accent)" }} />
            <span className="small fw-semibold">{m.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
}
