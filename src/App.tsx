// Dependencies
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Input } from 'semantic-ui-react';
// Components
import Tabs from './components/Tabs';
import ComparisonArea from './components/ComparisonArea';
// Hooks
import useFetchCocktails from './hooks/fetchCocktailsHook';
// Styles
import './App.scss';
import 'semantic-ui-css/semantic.min.css';
// Types
import CocktailType from './types/cocktailType';
import BreadCrumbs from './components/BreadCrumbs';

function App() {
  const { cocktails, fetchCocktails, setLetter, letter } =
    useFetchCocktails();
  const [filteredCocktails, setFilteredCocktails] = useState(
    cocktails || []
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Update filtered characters when search term changes
  useLayoutEffect(() => {
    const handleSearch = (searchTerm: string) => {
      setSearchTerm(searchTerm);

      if (searchTerm === '' || searchTerm.length < 3) {
        setFilteredCocktails(cocktails);
        return;
      }

      const filteredCocktails = cocktails.filter(
        (character: CocktailType) =>
          character.strDrink
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
      setFilteredCocktails(filteredCocktails);
    };

    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, cocktails]);

  useEffect(() => {
    if (cocktails) {
      if (cocktails[0]?.strDrink[0] === letter) return;
      fetchCocktails(setLoading, setError);
    }
  }, [letter, cocktails, fetchCocktails]);

  // Initial characters fetch
  useEffect(() => {
    if (cocktails.length > 0) return;
    fetchCocktails(setLoading, setError);
  }, [cocktails, fetchCocktails]);

  return (
    <div className="app-container">
      <BreadCrumbs />
      <div className="filtering">
        <Tabs
          setLetter={setLetter}
          error={error}
          filteredCocktails={filteredCocktails}
          loading={loading}
        />
        <Input
          className="cocktail-search__input"
          icon="search"
          placeholder="What are you looking for?"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <ComparisonArea data={filteredCocktails} />
    </div>
  );
}

export default App;
