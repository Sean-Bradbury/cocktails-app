// Dependencies
import { useMemo, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
// Components
import {
  CardImageSkeleton,
  CardDetailsSkeleton,
} from './CocktailCardDetailsSkeleton';
// Types
import CocktailType from '../../types/cocktailType';
// Helpers
import { reduceText } from '../../helpers/helpers';
// Styles
import './CocktailCard.scss';
import 'react-loading-skeleton/dist/skeleton.css';

interface CocktailCardProps {
  cocktail: CocktailType;
}

const CocktailCard = ({ cocktail }: CocktailCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const intructions = useMemo(
    () => reduceText(cocktail.strInstructions, 85),
    [cocktail.strInstructions]
  );

  return (
    <Card className="cocktail-card">
      {!loaded && <CardImageSkeleton />}
      <Image
        src={cocktail.strDrinkThumb}
        wrapped
        ui={false}
        onLoad={() => setLoaded(true)}
      />
      <Card.Content className="cocktail-card__details">
        {!loaded ? (
          <CardDetailsSkeleton />
        ) : (
          <>
            <Card.Header>{cocktail.strDrink}</Card.Header>
            <Card.Meta>
              <span>{cocktail.strCategory}</span>
            </Card.Meta>
            <Card.Description>{intructions}</Card.Description>
            <Card.Content className="cocktail-card__details-footer">
              <a href="#">Watch video intructions</a>
            </Card.Content>
          </>
        )}
      </Card.Content>
    </Card>
  );
};

export default CocktailCard;
