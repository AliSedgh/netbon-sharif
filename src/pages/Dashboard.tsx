import CardsGrid from "../components/cards/CardsGrid";
import useFetchData from "../hooks/useFetchData";
import AssetsTable from "../components/assets-table/AssetsTable";
import Header from "../components/assets-table/Header";
import Body from "../components/assets-table/Body";
import Loading from "../components/shared/Loading";

const Dashboard = () => {
  const { data, isPending } = useFetchData();
  if (isPending) return <Loading />;
  if (data)
    return (
      <div className="wrapper">
        <CardsGrid cloud={data.cloud} domain={data.domain} ip={data.ip} />
        <AssetsTable>
          <Header />
          <Body tableData={data.assets} />
        </AssetsTable>
      </div>
    );
  return null;
};

export default Dashboard;
