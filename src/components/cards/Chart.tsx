import { FC } from "react";
import { BarChart, Bar } from "recharts";

interface BarChartProps {
  chartData: number[];
}

const BarChartComponent: FC<BarChartProps> = ({ chartData }) => {
  const barChartData = chartData.map((_, index) => ({
    name: `item ${index + 1}`,
    percentage: chartData[index],
  }));
  return (
    <BarChart width={70} height={50} data={barChartData}>
      <Bar dataKey="percentage" fill="#3f88c4" barSize={5} radius={5} />
    </BarChart>
  );
};

export default BarChartComponent;
