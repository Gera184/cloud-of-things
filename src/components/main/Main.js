import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import SubscribeModal from "../subscribe-modal/SubscribeModal";

const Main = () => {
  return (
    <div className="container-fluid main">
      <div className="row text-center">
        <div className="col card-main">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {" "}
                <Link to={"/beers"}>Click here to see our beer catalog</Link>
              </h5>
              <div className="pt-3">
                <button
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscribeModal />
    </div>
  );
};

export default Main;
