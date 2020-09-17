import { Request, Response, request } from 'express';

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  constructor(
    private ProductUseCase: CreateProductUseCase
  ) {}

  async create(request: Request, response: Response) {
    const image = request.file;
    await this.ProductUseCase.execute().save({...request.body, image: request.file.filename});

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
    console.log(request.file)
    const products = 
      await this.ProductUseCase.execute()
        .update(Number(id), 
          request.file ? {...request.body, image: request.file.filename} 
          : request.body);

    return response.status(200).json('hello');
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