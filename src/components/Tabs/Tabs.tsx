import { Tab } from 'semantic-ui-react';
// Components
import CocktailGrid from '../CocktailGrid';
// Styles
import './Tabs.scss';
import CocktailType from '../../types/cocktailType';

// create a-z string array
const alphabet = [...Array(16)].map((_, i) =>
  String.fromCharCode('A'.charCodeAt(0) + i)
);

interface TabsProps {
  setLetter: (letter: string) => void;
  error: string;
  filteredCocktails: CocktailType[];
  loading?: boolean;
}

const Tabs = ({ setLetter, error, filteredCocktails }: TabsProps) => {
  const panes = alphabet.map((letter) => ({
    menuItem: letter,
    render: () => (
      <Tab.Pane>
        <CocktailGrid
          error={error}
          filteredCocktails={filteredCocktails}
        ></CocktailGrid>
      </Tab.Pane>
    ),
  }));

  return (
    <Tab
      panes={panes}
      onTabChange={(e, data) => {
        const { activeIndex } = data;

        setLetter(alphabet[activeIndex as number]);
      }}
    />
  );
};

export default Tabs;
