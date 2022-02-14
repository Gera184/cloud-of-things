import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
export default () => {
  return (
    <div className="app">
      <Router>
        <Navbar routes={routes} />
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={route.path}
                exact
                element={route.element}
                path={route.path}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};
