import { SQLiteSessionRepository } from "../../repositories/implementations/SQLiteSessionRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { CreateSessionController } from "./CreateSessionController";

const sqliteSessionRepository = new SQLiteSessionRepository();
const createSessionUseCase = new CreateSessionUseCase(sqliteSessionRepository);
const createSessionController = new CreateSessionController(createSessionUseCase);

export { createSessionController };