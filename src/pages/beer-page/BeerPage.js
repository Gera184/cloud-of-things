import React, { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSelectedBeer } from "../../redux/actions/beerAction";
import "./BeerPage.css";
const BeerPage = () => {
  const selectedBeerId = useParams();
  const dispatch = useDispatch();
  const selectedBeer = useSelector(
    (selectedBeer) => selectedBeer.beers?.selectedBeer[0]
  );

  useEffect(() => {
    dispatch(fetchSelectedBeer(selectedBeerId.beerId));
  }, []);

  return (
    <Fragment>
      {selectedBeer ? (
        <div class="container pt-5 beer-page-main">
          <div className="row">
            <div className="col">
              <p>First brewed: {selectedBeer.first_brewed} </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <h2> {selectedBeer.name} </h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <img
                src={selectedBeer.image_url}
                style={{
                  width: "10rem",
                  height: "25rem",
                  display: "inline-block",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <p>{selectedBeer.tagline} </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col">
              <p>Ingredients:</p>
            </div>
            {selectedBeer.ingredients.malt.map((v, index) => (
              <div key={index} className="col">
                <p>{v.name}</p>
              </div>
            ))}
          </div>
          <div className="row pt-5">
            <div className="col">
              <p className="text-center">Beer description</p>
              <p> {selectedBeer.description}</p>
            </div>
            <div className="col">
              <p className="text-center">User tips</p>
              <p> {selectedBeer.brewers_tips}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </Fragment>
  );
};

export default BeerPage;
