import { FC } from "react";
import Bug from "../svgs/Bug";
import Conflicts from "../svgs/Conflicts";
import Globe from "../svgs/Globe";
import { TNetworkMetrics } from "../types";
import NetworkMetricsSection from "./networksMetrics/NetworkMetricsSection";

interface NetworkMetricsProps {
  card: TNetworkMetrics;
}

const NetworkMetrics: FC<NetworkMetricsProps> = ({ card }) => {
  return (
    <div className="network-card-metrics">
      <NetworkMetricsSection
        image={<Globe size={30} />}
        type="Ips"
        value={card.ips}
      />
      <NetworkMetricsSection
        image={<Conflicts size={40} />}
        type="Ports"
        value={card.ports}
      />
      <NetworkMetricsSection
        image={<Bug size={30} />}
        type="Vulns"
        value={card.vulns}
      />
    </div>
  );
};

export default NetworkMetrics;
