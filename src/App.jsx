import { Stack } from "@chakra-ui/react";
import "./App.css";
import Contact from "./components/sections/contect";
import Main from "./components/sections/main";
import Upper from "./components/sections/upper";

function App() {
  return (
    <Stack className="app">
      <Upper />
      <Main />
      <Contact />
    </Stack>
  );
}

export default App;
