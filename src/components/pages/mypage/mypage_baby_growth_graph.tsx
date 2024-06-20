import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const legendFormatter = (value: string) => {
  switch (value) {
    case "height":
      return "키";
    case "weight":
      return "몸무게";
    default:
      return value;
  }
};
const tooltipFormatter = (value: string, name: string) => {
  let unit: string = "";
  if (name === "height") {
    name = "키";
    unit = " cm";
  } else if (name === "weight") {
    name = "몸무게";
    unit = " kg";
  }
  return [`${value}${unit}`, name];
};
const labelFormatter = (label: number) => {
  return `${label}개월`;
};

interface Props {
  data: ApiResponse.UsersApiTypes.BabyTypes.BabyInfoResponse;
}

const MypageBabyGrowthGraph: React.FC<Props> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" tickFormatter={labelFormatter} />
        <YAxis
          yAxisId="left"
          label={{ value: "키 (cm)", angle: -90, position: "insideLeft" }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          label={{ value: "몸무게 (kg)", angle: 90, position: "insideRight" }}
        />
        <Tooltip formatter={tooltipFormatter} labelFormatter={labelFormatter} />
        <Legend formatter={legendFormatter} />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="height"
          stroke="#8884d8"
          activeDot={{ r: 6 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="weight"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MypageBabyGrowthGraph;
