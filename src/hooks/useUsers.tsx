import { createContext, useContext, useEffect, useState } from "react";
import { UserContextData, UserInput } from "../types/user-context-data";
import { UsersProviderProps } from "../types/users-provider-props";
import { gql, useQuery } from "@apollo/client";
import { User } from "../types/user";

const UsersContext = createContext<UserContextData>(
  {} as UserContextData
);

const GET_USERS = gql`
  query Users {
    users {
      id,
      firstName,
      lastName,
      participation
    }
  }
`;

export function UsersProvider({ children }: UsersProviderProps) {
  const { loading, data } = useQuery(GET_USERS);
  const [ users, setUsers ] = useState<User[]>([]);

  useEffect(() => {
    setUsers(data?.users);
  }, [users, data])

  async function createUser(user: UserInput) {
    return Promise.resolve()
  }

  return (
    <UsersContext.Provider value={{ users, loading, createUser }}>
      { children }
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}