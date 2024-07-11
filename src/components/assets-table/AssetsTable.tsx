import { FC } from "react";
import "./assets.css";
interface AssetsTableProps {
  children: React.ReactNode;
}

const AssetsTable: FC<AssetsTableProps> = ({ children }) => {
  return (
    <div className="assets-wrapper">
      <p className="">Assets</p>
      <table className="assets-table">{children}</table>
    </div>
  );
};

export default AssetsTable;
