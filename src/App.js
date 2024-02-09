import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import AtolyePage from "./pages/AtolyePage";
import NLoginPage from "./pages/NLoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" Component={HomePage} /> */}
        <Route path="/admin" Component={AdminPage} />
        <Route path="/atolye" Component={AtolyePage} />
        {/* <Route path="/landing" Component={LandingPage} /> */}
        <Route path="/" Component={NLoginPage} />
      </Routes>
    </Router>
  );
};

export default App;
