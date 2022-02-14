import axios from "axios";
import { beersActions } from "../reducers/beerReducer";
import { apiConfig } from "../../api/apiConfig";

function fetchData(callback, category) {
  axios
    .get(apiConfig.baseUrl, {
      params: {
        malt: category,
      },
    })
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      return error;
    });
}

export const fetchAllBeersAction = (dispatch) => {
  fetchData((data) => {
    dispatch(beersActions.fetchAllBeers(data));
  });
};

export const fetchAllBeersByCategory = (category) => {
  return (dispatch) => {
    fetchData((data) => {
      dispatch(beersActions.fetchAllBeersByCategory(data));
    }, category);
  };
};

export const fetchSelectedBeer = (id) => {
  return (dispatch) => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${id}`)
      .then((response) => {
        dispatch(beersActions.selectedBeer(response.data));
      })
      .catch((error) => {
        return error;
      });
  };
};
