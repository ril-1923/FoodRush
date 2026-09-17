import type { Order } from "../types";
import { foodItems } from "./foodItems";
import { mockAddresses } from "./user";

function toOrderItem(foodId: string, quantity: number) {
  const f = foodItems.find((i) => i.id === foodId)!;
  return { foodId: f.id, name: f.name, image: f.image, price: f.price, quantity };
}

export const seedOrders: Order[] = [
  {
    id: "FR482913",
    restaurantId: "r3",
    restaurantName: "Chennai Biryani",
    items: [toOrderItem("f11", 2), toOrderItem("f15", 1)],
    itemTotal: 567,
    deliveryFee: 20,
    platformFee: 10,
    discount: 50,
    taxes: 26,
    total: 573,
    address: mockAddresses[0],
    paymentMethod: "UPI",
    instruction: "Leave at door",
    status: "Delivered",
    placedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    estimatedMins: 40,
  },
  {
    id: "FR119274",
    restaurantId: "r1",
    restaurantName: "Burger House",
    items: [toOrderItem("f1", 2), toOrderItem("f5", 1)],
    itemTotal: 397,
    deliveryFee: 30,
    platformFee: 10,
    discount: 0,
    taxes: 20,
    total: 457,
    address: mockAddresses[0],
    paymentMethod: "Card",
    instruction: "Hand it to me",
    status: "Delivered",
    placedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toISOString(),
    estimatedMins: 28,
  },
];
