import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

export class CreateCategoryService {
  constructor(private list: ICategoriesRepository) {}
  execute(name: string) {
    if (this.list.findByName(name)){ 
      throw new Error ('This category has already been registered')
    }
    return this.list.addCategory({ name });
  }
}