import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

const queryClient = new QueryClient();

interface IProps {
  children: React.ReactNode;
}

const QueryProvider: FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
