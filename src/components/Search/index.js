import './styles.css';

export const SearchInput = ({searchValue, handleChange}) => {
    return (
        <input 
          className="search-input"
          value={searchValue}
          type="search"
          placeholder="Type your search"
          onChange={handleChange}
        />
    )
}