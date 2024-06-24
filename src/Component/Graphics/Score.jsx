import "../../Style/main.css";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";

export default function score({ data }) {
  const scorePercent = [{ value: data * 100 }];
  return (
      <div className="scoreContent graphContent">
        <h2 className="score">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius={80}
          outerRadius={100}
          barSize={10}
          data={scorePercent}
          fill={"#FF0000"}
          startAngle={80}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            minAngle={20}
            cornerRadius={10}
            background
            dataKey="value"
          />
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            fontSize="26"
            fontWeight="700"
            fill="#282D30"
          >
            {scorePercent[0].value}%
          </text>
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="16"
            fill="grey"
            fontWeight="500"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
