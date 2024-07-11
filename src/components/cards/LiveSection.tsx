import { FC } from "react";
import Chart from "../svgs/Chart";

interface LiveSectionProps {
  title: string;
  value: number;
}
const LiveSection: FC<LiveSectionProps> = ({ title, value }) => {
  return (
    <div className="live-section">
      <div>
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <Chart size={100} />
    </div>
  );
};

export default LiveSection;
