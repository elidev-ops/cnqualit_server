import { Request, Response } from "express";
import { CreateEmailUseCase } from "./CreateEmailUseCase";

export class CreateEmailController {
  constructor(
    private createEmailUseCase: CreateEmailUseCase
  ) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, message, subject } = request.body;

    try {
      await this.createEmailUseCase.execute({
        name,
        email,
        subject,
        message
      }); 
      return response.status(201).send();
      
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected Error-'
      })
    }
  }
}