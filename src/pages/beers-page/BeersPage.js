import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Category from "../../components/categroy/Category";
import { fetchAllBeersAction } from "../../redux/actions/beerAction";
import { Link } from "react-router-dom";

const BeersPage = () => {
  const beers = useSelector((beers) => beers.beers.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBeersAction);
  }, []);

  return (
    <div className="container  p-5">
      <Category />
      <div className="row text-center">
        {beers.map((beer, index) => (
          <div key={index} className="col-md-4 p-1">
            <div class="card p-3" style={{ backgroundColor: "whitesmoke" }}>
              <img
                src={beer.image_url}
                class="card-img-top"
                alt="..."
                style={{
                  width: "5rem",
                  height: "13rem",
                  display: "inline-block",
                  margin: "0 auto",
                }}
              />
              <div class="card-body">
                <p class="card-title">{beer.name}</p>
                <Link
                  class="btn btn-secondary"
                  to={`/beers/${beer.id}`}
                  activeClassName="current"
                >
                  {" "}
                  Check beer
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeersPage;
