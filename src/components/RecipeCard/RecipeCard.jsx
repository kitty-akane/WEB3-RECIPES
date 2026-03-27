import { useState } from "react";
import styles from "./RecipeCard.module.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function RecipeCard({ recipe, setFavoriteIds }) {
  const [pinned, setPinned] = useState(false);
  const [favorite, setFavorite] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
    return saved.includes(recipe.id);
  });

  const handleFavorite = () => {
    const saved = JSON.parse(localStorage.getItem("favoriteRecipes") || "[]");
    const updated = favorite
      ? saved.filter((id) => id !== String(recipe.id))
      : [...saved, String(recipe.id)];
    localStorage.setItem("favoriteRecipes", JSON.stringify(updated));
    setFavorite(!favorite);
    setFavoriteIds(updated);

  };
  return (
    <article className={`${styles.card} ${pinned ? styles.pinned : ""}`}>
      <img className={styles.image} src={recipe.image} alt="" />
      <div className={styles.body}>
        <h2 className={styles.name}>{recipe.name}</h2>
        <span className={styles.badge}>{recipe.category}</span>
        <p className={styles.duration}>{recipe.duration} min</p>
        <FavoriteButton isFavorite={favorite} onToggle={handleFavorite} />
        <button
          type="button"
          className={styles.pin}
          onClick={() => setPinned((p) => !p)}
        >
          
          {pinned ? "Unpin" : "Pin"}
        </button>
      </div>
    </article>
  );
}
