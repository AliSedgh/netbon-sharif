import { FC } from "react";
import Chart from "./Chart";

interface LiveSectionProps {
  title: string;
  value: number;
  chartData: number[];
}
const LiveSection: FC<LiveSectionProps> = ({ title, value, chartData }) => {
  return (
    <div className="live-section">
      <div>
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <Chart chartData={chartData} />
    </div>
  );
};

export default LiveSection;
