// Dependencies
import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
// Types
import CocktailType from '../../types/cocktailType';

interface BarChartProps {
  data: CocktailType[];
}

const BarChartComponent = ({ data }: BarChartProps) => {
  const chartData = useMemo(() => {
    const alcoholic = data.filter(
      (item) => item.strAlcoholic === 'Alcoholic'
    ).length;
    const nonAlcoholic = data.filter(
      (item) => item.strAlcoholic === 'Non alcoholic'
    ).length;

    return [
      {
        alcoholic: alcoholic,
        nonAlcoholic: nonAlcoholic,
      },
    ];
  }, [data]);

  return (
    <ResponsiveContainer height={500}>
      <BarChart
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alcoholic" fill="#8884d8" />
        <Bar dataKey="nonAlcoholic" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
