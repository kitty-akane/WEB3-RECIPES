import styles from './SearchBar.module.css'
import { FaSearch } from 'react-icons/fa'
const searchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className={styles.wrapper}>
      <FaSearch className={styles.icon} />
      <input
        type="search"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default searchBar;
