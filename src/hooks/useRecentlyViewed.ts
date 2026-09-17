import { useCallback, useEffect, useState } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";

const MAX_ITEMS = 8;

export function useRecentlyViewed() {
  const [ids, setIds] = useState<string[]>(() => loadFromStorage<string[]>("recentlyViewed", []));

  useEffect(() => {
    saveToStorage("recentlyViewed", ids);
  }, [ids]);

  const addRecentlyViewed = useCallback((id: string) => {
    setIds((prev) => [id, ...prev.filter((existing) => existing !== id)].slice(0, MAX_ITEMS));
  }, []);

  return { recentlyViewedIds: ids, addRecentlyViewed };
}
