import { Chart } from "react-google-charts";

export const data = [
  ["Name", "Participation (%)"],
  ["Carlos Moura", 5],
  ["Fernanda Oliveira", 15],
  ["Eliza Souza", 20],
  ["Fernanda Oliveira", 15],
  ["Andreza Santos", 40],
];

export function ParticipationChart() {
  return (
    <div className="mt-60">
      <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}