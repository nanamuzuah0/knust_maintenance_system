import React, { useState } from "react";
import "../styles/status.css";

const Status = () => {

  const [status, setStatus] = useState(
    {
      issueId:"fg67gjy-vnmdlw",
      firstname:"A",
      lastname:"",
      status:"",
      datestamp:"",
      location:"",
      img_url:"", 
    })

  const checkIssueStatus = (event) => {
    console.log(event);
  };

  return (
    <div className="status-container-wrapper">
      <div className="status-container">
        <div className="top-status-container">
          <div className="display-image"></div>
          <div className="display-fault-details">
            <label htmlFor="">Issue Id: {status.issueId}</label>
            <br />
            <label htmlFor="">Name: {status.firstname} {status.lastname}</label>
            <br />
            <label htmlFor="">Status: {status.status}</label>
            <br />
            <label htmlFor="">Date: {status.datestamp}</label>
            <br />
            <label htmlFor="">Location: {status.location}</label>
          </div>
        </div>
        <div className="bottom-status-container">
          <div className="status-input-field">
            <input
              type="text"
              placeholder="Enter issue id here?"
              required
              name="search"
            />
          </div>

          <button className="button" onClick={checkIssueStatus}>
            Check status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;
