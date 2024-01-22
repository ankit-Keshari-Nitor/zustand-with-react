import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import PokemonList from "./components/PokemonList";
import { Counter } from "./components/Counter";
import { Vote } from "./components/Vote";
import { Fruits } from "./components/Fruits";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Counter />} />
          <Route path="/vote" element={<Vote />} />
          <Route path="/pokemon" element={<PokemonList />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
