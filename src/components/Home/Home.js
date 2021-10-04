import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import HomeDetails from "../HomeDetails/HomeDetails";
import "./Home.css";

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./fakeData-2.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <section>
      <div className=" text-white banner-style d-flex align-items-center mb-5">
        <Container className="banner">
          <Row>
            <div className="col-md-6">
              <h1 className="banner-text">
                Start learning with our{" "}
                <span className="text-warning">experts</span> Improve your{" "}
                skills and give a <span className="text-warning">new</span> way
                to your career.
              </h1>
            </div>
            <div className="col-md-6"></div>
          </Row>
        </Container>
      </div>
      <div className="mb-5">
        <Container>
          <h1 className="text-center mb-4">Featured Courses</h1>
          <hr />
          <div class="row row-cols-1 row-cols-md-2 g-4">
            {cards.map((card) => (
              <HomeDetails key={card.id} card={card}></HomeDetails>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Home;
