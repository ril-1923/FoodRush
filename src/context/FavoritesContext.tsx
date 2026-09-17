import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { loadFromStorage, saveToStorage } from "../utils/storage";
import { useToast } from "./ToastContext";

interface FavoritesState {
  restaurants: string[];
  foods: string[];
}

interface FavoritesContextValue {
  favoriteRestaurants: string[];
  favoriteFoods: string[];
  isRestaurantFavorite: (id: string) => boolean;
  isFoodFavorite: (id: string) => boolean;
  toggleRestaurantFavorite: (id: string, name: string) => void;
  toggleFoodFavorite: (id: string, name: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);
const EMPTY: FavoritesState = { restaurants: [], foods: [] };

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<FavoritesState>(() => loadFromStorage<FavoritesState>("favorites", EMPTY));
  const { showToast } = useToast();

  useEffect(() => {
    saveToStorage("favorites", state);
  }, [state]);

  function toggleRestaurantFavorite(id: string, name: string) {
    setState((prev) => {
      const has = prev.restaurants.includes(id);
      showToast(has ? `${name} removed from favorites` : `${name} added to favorites!`, has ? "info" : "success");
      return {
        ...prev,
        restaurants: has ? prev.restaurants.filter((r) => r !== id) : [...prev.restaurants, id],
      };
    });
  }

  function toggleFoodFavorite(id: string, name: string) {
    setState((prev) => {
      const has = prev.foods.includes(id);
      showToast(has ? `${name} removed from favorites` : `${name} added to favorites!`, has ? "info" : "success");
      return {
        ...prev,
        foods: has ? prev.foods.filter((f) => f !== id) : [...prev.foods, id],
      };
    });
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteRestaurants: state.restaurants,
        favoriteFoods: state.foods,
        isRestaurantFavorite: (id) => state.restaurants.includes(id),
        isFoodFavorite: (id) => state.foods.includes(id),
        toggleRestaurantFavorite,
        toggleFoodFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites(): FavoritesContextValue {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
