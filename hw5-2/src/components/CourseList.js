import React from "react";
import { useNavigate } from "react-router-dom";

const CourseList = ({ courses }) => {
  const navigate = useNavigate();

  return (
    <ul className="list-group mt-3">
      {courses.map((course) => (
        <li key={course.id} className="list-group-item d-flex justify-content-between align-items-center">
          {course.cname} ({course.credit}, {course.code}, {course.tf})
          <div>
            <button
              className="btn btn-info btn-sm mr-2"
              onClick={() => navigate(`/detail/${course.id}`)}
            >
              Detail
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => navigate(`/update/${course.id}`)}
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
