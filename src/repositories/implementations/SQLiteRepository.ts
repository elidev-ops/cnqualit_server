import { connection as knex } from "../../database/connection";
import { ICategoryRepository } from "../ICategoryRepository";
import { Category } from "../../entities/Category";
import serializeUrl from "../../util/serializeUrl";


class SQLiteRepository implements ICategoryRepository {
  constructor() {}

  async save(category: Category): Promise<void> {
    await knex('categories').insert(category);
  }

  async list(): Promise<Category[]> {
    const categories = await knex('categories').select('*');

    const serialize = serializeUrl(categories);

    return serialize;
  }
}

export { SQLiteRepository };