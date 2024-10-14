import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import theme from "./theme.ts";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// Try
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);
