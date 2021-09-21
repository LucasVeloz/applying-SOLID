import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {

  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request:Request, response: Response) {
    const { name } = request.body;


    try {
      const result = this.createCategoryUseCase.execute(name)
      return response.status(201).send(result)
    } catch (error) {
      return response.status(400).send({error: error.message})
    }

  }
}