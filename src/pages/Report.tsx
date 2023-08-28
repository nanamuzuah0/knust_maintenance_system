import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import "../styles/report.css";

const Report = () => {
  const [formData, setFormData] = useState({
    contact: "",
    mail: "",
    location: "",
    discreption: "",
    category: "",
    recommendedSolution: "",
    image_url: "",
  });

  const handleFormDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const currentDate = new Date();
  const dateStamp = `${currentDate.getDate()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getFullYear()}`;

  const navigate = useNavigate();

  const sendDataToServer = (event) => {
    event.preventDefault();
    const data = {
      contact: formData.contact,
      mail: formData.mail,
      discreption: formData.discreption,
      location: formData.location,
      recommendedSolution: formData.recommendedSolution,
      image_url: formData.image_url,
      category: formData.category,
      status: "Pending",
      issueId: uuidv4(),
      datestamp: dateStamp,
    };

    console.log(data);
    navigate("/success");
  };

  return (
    <div className="main-container-wrapper">
      <div className="report-container">
        <header>Request Form</header>
        <form action="" onSubmit={sendDataToServer}>
          <div className="form-first">
            <div className="details personal">
              <span className="title">Report Body</span>
              <div className="fields">
                <div className="input-field">
                  <label>Contact</label>
                  <input
                    type="telephone"
                    placeholder="Contact"
                    required
                    name="contact"
                    value={formData.contact}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div className="input-field">
                  <label>E-mail</label>
                  <input
                    type="email"
                    placeholder="Mail"
                    required
                    name="mail"
                    value={formData.mail}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div className="input-field">
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="Location"
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="input-field">
                  <label>Lastname</label>
                  <input
                    type="text"
                    placeholder="Lastname"
                    required
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div className="input-field">
                  <label>Category</label>
                  <select
                    name="category"
                    id="faults"
                    value={formData.category}
                    onChange={handleFormDataChange}
                  >
                    <option value="Painting">Painting</option>
                    <option value="Electricals">Electricals</option>
                    <option value="Capentry">Capentry</option>
                    <option value="Air Condition and Refrigeration">Air Condition and Refrigeration</option>
                    <option value="Building">Building</option>
                    <option value="Mechanical">Mechanical</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Image url</label>
                  <input
                    type="file"
                    placeholder="Image url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleFormDataChange}
                  />
                </div>

                <div className="input-field">
                  <label>Fault discreption</label>
                  <textarea
                    rows={5}
                    placeholder="Fault discreption here"
                    required
                    name="discreption"
                    value={formData.discreption}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="input-field">
                  <label>Recommended solution</label>
                  <textarea
                    rows={5}
                    placeholder="Recommended solution here"
                    required
                    name="recommendedSolution"
                    value={formData.recommendedSolution}
                    onChange={handleFormDataChange}
                  />
                </div>
                <div className="button">
                  <input type="submit" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Report;
