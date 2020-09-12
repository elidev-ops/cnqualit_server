import { SQLiteRepository } from "../../repositories/implementations/SQLiteRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";


const sqliteRepository = new SQLiteRepository();

const createCategoryUseCase = new CreateCategoryUseCase(sqliteRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };