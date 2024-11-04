import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./_ezs/assets/plugins/perfect-scrollbar/perfect-scrollbar.css";

import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

import "moment/dist/locale/vi";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
