import { connection as knex } from "../../database/connection";

import { ISessionRepository } from './../ISessionRepository';
import { User } from '../../entities/User';

class SQLiteSessionRepository implements ISessionRepository {
  constructor() {}

  async userAlreadyExists(username: string): Promise<Response> {
    const userAlreadyExistis = await knex('user')
    .first()
    .where({ username })
    .select('username');

    return userAlreadyExistis;
  }

  async logon(user: User): Promise<User> {
    const { username , password } = user;
    const res = await knex('user')
      .where({username, password})
      .first();
    return res;
  }
} 

export { SQLiteSessionRepository };