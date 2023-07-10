// Dependencies
import { useAutoAnimate } from '@formkit/auto-animate/react';
// Components
import CocktailCard from '../CocktailCard';
// Types
import CocktailType from '../../types/cocktailType';
// Styles
import './CocktailGrid.scss';

interface CocktailGridProps {
  filteredCocktails: CocktailType[];
  error: string;
}

const CocktailGrid = ({
  filteredCocktails,
  error,
}: CocktailGridProps) => {
  const [parent] = useAutoAnimate();

  return (
    <div className="cocktail-grid" ref={parent}>
      {error && <p>{error}</p>}
      {filteredCocktails.map((cocktail: CocktailType) => (
        <div className="cocktail-grid__item" key={cocktail.idDrink}>
          <CocktailCard cocktail={cocktail} />
        </div>
      ))}
    </div>
  );
};

export default CocktailGrid;
