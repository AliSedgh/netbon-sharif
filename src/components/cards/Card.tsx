import { createContext, useContext } from "react";
import { TNetworkMetrics, TGeneralType } from "../../types";
import ArrowLeft from "../svgs/ArrowLeft";
import LiveSection from "./LiveSection";
import { useSearchParams } from "react-router-dom";
import NetworkMetrics from "./NetworkMetrics";
import { DetectStyleBaseType } from "../../constants";

interface IProps {
  card: TNetworkMetrics;
  type: TGeneralType;
  children: React.ReactNode;
}

type CardContextType = {
  card: TNetworkMetrics;
  type: TGeneralType;
};

const CardContext = createContext<CardContextType | null>(null);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

function Card({ card, type, children }: IProps) {
  const [_, setSearchParams] = useSearchParams();
  const handleClick = () => {
    setSearchParams({ type });
  };

  return (
    <CardContext.Provider value={{ card, type }}>
      <div onClick={handleClick} className="card">
        {children}
      </div>
    </CardContext.Provider>
  );
}

Card.Type = function CardType() {
  const { card, type } = useCardContext();
  const { style, text, icon } = DetectStyleBaseType[type];

  return (
    <div className="card-type-wrapper">
      <div className="card-type-container">
        <div className="total-card-type">
          <div className={`top-card-type ${style}`}>{icon}</div>
          <div className="bottom-card-type">{card.total}</div>
        </div>
        <ArrowLeft size={20} />
      </div>
      <div className="card-type-text">{text}</div>
    </div>
  );
};

Card.LiveDataDisplay = function CardLiveDataDisplay() {
  const { card } = useCardContext();
  return (
    <div className="live-card-display">
      <LiveSection title="Live" value={card.total_live} chartData={card.live} />
      <LiveSection
        title="Monitored"
        value={card.total_monitored}
        chartData={card.monitored}
      />
    </div>
  );
};

Card.NetworkMetrics = function CarNetworkMetrics() {
  const { card } = useCardContext();
  return <NetworkMetrics card={card} />;
};

export default Card;
