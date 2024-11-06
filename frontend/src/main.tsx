import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={true} />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </QueryClientProvider>
);
