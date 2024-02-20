import { User } from "./user";

type UserInput = Omit<User, 'id'>;

export interface UserContextData {
  users: User[];
  createUser: (user: UserInput) => Promise<void>;
}