type Asset = {
  grade: string;
  lastSeen: number;
  name: string;
  total_vuls: number;
  type: string;
};

type Cloud = {
  ips: number;
  live: number[];
  monitored: number[];
  ports: number;
  total: number;
  total_live: number;
  total_monitored: number;
  vulns: number;
};

type GeneralType = "domain" | "ip" | "cloud";

type Data = {
  assets: Asset[];
  cloud: Cloud;
  domain: Cloud;
  ip: Cloud;
};

export type { Cloud, Data, Asset, GeneralType };
