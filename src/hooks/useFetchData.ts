import { useQuery } from "@tanstack/react-query";
import { TData, TAsset } from "../types";
import { useSearchParams } from "react-router-dom";
import { fetchDashboardData } from "../services/fetchDashboardData";
import { useMemo } from "react";

const useFilteredData = (
  data: TData | undefined,
  type: string | null
): TData | undefined => {
  return useMemo(() => {
    if (data && type) {
      const assets = data.assets.filter((asset: TAsset) => asset.type === type);
      return { ...data, assets };
    }
    return data;
  }, [data, type]);
};

const useFetchData = (): { data: TData | undefined } => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { data } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboardData<TData>,
  });

  const filteredData = useFilteredData(data, type);

  return { data: filteredData };
};

export default useFetchData;
