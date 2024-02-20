import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Participation (%)"],
  ["Carlos Moura", 5],
  ["Fernanda Oliveira", 15],
  ["Eliza Souza", 20],
  ["Fernanda Oliveira", 15],
  ["Andreza Santos", 40],
];

export const options = {
  pieHole: 0.2,
  is3D: false,
};

export function ParticipationChart() {
  return (
    <div className="z-0 w-full">
      <Chart
        chartType="PieChart"
        options={options}
        data={data}
        height={"400px"}
      />
    </div>
  );
}