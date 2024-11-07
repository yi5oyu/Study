import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";

function App() {
  return (
    <HashRouter>
      <Routes basename="/react">
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />}>
          {/* <Route path=":cardId" element={<DetailCard />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
