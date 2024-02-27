interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

const Search = ({ handleSearch, search, setSearch }: SearchProps) => {
  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Enter city'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default Search;
