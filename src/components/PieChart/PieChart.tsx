// Dependencies
import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Types
import CocktailType from '../../types/cocktailType';

interface BarChartProps {
  data: CocktailType[];
}

const PieChartComponent = ({ data }: BarChartProps) => {
  const chartData = useMemo(() => {
    const allGlasses: { name: string; value: number }[] = [];

    data.forEach((cocktail) => {
      const glass = cocktail.strGlass;

      if (glass) {
        const glassIndex = allGlasses.findIndex(
          (glassItem) => glassItem.name === glass
        );

        if (glassIndex === -1) {
          allGlasses.push({ name: glass, value: 1 });
        } else {
          allGlasses[glassIndex].value++;
        }
      }
    });

    const countsArray = allGlasses.map((glass) => ({
      name: glass.name,
      value: glass.value,
    }));

    return countsArray;
  }, [data]);

  return (
    <ResponsiveContainer height={500}>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
