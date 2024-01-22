import { create } from "zustand";

export const usePokemonStore = create((set, get) => ({
  pokemon: [],
  fetchPokemon: async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => set({ pokemon: data.results }));
  },
}));
