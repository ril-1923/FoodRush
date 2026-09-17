import type { Coupon } from "../types";

export const coupons: Coupon[] = [
  { code: "FOOD50", description: "Flat ₹50 off on orders above ₹200", type: "flat", value: 50, minOrder: 200 },
  { code: "WELCOME100", description: "Flat ₹100 off on your order", type: "flat", value: 100, minOrder: 350 },
  { code: "SAVE20", description: "20% off up to ₹120", type: "percent", value: 20, minOrder: 150 },
  { code: "FREEDEL", description: "Free delivery on this order", type: "freedel", value: 0 },
  { code: "BIG30", description: "30% off up to ₹150 on orders above ₹500", type: "percent", value: 30, minOrder: 500 },
];
