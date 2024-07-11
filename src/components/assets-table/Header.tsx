import RowContainer from "./RowContainer";

const Header = () => {
  return (
    <RowContainer as="thead">
      <tr>
        <td>
          <span>Grade</span>
          <span>Name</span>
        </td>
        <td>
          <span>Total Vulnerabilities</span>
          <span>Last Seen</span>
        </td>
      </tr>
    </RowContainer>
  );
};

export default Header;
