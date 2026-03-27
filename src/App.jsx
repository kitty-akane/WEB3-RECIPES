import { useEffect, useState } from "react";
import recipes from "./data/recipes.json";
import styles from "./App.module.css";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse());
  }
  const filteredRecipes = orderedRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerRow}>
          <h1 className={styles.title}>Recipe Book</h1>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <button
            type="button"
            className={styles.toggle}
            onClick={handleToggleOrder}
          >
            Reverse order
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}
