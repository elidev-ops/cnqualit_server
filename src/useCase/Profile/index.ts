import { SQLiteProductRepository } from "../../repositories/implementations/SQLiteProductRepository";
import { CreateProfileUseCase } from "./CreateProfileUseCase";
import { CreateProfileController } from "./CreateProfileController";

const sqliteProductRepository = new SQLiteProductRepository();

const createProfileUseCase = new CreateProfileUseCase(sqliteProductRepository);

const createProfileController = new CreateProfileController(createProfileUseCase);

export { createProfileController };