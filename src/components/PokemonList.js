import React, { useEffect } from "react";
import { usePokemonStore } from "../zustand/createPokemonStore";

export default function PokemonList() {
  const pokemonList = usePokemonStore((state) => state.pokemon);
  const fetchPokemonList = usePokemonStore((state) => state.fetchPokemon);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

  return (
    <div
      style={{
        background: "rgb(237 171 177)",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h1>Fetching pokemon list asynchronously on Component Mount</h1>
      <ul>
        {pokemonList.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
    </div>
  );
}
