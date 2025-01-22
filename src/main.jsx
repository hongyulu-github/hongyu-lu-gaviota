import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import theme from "./theme.js";
import "./index.css";
import { LanguageProvider } from "./context/languageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ChakraProvider>
  </React.StrictMode>
);