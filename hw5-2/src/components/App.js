import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import CourseList from "./CourseList";
import CourseDetail from "./CourseDetail";
import CourseUpdate from "./CourseUpdate";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "https://67288474270bd0b97555e270.mockapi.io/user"
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Course Management</h1>
      {!showList && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowList(true);
            navigate("/list");
          }}
        >
          View List
        </button>
      )}
      <Routes>
        <Route
          path="/"
          element={
            !showList && (
              <div className="text-center mt-5">Click "View List" to see courses.</div>
            )
          }
        />
        <Route path="/list" element={<CourseList courses={courses} />} />
        <Route path="/detail/:id" element={<CourseDetail />} />
        <Route
          path="/update/:id"
          element={<CourseUpdate courses={courses} onRefresh={fetchCourses} />}
        />
      </Routes>
    </div>
  );
};

export default App;
