import React from "react";
import "./Course.css";
const Course = (props) => {
  const { courseName, instructor, img, decrip, published, language, price } =
    props.course;
  return (
    <div className="col">
      <div className="card h-100 card-bg">
        <img src={img} className="card-img-top img-size" alt="..." />
        <div className="card-body">
          <h4 className="card-title text-center fw-bold">{courseName}</h4>
          <div className="card-text ps-2">
            <p className="my-1">
              <small>
                Instructor: <span className="fw-bold">{instructor}</span>
              </small>
            </p>
            <p className="my-1">
              <small>
                Language: <span className="fw-bold">{language}</span>
              </small>
            </p>
            <p className="my-1">
              <small>
                Updated: <span className="fw-bold">{published}</span>
              </small>
            </p>
            <h5 className="pt-3">{decrip.slice(0, 120)}</h5>
            <h2 className="text-success fw-bolder">{price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
