import React, { useState } from "react";

function Form() {
  const [feedbackOptions, setFeedbackOptions] = useState({
    bug: false,
    feature: false,
    general: false,
  });

  const [date, setDate] = useState("");
  const [rating, setRating] = useState(3);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFeedbackOptions((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedOptions = Object.keys(feedbackOptions).filter(
      (option) => feedbackOptions[option]
    );

    if (selectedOptions.length === 0) {
      alert("Please select at least one feedback type.");
      return;
    }

    alert(`Form submitted! 
    Date: ${date}
    Rating: ${rating}
    Feedback Type: ${selectedOptions.join(", ")}`);
  };

  return (
    <div className="form-container">
      <h3>Feedback Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>Feedback:</label>
          <textarea required></textarea>
        </div>

        {/* Date Picker */}
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Rate Your Experience:</label>
          <div className="rating-container">
            <input
              type="range"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <span>{rating}/5</span>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label>Select Feedback Type:</label>

          <div className="checkbox-item">
            <input
              type="checkbox"
              name="bug"
              id="bug"
              checked={feedbackOptions.bug}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="bug">Bug Report</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              name="feature"
              id="feature"
              checked={feedbackOptions.feature}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="feature">Feature Request</label>
          </div>

          <div className="checkbox-item">
            <input
              type="checkbox"
              name="general"
              id="general"
              checked={feedbackOptions.general}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="general">General Feedback</label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
