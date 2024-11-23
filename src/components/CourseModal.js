import React, { useState, useEffect } from "react";

const CourseModal = ({ course, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    cname: "",
    credit: "",
    code: "",
    tf: "true",
  });

  useEffect(() => {
    if (course) {
      setFormData(course);
    }
  }, [course]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.cname || !formData.credit || !formData.code) {
      alert("All fields are required.");
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal show d-block" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {course ? "Edit Course" : "Add Course"}
            </h5>
            <button
              type="button"
              className="close"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
