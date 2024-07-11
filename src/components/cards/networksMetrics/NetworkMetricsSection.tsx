import { FC } from "react";

interface NetworkMetricsSectionProps {
  image: React.ReactNode;
  type: string;
  value: number;
}

const NetworkMetricsSection: FC<NetworkMetricsSectionProps> = ({
  image,
  type,
  value,
}) => {
  return (
    <div className="network-card-metrics-section">
      <div className="image">{image}</div>
      <div className="data">
        <span>{type}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};

export default NetworkMetricsSection;
