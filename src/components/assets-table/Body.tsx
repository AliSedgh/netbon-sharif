import { Asset } from "../types";
import RowContainer from "./RowContainer";
import TableRow from "./TableRow";

interface BodyProps {
  tableData: Asset[];
}

const Body: React.FC<BodyProps> = ({ tableData }) => {
  return (
    <tbody className="assets-table-body">
      {tableData.map((asset, index) => (
        <RowContainer as="tr" key={index}>
          <TableRow asset={asset} />
        </RowContainer>
      ))}
    </tbody>
  );
};

export default Body;
