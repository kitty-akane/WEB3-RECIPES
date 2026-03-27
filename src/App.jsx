import { useEffect, useState } from "react";
import recipes from "./data/recipes.json";
import styles from "./App.module.css";
import RecipeList from "./components/RecipeList/RecipeList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

export default function App() {
  const [orderedRecipes, setOrderedRecipes] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFavorites, setShowFavorites] = useState(false);
  function handleToggleOrder() {
    setOrderedRecipes((prev) => [...prev].reverse());
  }
  const filteredRecipes = orderedRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const [favoriteIds, setFavoriteIds] = useState(() =>
    JSON.parse(localStorage.getItem("favoriteRecipes") || "[]"),
  );
  const displayedRecipes = showFavorites
  ? filteredRecipes.filter((recipe) => favoriteIds.includes(String(recipe.id)))
  : filteredRecipes;
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
          <button
            type="button"
            className={`${styles.toggle} ${showFavorites ? styles.active : ""}`}
            onClick={() => setShowFavorites((prev) => !prev)}
          >
            {showFavorites ? "Show All" : "Show Favorites"}
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <RecipeList recipes={displayedRecipes} setFavoriteIds={setFavoriteIds} />
      </main>
    </div>
  );
}
