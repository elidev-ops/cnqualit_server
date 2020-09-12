import { Request, Response } from 'express';

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(
    private ProductUseCase: CreateProductUseCase
  ) {}

  async create(request: Request, response: Response) {
    await this.ProductUseCase.execute().save(request.body);

    return response.status(201).send();
  }

  async index(request: Request, response: Response) {
    const products = await this.ProductUseCase.execute().index();

    return response.status(200).json(products);
  } 

  async show(request: Request, response: Response) {
    const { id } = request.params;
  
    const products = await this.ProductUseCase.execute().show(Number(id));

    return response.status(200).json(products);
  } 

  async update(request: Request, response: Response) {
    const { id } = request.params;
  
    const products = await this.ProductUseCase.execute().update(Number(id), request.body);

    return response.status(200).json(products);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
  
    await this.ProductUseCase.execute().del(Number(id));

    return response.status(204).send();
  }

  async find(request: Request, response: Response) {
    const { name } = request.query as any;
    const products = await this.ProductUseCase.execute().find(name);

    return response.status(200).json(products);
  }
}

export { CreateProductController };