import React from "react";
import DataTable from "react-data-table-component";

const Table = ({columns,data}: props) => {
  return (
    <DataTable columns={columns} data={data} fixedHeader pagination></DataTable>
  );
};

export default Table;
