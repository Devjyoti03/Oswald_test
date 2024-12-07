import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NF404 from "./screens/NF404";
import Home from "./screens/Home";
import LayoutContainer from "./layout/Container";
import routesConstants from "./constants/routeConstants";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routesConstants.ROOT} element={<LayoutContainer />}>
          <Route path={routesConstants.HOME} element={<Home />} />
        </Route>
        <Route path={routesConstants.PAGE_NOT_FOUND} element={<NF404 />} />
    </Routes>
    </Router>
  );
}

export default App;