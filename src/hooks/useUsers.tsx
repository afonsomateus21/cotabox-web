import { createContext, useContext, useEffect, useState } from "react";
import { UserContextData, UserInput } from "../types/user-context-data";
import { UsersProviderProps } from "../types/users-provider-props";
import { useMutation, useQuery } from "@apollo/client";
import { User } from "../types/user";
import { toast } from "sonner";
import { GET_USERS } from "../api/queries";
import { CREATE_USER, DELETE_USER } from "../api/mutations";

const UsersContext = createContext<UserContextData>(
  {} as UserContextData
);

export function UsersProvider({ children }: UsersProviderProps) {
  const { loading, data: queryData } = useQuery(GET_USERS);
  const [ users, setUsers ] = useState<User[]>([]);
  const [ createUserMutation, { error: createUserError } ] = useMutation(CREATE_USER);
  const [ deleteUserMutation, { error: deleteUserError } ] = useMutation(DELETE_USER);

  useEffect(() => {
    setUsers(queryData?.users);
  }, [queryData])

  async function handleCreateUser(user: UserInput) {
    try {
      if (!user) {
        return
      };
  
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
        toast.success("User successfully created!");
      }
    } catch(error) {
      toast.error(createUserError?.message)
    }
  }

  async function handleDeleteUser(id: string) {
    try {
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
        toast.success("User successfully deleted!");
      }
    } catch (e) {
      toast.error(deleteUserError?.message);
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