import { createContext, useContext, useEffect, useState } from "react";
import { UserContextData } from "../types/user-context-data";
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
    if (data) {
      setUsers(data.users); // definindo users apenas quando data não for undefined
    }
  }, [])

  useEffect(() => {
    console.log(users);
  }, [users])

  async function createUser(user: any) {
    return Promise.resolve()
  }

  return (
    <UsersContext.Provider value={{ users, createUser }}>
      { children }
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}