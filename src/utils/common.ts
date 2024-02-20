import { User } from "../types/user";

export function transformUsersArrayToChartFormat(users: User[] | undefined) {
  if (!users || users.length === 0) {
    return [["Name", "Participation (%)"]];
  }

  return [
    ["Name", "Participation (%)"],
    ...users.map(user => [`${user.firstName} ${user.lastName}`, user.participation])
  ]
}