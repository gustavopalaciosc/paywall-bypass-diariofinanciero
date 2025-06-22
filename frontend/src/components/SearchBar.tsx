interface SearchBarProps {
  setUrl: (url: string) => void;  
}

const SearchBar = ({ setUrl }: SearchBarProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);  
  };

  return (
    <input
      type="text"
      placeholder="https://www.df.cl/..."
      className="flex-1 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-orange-400"
      onChange={handleChange}  
    />
  );
};

export default SearchBar;
