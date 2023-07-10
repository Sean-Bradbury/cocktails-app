import { Card } from 'semantic-ui-react';
import Skeleton from 'react-loading-skeleton';

const CardDetailsSkeleton = () => (
  <Card.Content className="cocktail-card__details">
    <Card.Header>
      <Skeleton count={1} enableAnimation baseColor="#00000033" />
    </Card.Header>
    <Card.Meta>
      <span>
        <Skeleton count={1} enableAnimation baseColor="#00000033" />
      </span>
    </Card.Meta>
    <Card.Description>
      <Skeleton count={3} enableAnimation baseColor="#00000033" />
    </Card.Description>
    <Card.Content className="cocktail-card__details-footer">
      <Skeleton
        containerClassName="cocktail-card__details-footer"
        count={1}
        enableAnimation
        baseColor="#00000033"
      />
    </Card.Content>
  </Card.Content>
);

const CardImageSkeleton = () => (
  <div className="cocktail-card__skeleton-image">
    <Skeleton height={'100%'} baseColor="#00000033" enableAnimation />
  </div>
);

export { CardDetailsSkeleton, CardImageSkeleton };
