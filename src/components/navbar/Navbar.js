import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const location = useLocation();

  return (
    <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          {props.routes.map((route, index) => (
            <li key={index} class="breadcrumb-item">
              <Link
                className={
                  location.pathname === route.path ? "active" : "disabled"
                }
                to={route.path}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Navbar;
