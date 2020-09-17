import { IProductRepository } from "../../repositories/IProductRepository";
import { ICreateProductRequestDTO } from "./CreateProductDTO";
import { Product } from "../../entities/Products";

class CreateProductUseCase {
  constructor(
    private ProductRepository: IProductRepository
  ) {}

  execute() {
    const save = async (data: ICreateProductRequestDTO) => {
      const product = new Product(data);

      await this.ProductRepository.save(product);
    }

    const index = async () => {
      const data = await this.ProductRepository.index();

      const products = data.map(product => new Product(product));

      return products;
    }

    const show = async (id: number) => {
      const ResponseData = await this.ProductRepository.show(id);

      const product = new Product(ResponseData);

      return product;
    }

    const update = async (id: number, data: ICreateProductRequestDTO) => {
      const ResponseData = await this.ProductRepository.update(id, data);

      return ResponseData;
    }

    const del = async (id: number) => {
      await this.ProductRepository.delete(id);
    }

    const find = async (name: string) => {
      const data = await this.ProductRepository.findByName(name);

      const products = data.map(product => new Product(product));

      return products;
    }

    return {
      save,
      index,
      show,
      update,
      del,
      find
    }
  }
}
export { CreateProductUseCase };