import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export class ListCategoriesController {

  constructor(private list: ListCategoriesUseCase) {}


  handle(request: Request, response: Response) {
    return response.send(this.list.execute())

  }
}