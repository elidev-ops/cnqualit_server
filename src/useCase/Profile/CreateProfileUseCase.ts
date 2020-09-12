import { IProductRepository } from "../../repositories/IProductRepository";
import { Product } from "../../entities/Products";

class CreateProfileUseCase {
  constructor(
    private ProductRepository: IProductRepository
  ) {}

  async execute(id: number) {
    const DataProducts = await this.ProductRepository.listForCategory(id);

    const products = DataProducts.map(product => new Product(product));

    return products;
  }
}

export { CreateProfileUseCase };