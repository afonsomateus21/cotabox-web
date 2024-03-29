import { User } from "./user";

export type UserInput = Omit<User, 'id'>;

export interface UserContextData {
  users: User[];
  loading: boolean;
  handleCreateUser: (user: UserInput) => Promise<void>;
  handleDeleteUser: (id: string) => Promise<void>;
}