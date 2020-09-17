import { User } from "../entities/User";

export interface ISessionRepository {
  userAlreadyExists(username: string): Promise<Response>;
  logon(user: User): Promise<User>;
}