import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportIncident from "./pages/ReportIncident";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ReportIncident />} path="/reportIncident" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
