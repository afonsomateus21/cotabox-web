import { Toaster } from "sonner";
import { ParticipationChart } from "./ParticipationChart";
import { ParticipationTable } from "./ParticipationTable";

export function MainContent() {
  return (
    <main className="h-screen mt-80 lg:mt-48 lg:p-6 flex flex-col items-center justify-start p-3">
      <h1 className="text-3xl">Data</h1>
      <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="w-full flex flex-col lg:flex-row items-center justify-evenly mt-6 max-w-screen-lg mx-auto">
        <div className="w-full lg:w-1/2 max-w-lg">
          <ParticipationTable />
        </div>
        <div className="w-full lg:w-1/2 max-w-lg">
          <ParticipationChart />
        </div>
      </div>
      <Toaster position="top-right" />
    </main>
  );
}