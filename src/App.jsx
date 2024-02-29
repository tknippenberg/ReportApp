import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReportIncident from "./pages/ReportIncident";
import Header from "./components/Header";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ReportIncident />} path="/reportIncident" />
          <Route element={<Success />} path="/success" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
