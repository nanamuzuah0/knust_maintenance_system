import React from "react";
import "../styles/success.css";

const Success = () => {
  return (
    <div className="success-container-wrapper">
      <div className="success-container">
        <h2>Thank you!</h2>
        <br />
        <h4>Management really appreciate concern.</h4>
        <br />
        <p>
          Check you mail box for report unique id. You can track your request
          status by visiting the status page. Enter the request id in the text
          field provided and click on the submit button to view the status of
          the issue you reported.
        </p>
        <br />
        <h5>
          There is no limit to issues you can report. Feel free to contact us
          anytime!
        </h5>
      </div>
    </div>
  );
};

export default Success;
