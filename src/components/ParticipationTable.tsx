export function ParticipationTable() {
  const employee = [
    {
      id: 1,
      firstName: "Carlos",
      lastName: "Moura",
      participation: 5
    },
    {
      id: 1,
      firstName: "Fernanda",
      lastName: "Oliveira",
      participation: 15
    },
    {
      id: 1,
      firstName: "Hugo",
      lastName: "Silva",
      participation: 20
    },
    {
      id: 1,
      firstName: "Eliza",
      lastName: "Souza",
      participation: 20
    },
    {
      id: 1,
      firstName: "Anderson",
      lastName: "Santos",
      participation: 40
    },
  ]

  return (
    <div className="max-w-full overflow-x-auto overflow-y-hidden md:overflow-hidden md:w-[1000px] lg:w-[500px]">
    <table className="h-full w-full border border-black scroll">
      <thead>
        <tr>
          <th></th>
          <th className="border border-black">
            <span className="text-xl">First Name</span>
          </th>
          <th className="border border-black">
            <span className="text-xl">Last Name</span>
          </th>
          <th className="border border-black">
            <span className="text-xl">Participation (%)</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          employee.map((employer, index) => (
            <tr className="border border-black" key={index}>
              <td className="border border-black">
                <span className="text-xl p-2">{index + 1}</span>
              </td>

              <td className="border border-black">
                <span className="text-xl pl-2">{employer.firstName}</span>
              </td>
              <td className="border border-black pl-2">
                <span className="text-xl">{employer.lastName}</span>
              </td>
              <td className="border border-black pl-2">
                <span className="text-xl">{`${employer.participation}%`}</span>
              </td>
            </tr>
          ))
        }

        {/* <tr v-for="(emp, i) in employee" >
          <td className="border border-black">
            <span className="text-xl p-2">{{ i + 1 }}</span>
          </td>

          <td className="border border-black">
            <span className="text-xl pl-2">{{ emp.firstName }}</span>
          </td>
          <td className="border border-black pl-2">
            <span className="text-xl">{{ emp.lastName }}</span>
          </td>
          <td className="border border-black pl-2">
            <span className="text-xl">{{ `${emp.participation}%` }}</span>
          </td>
        </tr> */}
      </tbody>
    </table>
  </div>
  );
}