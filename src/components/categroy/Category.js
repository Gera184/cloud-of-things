import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllBeersByCategory } from "../../redux/actions/beerAction";

const Category = () => {
  const dispatch = useDispatch();
  const categoryConfig = [
    { title: "Extra Pale", param: "extra_pale" },
    { title: "Caramalt", param: "caramalt" },
    { title: "Munich", param: "munich" },
    { title: "Dark Crystal", param: "dark_crystal" },
  ];

  const categoryHandler = (param) => {
    dispatch(fetchAllBeersByCategory(param));
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to={"/"} class="nav-link">
                {" "}
                Home
              </Link>
            </li>
            {categoryConfig.map((category, index) => (
              <li key={index} class="nav-item">
                <Link
                  to={"/beers"}
                  class="nav-link"
                  key={index}
                  onClick={() => {
                    categoryHandler(category.param);
                  }}
                >
                  {" "}
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Category;
