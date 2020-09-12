import { connection as knex } from "../../database/connection";
import { Product } from "../../entities/Products";
import { IProductRepository } from "../IProductRepository";

import serializeUrl from "../../util/serializeUrl";

class SQLiteProductRepository implements IProductRepository {
  constructor() {}

  async save(product: Product): Promise<void> {
    await knex('products').insert(product);
  }

  async index(): Promise<Product[]> {
    const products = await knex('products').select('*');

    const serializeProducts = serializeUrl(products);

    return serializeProducts;
  }

  async show(id: number): Promise<Product> {
    const products = await knex('products')
      .where({ id })
      .select('*');
    
    const [SerializedProducts] = serializeUrl(products);

    return SerializedProducts;
  }

  async update(id: number, product: Product): Promise<Product> {
    await knex('products')
      .where({ id })
      .update(product);
    
    return product;
  }

  async delete(id: number): Promise<void> {
    await knex('products')
      .where({ id })
      .del();
  }

  async findByName(name: string) : Promise<Product[]> {
    const products = await knex('products')
      .where('name', 'like', `%${name}%`)
      .select('*');

    const SerializedProducts = serializeUrl(products);

    return SerializedProducts;
  }
  async listForCategory(id: number): Promise<Product[]> {
    const products = await knex('products')
      .where('category_id', '=', id)
      .select('*');
    
    const SerializedProducts = serializeUrl(products);

    return SerializedProducts;
  }
}

export { SQLiteProductRepository };