import React from "react";
import { Button } from "react-bootstrap";

import "./HomeDetails.css";
const HomeDetails = (props) => {
  const { courseName, instructor, img, decrip, published } = props.card;
  return (
    <div class="col ">
      <div class="card shadow rounded-5">
        <img src={img} class="card-img-top img-sizing" alt="..." />
        <div class="card-body">
          <h2 class="card-title">{courseName}</h2>
          <p>
            <small>
              Instructor: <span className="fw-bold">{instructor}</span>
            </small>
          </p>
          <p>
            <small>Starting on: {published}</small>
          </p>
          <p class="card-text fw-bold">{decrip}</p>
        </div>
        <div className="mx-auto my-3">
          <Button variant="outline-success fw-bold px-4">More Details</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
