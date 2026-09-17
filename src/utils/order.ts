export function generateOrderId(): string {
  const num = Math.floor(100000 + Math.random() * 899999);
  return `FR${num}`;
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function formatCurrency(n: number): string {
  return `₹${Math.round(n)}`;
}
