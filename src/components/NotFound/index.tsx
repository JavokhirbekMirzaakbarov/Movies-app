import React from "react";
import { Link } from "react-router-dom";
import image from "../../asset/images/not-found.png";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>The page you are looking for is not found!</h2>
      <p>
        Go back to <Link to="/">Home Page</Link>
      </p>
      <img src={image} />
    </div>
  );
};

export default NotFound;
