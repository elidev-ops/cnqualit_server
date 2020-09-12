import { SQLiteProductRepository } from "../../repositories/implementations/SQLiteProductRepository";
import { CreateProductUseCase } from "./CreateProductUseCase";
import { CreateProductController } from "./CreateProductController";

const sqliteProductRepository = new SQLiteProductRepository();

const createProductUseCase = new CreateProductUseCase(sqliteProductRepository);

const createProductController = new CreateProductController(createProductUseCase);

export { createProductController };