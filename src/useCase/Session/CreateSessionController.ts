import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { CreateSessionUseCase } from "./CreateSessionUseCase";

class CreateSessionController {
  constructor(
    private createSessionUseCase: CreateSessionUseCase
  ) {}

  async handler(request: Request, response: Response): Promise<Response> {

   try {
      const { id, username } = await this.createSessionUseCase.execute(request.body);
      
      const token = jwt.sign({ id }, '5d0132b07a3986953ef94d9afd8d970b', {
        expiresIn: '7d'
      });
      return response.status(200).json({username, token});

   } catch (error) {
     return response.status(200).json({
        message: error.message || 'Unexpected error.'
     })
   }

    
  }
}

export { CreateSessionController };