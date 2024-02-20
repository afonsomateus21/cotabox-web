import { createContext, useContext, useEffect, useState } from "react";
import { UserContextData, UserInput } from "../types/user-context-data";
import { UsersProviderProps } from "../types/users-provider-props";
import { gql, useMutation, useQuery } from "@apollo/client";
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

const CREATE_USER = gql`
  mutation CreateUser($data: CreateUserInput!) {
    createUser(data: $data) {
      id,
      firstName,
      lastName,
      participation
    }
  }
`

const DELETE_USER = gql`
  mutation DeleteUser($data: DeleteUserInput!) {
    deleteUser(data: $data)
  }
`

export function UsersProvider({ children }: UsersProviderProps) {
  const { loading, data: queryData } = useQuery(GET_USERS);
  const [ users, setUsers ] = useState<User[]>([]);
  const [ createUserMutation ] = useMutation(CREATE_USER);
  const [ deleteUserMutation ] = useMutation(DELETE_USER);

  useEffect(() => {
    setUsers(queryData?.users);
  }, [queryData])

  async function handleCreateUser(user: UserInput) {
    if (!user) return;

    const { data: mutationResponse } = await createUserMutation({
      variables: {
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          participation: user.participation
        }
      }
    });

    if (mutationResponse && mutationResponse.createUser) {
      const newUser = mutationResponse.createUser;
      setUsers(prevUsers => [...prevUsers, newUser]);
    }
  }

  async function handleDeleteUser(id: string) {
    if (!id) return;

    const { data: mutationResponse } = await deleteUserMutation({
      variables: {
        data: {
          id
        }
      }
    });

    if (mutationResponse) {
      setUsers(users.filter(user => user.id !== id));
    }
  }

  return (
    <UsersContext.Provider value={{ users, loading, handleCreateUser, handleDeleteUser }}>
      { children }
    </UsersContext.Provider>
  )
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}