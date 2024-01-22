import { create } from "zustand";
import { persist } from "zustand/middleware";

// Create Store
let store = (set) => ({
  fruits: ["apple", "banana", "orange"],
  addFruits: (fruit) => {
    set((state) => ({
      fruits: [...state.fruits, fruit],
    }));
  },
});

// persist the created state
store = persist(store, { name: "FruitsBasket" });

// create the store
export const useFruitsStore = create(store);
