import React, { useState } from "react";
import AdminPage from "./pages/AdminPage";
import AtolyePage from "./pages/AtolyePage";
import NLoginPage from "./pages/NLoginPage";
import NewEntryPage from "./pages/NewEntryPage";
import ListEntryPage from "./pages/ListEntryPage"
import ListOldEntryPage from "./pages/ListOldEntryPage"
import WipeDataPage from "./pages/WipeDataPage";

const App = () => {
  const [path, setPath] = useState("/");

  function navigate(value) {
    setPath(value);
  }

  return (
    <div>
      {path === '/' && <NLoginPage navigate={navigate} />}
      {path === '/new' && <NewEntryPage navigate={navigate} />}
      {path === '/list' && <ListEntryPage navigate={navigate} />}
      {path === '/listold' && <ListOldEntryPage navigate={navigate} />}
      {path === '/admin' && <AdminPage navigate={navigate} />}
      {path === '/atolye' && <AtolyePage navigate={navigate} />}
      {path === '/wipeout' && <WipeDataPage navigate={navigate} />}
    </div>
  );
};

export default App;
