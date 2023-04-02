import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import DarkModeContext from "./context/DarkModeContext";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={client}>
        <DarkModeContext>
          <App />
        </DarkModeContext>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>
);
