import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

function Home() {
  return (
    <div className="full-page">
      <div className="text-center d-flex flex-column align-items-center justify-content-center">
        <div className="logo text-center mt-5 mb-5">
          <img src={logo} alt="logo" className="img-fluid" />
        </div>
        <Link className="btn btn-secondary" to="/events">
          Lets Go
        </Link>
      </div>
    </div>
  );
}

export default Home;
