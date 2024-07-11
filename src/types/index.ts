type TAsset = {
  grade: string;
  lastSeen: number;
  name: string;
  total_vuls: number;
  type: string;
};

type TNetworkMetrics = {
  ips: number;
  live: number[];
  monitored: number[];
  ports: number;
  total: number;
  total_live: number;
  total_monitored: number;
  vulns: number;
};

type TGeneralType = "domain" | "ip" | "cloud";

type TData = {
  assets: TAsset[];
  cloud: TNetworkMetrics;
  domain: TNetworkMetrics;
  ip: TNetworkMetrics;
};

export type { TNetworkMetrics, TData, TAsset, TGeneralType };
