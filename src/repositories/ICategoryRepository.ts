import { Category } from '../entities/Category';

export interface ICategoryRepository {
  save(category: Category): Promise<void>;
  list(): Promise<Category[]>;
}