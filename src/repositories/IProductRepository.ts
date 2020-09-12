import { Product } from "../entities/Products";

export interface IProductRepository {
  save(product: Product): Promise<void>;
  index(): Promise<Product[]>;
  show(id: number): Promise<Product>;
  update(id: number, product: Product): Promise<Product>;
  delete(id: number): Promise<void>;
  findByName(name: string): Promise<Product[]>;
  listForCategory(id: number): Promise<Product[]>;
}