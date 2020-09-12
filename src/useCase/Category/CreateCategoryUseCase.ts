import { ICategoryRepository } from "../../repositories/ICategoryRepository";
import { ICreateCategoryRequestDTO } from "./CreateCategoryDTO";
import { Category } from "../../entities/Category";

class CreateCategoryUseCase {
  constructor(
    private CategoryRepository: ICategoryRepository
  ) {}

  async execute(data: ICreateCategoryRequestDTO) {
    const create = async() => {
      const category = new Category(data);
      await this.CategoryRepository.save(category);
    }

    const list = async () => {
      const data = await this.CategoryRepository.list();
  
      const categories = data.map(category => new Category(category));
  
      return categories;
    }

    return {
      create,
      list
    }
  }
}

export { CreateCategoryUseCase };
