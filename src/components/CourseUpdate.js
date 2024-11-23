import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CourseUpdate = ({ courses, onRefresh }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cname: "",
    credit: "",
    code: "",
    tf: "true",
  });

  useEffect(() => {
    const course = courses.find((course) => course.id === id);
    if (course) setFormData(course);
  }, [courses, id]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);

    // API 호출 (자동 저장)
    try {
      await axios.put(
        `https://67288474270bd0b97555e270.mockapi.io/user/${id}`,
        updatedData
      );
      onRefresh(); // 목록 새로고침
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div>
      <h2>Edit Course</h2>
      <input
        type="text"
        name="cname"
        className="form-control mb-2"
        placeholder="Name"
        value={formData.cname}
        onChange={handleChange}
      />
      <input
        type="text"
        name="credit"
        className="form-control mb-2"
        placeholder="Credit"
        value={formData.credit}
        onChange={handleChange}
      />
      <input
        type="text"
        name="code"
        className="form-control mb-2"
        placeholder="Code"
        value={formData.code}
        onChange={handleChange}
      />
      <select
        name="tf"
        className="form-control mb-2"
        value={formData.tf}
        onChange={handleChange}
      >
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <button
        className="btn btn-secondary"
        onClick={() => navigate("/list")}
      >
        Back to List
      </button>
    </div>
  );
};

export default CourseUpdate;
