import { useCallback, useEffect, useState } from "react";
import type { Order } from "../types";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { seedOrders } from "../data/seedOrders";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>(() => loadFromStorage<Order[]>("orders", seedOrders));

  useEffect(() => {
    saveToStorage("orders", orders);
  }, [orders]);

  const placeOrder = useCallback((order: Order) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const getOrder = useCallback((id: string) => orders.find((o) => o.id === id), [orders]);

  return { orders, placeOrder, getOrder };
}
