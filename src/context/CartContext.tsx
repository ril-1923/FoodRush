import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartLine, Coupon } from "../types";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { restaurants } from "../data/restaurants";
import { getFoodItem, computeTotals, type CartTotals } from "../utils/pricing";
import { coupons } from "../data/coupons";
import { useToast } from "./ToastContext";

interface CartState {
  restaurantId: string | null;
  lines: CartLine[];
  couponCode: string | null;
}

interface CartContextValue {
  lines: CartLine[];
  restaurantId: string | null;
  restaurant: (typeof restaurants)[number] | undefined;
  coupon: Coupon | null;
  totals: CartTotals;
  itemCount: number;
  addToCart: (foodId: string, restaurantIdForFood: string, quantity?: number) => void;
  updateQuantity: (foodId: string, quantity: number) => void;
  removeFromCart: (foodId: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => void;
  removeCoupon: () => void;
  getQuantity: (foodId: string) => number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const EMPTY_STATE: CartState = { restaurantId: null, lines: [], couponCode: null };

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(() => loadFromStorage<CartState>("cart", EMPTY_STATE));
  const { showToast } = useToast();

  useEffect(() => {
    saveToStorage("cart", state);
  }, [state]);

  const restaurant = useMemo(
    () => restaurants.find((r) => r.id === state.restaurantId),
    [state.restaurantId]
  );

  const coupon = useMemo(
    () => coupons.find((c) => c.code === state.couponCode) ?? null,
    [state.couponCode]
  );

  const totals = useMemo(() => computeTotals(state.lines, restaurant, coupon), [state.lines, restaurant, coupon]);

  const itemCount = state.lines.reduce((sum, l) => sum + l.quantity, 0);

  function addToCart(foodId: string, restaurantIdForFood: string, quantity = 1) {
    setState((prev) => {
      if (prev.restaurantId && prev.restaurantId !== restaurantIdForFood && prev.lines.length > 0) {
        showToast("Started a new cart for this restaurant", "info");
        return {
          restaurantId: restaurantIdForFood,
          lines: [{ foodId, quantity }],
          couponCode: null,
        };
      }
      const existing = prev.lines.find((l) => l.foodId === foodId);
      const lines = existing
        ? prev.lines.map((l) => (l.foodId === foodId ? { ...l, quantity: l.quantity + quantity } : l))
        : [...prev.lines, { foodId, quantity }];
      return { restaurantId: restaurantIdForFood, lines, couponCode: prev.couponCode };
    });
    showToast("Added to cart successfully!");
  }

  function updateQuantity(foodId: string, quantity: number) {
    setState((prev) => {
      if (quantity <= 0) {
        const lines = prev.lines.filter((l) => l.foodId !== foodId);
        return { ...prev, lines, restaurantId: lines.length ? prev.restaurantId : null };
      }
      return { ...prev, lines: prev.lines.map((l) => (l.foodId === foodId ? { ...l, quantity } : l)) };
    });
  }

  function removeFromCart(foodId: string) {
    setState((prev) => {
      const lines = prev.lines.filter((l) => l.foodId !== foodId);
      return { restaurantId: lines.length ? prev.restaurantId : null, lines, couponCode: lines.length ? prev.couponCode : null };
    });
    showToast("Item removed from cart", "info");
  }

  function clearCart() {
    setState(EMPTY_STATE);
  }

  function applyCoupon(code: string) {
    const found = coupons.find((c) => c.code.toLowerCase() === code.trim().toLowerCase());
    if (!found) {
      showToast("Invalid coupon code", "error");
      return;
    }
    if (found.minOrder && totals.itemTotal < found.minOrder) {
      showToast(`Add items worth ₹${found.minOrder - totals.itemTotal} more to use ${found.code}`, "error");
      return;
    }
    setState((prev) => ({ ...prev, couponCode: found.code }));
    showToast("Coupon applied!");
  }

  function removeCoupon() {
    setState((prev) => ({ ...prev, couponCode: null }));
  }

  function getQuantity(foodId: string) {
    return state.lines.find((l) => l.foodId === foodId)?.quantity ?? 0;
  }

  return (
    <CartContext.Provider
      value={{
        lines: state.lines,
        restaurantId: state.restaurantId,
        restaurant,
        coupon,
        totals,
        itemCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        applyCoupon,
        removeCoupon,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export { getFoodItem };
