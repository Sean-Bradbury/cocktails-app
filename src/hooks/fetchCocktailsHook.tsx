import { useState } from 'react';

const useFetchCocktails = () => {
  const [cocktails, setCocktails] = useState<any[]>([]);
  const [letter, setLetter] = useState('A');

  const fetchCocktails = async (
    setLoading: (status: boolean) => void,
    setError: (error: string) => void
  ) => {
    setLoading(true);

    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' +
        letter,
      { method: 'GET', mode: 'cors' }
    );

    if (response.status !== 200) {
      setError('Something went wrong');
      setLoading(false);
      return;
    }

    const data = await response.json();
    setCocktails(data.drinks);

    setLoading(false);
  };

  return {
    cocktails: cocktails,
    fetchCocktails: fetchCocktails,
    setLetter: setLetter,
    letter,
  };
};

export default useFetchCocktails;
