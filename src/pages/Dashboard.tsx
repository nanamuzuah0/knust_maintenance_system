import React, { useState } from "react";
import Piechart from "../components/Piechart";
import Table from "../components/Table";
import "../styles/dashboard.css";
const Dashboard = () => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()} - ${
    currentDate.getMonth() + 1
  } - ${currentDate.getFullYear()}`;

  const columns = [
    {
      name: "Report ID",
      selector: (row) => row.caseId,
    },
    {
      name: "Mail",
      selector: (row) => row.mail,
    },
    {
      name: "Datestamp",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: Math.floor(Math.random() + 2) * 2000,
      caseId: Math.floor(Math.random() + 3) * 100000,
      mail: "arloo@gmail.com",
      date: date,
      status: "Pending",
    }
  ];

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newRecords = data.filter((row) => {
      row.mail.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newRecords);
  }
  return (
    <div className="dashboard-container">
      <div className="left-dashboard-container">
        <h1>Statistics</h1>
        <Piechart />
      </div>
      <div className="right-dashboard-container">
        <div className="controls">
          <input
            type="text"
            placeholder="filter by status"
            onChange={(event) => handleFilter(event)}
          />
          <input type="date" placeholder="Search" required name="search" />
          <input type="text" placeholder="Search" required name="search" />
        </div>
        <div className="table">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
