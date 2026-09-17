export type DietType = "veg" | "non-veg" | "egg";

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  coverImage: string;
  rating: number;
  ratingCount: number;
  cuisine: string[];
  deliveryTimeMins: number;
  deliveryFee: number;
  priceForTwo: number;
  dietType: DietType;
  offer?: string;
  address: string;
  about: string;
}

export interface FoodItem {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  image: string;
  price: number;
  dietType: DietType;
  category: string;
  rating: number;
  bestseller?: boolean;
  ingredients: string[];
}

export interface CartLine {
  foodId: string;
  quantity: number;
}

export interface Address {
  id: string;
  label: "Home" | "Work" | "Other";
  name: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

export type PaymentMethod = "UPI" | "Card" | "COD" | "Wallet";
export type DeliveryInstruction = "Leave at door" | "Hand it to me" | "Call on arrival";

export type OrderStatus = "Delivered" | "Preparing" | "Cancelled" | "Out for Delivery";

export interface OrderItem {
  foodId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: OrderItem[];
  itemTotal: number;
  deliveryFee: number;
  platformFee: number;
  discount: number;
  taxes: number;
  total: number;
  address: Address;
  paymentMethod: PaymentMethod;
  instruction: DeliveryInstruction;
  status: OrderStatus;
  placedAt: string;
  estimatedMins: number;
}

export interface Coupon {
  code: string;
  description: string;
  type: "flat" | "percent" | "freedel";
  value: number;
  minOrder?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface User {
  name: string;
  email: string;
  phone: string;
  avatar: string;
}
