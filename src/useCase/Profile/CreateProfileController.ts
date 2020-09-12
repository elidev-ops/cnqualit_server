import { Request, Response } from 'express';

import { CreateProfileUseCase } from "./CreateProfileUseCase";

class CreateProfileController {
  constructor(
    private ProfileUseCase: CreateProfileUseCase
  ) {}
  
  async handler(request: Request, response: Response) {
    const { id } = request.params;
    const products = await this.ProfileUseCase.execute(Number(id));

    return response.status(200).json(products);
  }
}

export { CreateProfileController };