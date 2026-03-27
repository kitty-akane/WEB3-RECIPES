import styles from "./FavoriteButton.module.css";
import { FaHeart, FaRegHeart } from 'react-icons/fa'
export default function FavoriteButton({ isFavorite, onToggle }) {
  return (
    <button
      type="button"
      className={`${styles.btn} ${isFavorite ? styles.active : ''}`}
      onClick={onToggle}
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
      {isFavorite ? ' Favorited' : ' Favorite'}
    </button>
  )
}