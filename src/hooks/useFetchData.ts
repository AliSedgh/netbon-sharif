import { useQuery, QueryKey } from "@tanstack/react-query";
import { Data, Asset } from "../components/types";
import { useSearchParams } from "react-router-dom";
import { fetchDashboardData } from "../services/fetchDashboardData";
import { useMemo } from "react";

const useFilteredData = (
  data: Data | undefined,
  type: string | null
): Data | undefined => {
  return useMemo(() => {
    if (data && type) {
      const assets = data.assets.filter((asset: Asset) => asset.type === type);
      return { ...data, assets };
    }
    return data;
  }, [data, type]);
};

const useFetchData = (): { data: Data | undefined } => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData<Data>,
  });

  const filteredData = useFilteredData(data, type);

  return { data: filteredData };
};

export default useFetchData;
