import { User } from "./user";

export type UserInput = Omit<User, 'id'>;

export interface UserContextData {
  users: User[];
  loading: boolean;
  createUser: (user: UserInput) => Promise<void>;
}