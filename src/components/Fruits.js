import React from "react";
import { useFruitsStore } from "../zustand/createFruitsStore";

export const Fruits = () => {
  const [newFruit, setNewFruit] = React.useState("");
  const fruits = useFruitsStore((state) => state.fruits);
  const addNewFruit = useFruitsStore((state) => state.addFruits);

  // Function to handle the button click
  const addFruit = () => {
    addNewFruit(newFruit);
    setNewFruit("");
  };

  return (
    <div
      style={{
        background: "rgb(171 237 184)",
        margin: "20px",
        padding: "20px",
      }}
    >
      <h1>Storing, Accessing and Persisting arrays in the state</h1>
      <input
        placeholder="Add New Fruit"
        value={newFruit}
        onChange={(e) => setNewFruit(e.target.value)}
      />
      <button onClick={addFruit}>Add a fruit</button>

      <ul>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};
