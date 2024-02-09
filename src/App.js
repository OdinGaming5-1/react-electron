import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import AtolyePage from "./pages/AtolyePage";
import NLoginPage from "./pages/NLoginPage";

const App = () => {
  const [path, setPath] = useState("/");

  function navigate(value) {
    setPath(value);
  }

  return (
    <div>
      {path === '/' && <NLoginPage navigate={navigate} />}
      {path === '/admin' && <AdminPage navigate={navigate} />}
      {path === '/atolye' && <AtolyePage navigate={navigate} />}
    </div>
  );
};

export default App;

/* <Router>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/admin" Component={AdminPage} />
        <Route path="/landing" Component={LandingPage} />
        <Route path="/atolye" Component={AtolyePage} />
        <Route path="/" Component={NLoginPage} />
      </Routes>
    </Router> */