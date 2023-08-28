import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const report = useNavigate();
  const handleClick = () => {
    report("/report");
  };

  return (
    <div className="container">
      <main className="main">
        <body className="content-wrapper">
          <div className="left-container">
            <h2 className="header">KNUST</h2>
            <h3 className="header">MANAGEMENT</h3>
            <p>
              It is with great interest that I submit to you the enclosed resume
              in the hopes of securing a software design engineer role in your
              company. As a current final year Computer science student at Kwame
              Nkrumah University of Science And technology with in increasingly
              extensive knowledge of diverse software development tools and IT
              systems. I feel confident that I would significantly benefit your
              organization as your next software design engineer.
            </p>
            <button className="btn-get-in-touch" onClick={handleClick}>
              Submit an issue <FaArrowRight size="25px" className="fa-arrow" />
            </button>
          </div>
          <div className="right-container"></div>
        </body>
      </main>
    </div>
  );
};

export default Home;
