import { TAsset } from "../../types";
import EmptyState from "./EmptyState";
import RowContainer from "./RowContainer";
import TableRow from "./TableRow";

interface BodyProps {
  tableData: TAsset[];
}

const Body: React.FC<BodyProps> = ({ tableData }) => {
  return (
    <tbody className="assets-table-body">
      {tableData.length ? (
        tableData.map((asset, index) => (
          <RowContainer as="tr" key={index}>
            <TableRow asset={asset} />
          </RowContainer>
        ))
      ) : (
        <EmptyState />
      )}
    </tbody>
  );
};

export default Body;
