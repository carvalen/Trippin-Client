import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
