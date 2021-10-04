import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="mb-5">
      <Container>
        <h1 className="mt-5 mb-3 text-center">Our All Courses</h1>
        <hr />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
