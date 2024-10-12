import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rute from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Rute />
      </BrowserRouter>
    </>
  );
}

export default App;
