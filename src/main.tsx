import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Fragment>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <App />
    </QueryClientProvider>
  </Fragment>
);
