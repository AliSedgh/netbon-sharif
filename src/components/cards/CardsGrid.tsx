import { FC } from "react";
import { Cloud } from "../types";
import Card from "./Card";
import "./cards.css";

interface IProps {
  cloud: Cloud;
  domain: Cloud;
  ip: Cloud;
}
const CardsGrid: FC<IProps> = ({ cloud, domain, ip }) => {
  const data = [
    { data: domain, type: "domain" },
    { data: ip, type: "ip" },
    { data: cloud, type: "cloud" },
  ] as const;

  return (
    <div className="cards-grid">
      {data.map((item, index) => (
        <Card card={item.data} type={item.type} key={index}>
          <Card.Type />
          <Card.LiveDataDisplay />
          <Card.NetworkMetrics />
        </Card>
      ))}
    </div>
  );
};

export default CardsGrid;
