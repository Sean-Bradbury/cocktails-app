import { Card } from 'semantic-ui-react';
// Components
import BarChartComponent from '../BarChart/BarChart';
import PieChartComponent from '../PieChart/PieChart';
// Types
import CocktailType from '../../types/cocktailType';

interface ComparisonAreaProps {
  data: CocktailType[];
}

const ComparisonArea = ({ data }: ComparisonAreaProps) => (
  <div className="comparison-area">
    <div className="comparison-area_item">
      <Card fluid>
        <BarChartComponent data={data} />
      </Card>
    </div>
    <div className="comparison-area_item">
      <Card fluid>
        <PieChartComponent data={data} />
      </Card>
    </div>
  </div>
);

export default ComparisonArea;
