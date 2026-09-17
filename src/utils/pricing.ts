import type { CartLine, Coupon, Restaurant } from "../types";
import { foodItems } from "../data/foodItems";

export const PLATFORM_FEE = 10;
export const TAX_RATE = 0.05;

export interface CartTotals {
  itemTotal: number;
  deliveryFee: number;
  platformFee: number;
  discount: number;
  taxes: number;
  total: number;
}

export function getFoodItem(foodId: string) {
  return foodItems.find((f) => f.id === foodId);
}

export function computeTotals(
  lines: CartLine[],
  restaurant: Restaurant | undefined,
  coupon: Coupon | null
): CartTotals {
  const itemTotal = lines.reduce((sum, line) => {
    const food = getFoodItem(line.foodId);
    return sum + (food ? food.price * line.quantity : 0);
  }, 0);

  let deliveryFee = restaurant ? restaurant.deliveryFee : 0;
  let discount = 0;

  if (coupon && itemTotal > 0 && (!coupon.minOrder || itemTotal >= coupon.minOrder)) {
    if (coupon.type === "flat") discount = coupon.value;
    else if (coupon.type === "percent") discount = Math.min((itemTotal * coupon.value) / 100, 150);
    else if (coupon.type === "freedel") deliveryFee = 0;
  }

  const platformFee = itemTotal > 0 ? PLATFORM_FEE : 0;
  const taxableAmount = Math.max(itemTotal - discount, 0);
  const taxes = itemTotal > 0 ? Math.round(taxableAmount * TAX_RATE) : 0;
  const total = Math.max(itemTotal + deliveryFee + platformFee + taxes - discount, 0);

  return { itemTotal, deliveryFee, platformFee, discount, taxes, total };
}
