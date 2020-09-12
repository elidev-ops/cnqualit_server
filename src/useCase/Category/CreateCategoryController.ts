import { Request, Response } from 'express';

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(
    private CategoryUseCase: CreateCategoryUseCase
  ) {}

  async create(request: Request, response: Response) {
    await (await this.CategoryUseCase.execute(request.body)).create();

    return response.status(201).send();
  }

  async index(request: Request, response: Response) {
    const categories = await (await this.CategoryUseCase.execute(request.body)).list();

    return response.status(200).json(categories);
  }
}

export { CreateCategoryController };