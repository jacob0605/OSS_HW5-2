import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // 네비게이션 훅 추가
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `https://67288474270bd0b97555e270.mockapi.io/user/${id}`
        );
        setCourse(response.data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="mt-4">
      <h2>{course.cname}</h2>
      <p>Credit: {course.credit}</p>
      <p>Code: {course.code}</p>
      <p>True/False: {course.tf}</p>
      <button
        className="btn btn-secondary mt-3"
        onClick={() => navigate("/list")}
      >
        Back to List
      </button>
    </div>
  );
};

export default CourseDetail;
