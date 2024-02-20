import { useUsers } from "../hooks/useUsers";
import { Trash2 } from 'lucide-react';

export function ParticipationTable() {
  const { users, handleDeleteUser } = useUsers();

  return (
    <div className="max-w-full overflow-x-auto lg:overflow-x-hidden lg:overflow-y-hidden lg:w-[600px]">
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
            <th className="border border-black">
              <span className="text-xl">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user, index) => (
              <tr className="border border-black" key={user.id}>
                <td className="border border-black">
                  <span className="text-xl p-2">{index + 1}</span>
                </td>

                <td className="border border-black">
                  <span className="text-xl pl-2">{user.firstName}</span>
                </td>
                <td className="border border-black pl-2">
                  <span className="text-xl">{user.lastName}</span>
                </td>
                <td className="border border-black pl-2">
                  <span className="text-xl">{`${user.participation}%`}</span>
                </td>
                <td className="border border-black pl-2">
                  <Trash2 
                    color="red" 
                    size={20} 
                    className="mx-auto my-0 cursor-pointer"  
                    onClick={ () => handleDeleteUser(user.id) }
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  </div>
  );
}