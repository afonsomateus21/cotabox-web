import { Chart } from "react-google-charts";
import { useUsers } from "../hooks/useUsers";
import { transformUsersArrayToChartFormat } from "../utils/common";

export const options = {
  pieHole: 0.2,
  is3D: false,
};

export function ParticipationChart() {
  const { users } = useUsers();
  const transformedUsersArray = transformUsersArrayToChartFormat(users);

  return (
    <div className="z-0 w-full">
      <Chart
        chartType="PieChart"
        options={options}
        data={transformedUsersArray !== null ? transformedUsersArray : []}
        height={"400px"}
      />
    </div>
  );
}