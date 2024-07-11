import formatUnixTimestamp from "../../utils/formatDate";
import { TAsset } from "../types";

interface TableRowProps {
  asset: TAsset;
}
const TableRow: React.FC<TableRowProps> = ({ asset }) => {
  return (
    <>
      <td>
        <div className="pentagon">
          <span>{asset.grade}</span>
        </div>
        <span>{asset.name}</span>
      </td>
      <td>
        <span style={{ marginLeft: "50px" }} className="">
          {asset.total_vuls}
        </span>
        <span style={{ marginLeft: "70px" }}>
          {formatUnixTimestamp(asset.lastSeen)}
        </span>
      </td>
    </>
  );
};

export default TableRow;
