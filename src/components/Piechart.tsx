import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const Piechart = () => {
    const data = [
        {name:"Pending", value:1000000},
        {name:"Resolved", value:2000000}
    ]

  return (
      <div>
        <PieChart width={600} height={600}>
            <Pie
                dataKey={"value"}
                data= {data}
                isAnimationActive={true}
                cx={230}
                cy={230}
                fill="#8884d8"
                outerRadius={160}
                label
            />
            <Tooltip/>
        </PieChart>
      </div>
  );
};

export default Piechart;
