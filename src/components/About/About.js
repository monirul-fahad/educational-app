import React from "react";
import "./About.css";
import image from "../../image/hero.png";
const About = () => {
  return (
    <div className="about container">
      <h1 className="text-center mt-5">About Us</h1>
      <hr />
      <h1 className="text-center mb-5">
        We will help you learn what you are passionates about
      </h1>
      <div className="row">
        <div className="col-md-6">
          <img src={image} alt="" />
        </div>
        <div className="col-md-6 about-details">
          <h2>1. Go to your own pace</h2>
          <p>
            You will get your own pace where you can find all the relevant
            courses for you. Here you can register and learn all the techniques
            which you want to know.
          </p>
          <h2>2. Learn from industry experts</h2>
          <p>
            Our industry experts will guide you at each and every point when you
            are pursuing these courses. Also, if you face any issue during this,
            they will guide you to call over.
          </p>
          <h2>3. Find courses on almost any topic</h2>
          <p>
            You will get the courses related to almost all the topics which you
            are searching for. Also, you will find the most relevant topics as
            per your choice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
