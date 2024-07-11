import { axiosInstance } from "../axios/baseService";

export const fetchDashboardData = async <T>(): Promise<T> => {
  return axiosInstance
    .get("/cf756b59-d746-4518-8221-55de4a7a8611")
    .then((res) => res.data);
};
